/* Oxelan Signal — small, dependency-free progressive enhancement. */
(function () {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  /* ---------------------------------------------------------------- Theme */
  const themeMeta = $('meta[name="theme-color"]');
  const applyThemeChrome = () => {
    const theme = document.documentElement.dataset.theme;
    $$('[data-theme-toggle]').forEach((button) => {
      button.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
      );
      const sun = $('[data-theme-icon="sun"]', button);
      const moon = $('[data-theme-icon="moon"]', button);
      if (sun) sun.classList.toggle('hidden', theme !== 'dark');
      if (moon) moon.classList.toggle('hidden', theme !== 'light');
    });
    if (themeMeta) themeMeta.content = theme === 'dark' ? '#0a0e17' : '#f6f2e8';
  };

  applyThemeChrome();

  $$('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem('theme', next);
      } catch (_) {
        /* storage can be blocked; the toggle still works for this page */
      }
      applyThemeChrome();
      document.dispatchEvent(new CustomEvent('signal:theme', { detail: next }));
    });
  });

  /* ------------------------------------------------------------ Navigation */
  const nav = $('[data-site-nav]');
  const setScrolled = () => {
    if (nav) nav.dataset.scrolled = window.scrollY > 6 ? 'true' : 'false';
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  const menuToggle = $('[data-menu-toggle]');
  const mobileMenu = $('[data-mobile-menu]');

  const setMenu = (open, { focusFirst = false } = {}) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle('hidden', !open);
    const openIcon = $('[data-menu-icon="open"]', menuToggle);
    const closeIcon = $('[data-menu-icon="close"]', menuToggle);
    if (openIcon) openIcon.classList.toggle('hidden', open);
    if (closeIcon) closeIcon.classList.toggle('hidden', !open);
    // Move focus into the menu on open so keyboard users do not have to tab back.
    if (open && focusFirst) $('a', mobileMenu)?.focus();
  };

  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    setMenu(open, { focusFirst: open });
  });

  // Escape closes the menu and returns focus to the toggle (BLOG-L6).
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (menuToggle?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });

  $$('a', mobileMenu ?? document.createElement('div')).forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  /* ---------------------------------------------------------------- Search */
  const dialog = $('[data-search-dialog]');
  const searchInput = $('[data-search-input]');
  const resultsRoot = $('[data-search-results]');
  let searchEngine;
  let searchIndex;
  let selectedIndex = -1;
  let searchTimer;
  let requestId = 0;

  const setResultsMessage = (message, detail) => {
    if (!resultsRoot) return;
    resultsRoot.replaceChildren();
    const wrapper = document.createElement('div');
    wrapper.className = 'px-3 py-8 text-center text-sm text-muted';
    const main = document.createElement('p');
    main.textContent = message;
    wrapper.append(main);
    if (detail) {
      const sub = document.createElement('p');
      sub.className = 'mt-1 text-xs';
      sub.textContent = detail;
      wrapper.append(sub);
    }
    resultsRoot.append(wrapper);
  };

  const loadEngine = async () => {
    if (searchEngine !== undefined) return searchEngine;
    try {
      searchEngine = await import(/* @vite-ignore */ '/pagefind/pagefind.js');
      if (typeof searchEngine.init === 'function') await searchEngine.init();
    } catch (_) {
      searchEngine = null;
    }
    return searchEngine;
  };

  const loadFallbackIndex = async () => {
    if (searchIndex !== undefined) return searchIndex;
    try {
      const response = await fetch('/search-index.json');
      searchIndex = response.ok ? await response.json() : [];
    } catch (_) {
      searchIndex = [];
    }
    return searchIndex;
  };

  const makeResult = (result) => {
    const link = document.createElement('a');
    link.className = 'search-result';
    link.href = result.url;

    const title = document.createElement('div');
    title.className = 'search-result-title';

    const section = document.createElement('span');
    section.className = 'label shrink-0';
    const sectionColors = {
      ai: 'var(--ai)',
      security: 'var(--sec)',
      engineering: 'var(--eng)',
      digest: 'var(--brand)',
    };
    section.style.color = sectionColors[result.sectionKey] ?? 'var(--brand)';
    section.textContent = result.section ?? 'Post';
    title.append(section);

    const heading = document.createElement('span');
    heading.textContent = result.title;
    title.append(heading);
    link.append(title);

    if (result.excerpt) {
      const summary = document.createElement('p');
      summary.className = 'search-result-summary';
      // Pagefind returns escaped excerpts with <mark> highlights.
      summary.innerHTML = result.excerpt;
      link.append(summary);
    } else if (result.summary) {
      const summary = document.createElement('p');
      summary.className = 'search-result-summary';
      summary.textContent = result.summary;
      link.append(summary);
    }

    return link;
  };

  const renderResults = (results, query) => {
    if (!resultsRoot) return;
    resultsRoot.replaceChildren();
    selectedIndex = -1;

    if (results.length === 0) {
      setResultsMessage(`No results for “${query}”.`, 'Try a tag, a tool name, or fewer words.');
      return;
    }

    results.slice(0, 12).forEach((result) => resultsRoot.append(makeResult(result)));
  };

  const scoreFallback = (item, terms) => {
    const haystack = {
      title: item.title.toLowerCase(),
      tags: (item.tags ?? []).join(' ').toLowerCase(),
      summary: (item.summary ?? '').toLowerCase(),
      body: (item.body ?? '').toLowerCase(),
    };
    return terms.reduce((score, term) => {
      let next = score;
      if (haystack.title.includes(term)) next += 8;
      if (haystack.tags.includes(term)) next += 5;
      if (haystack.summary.includes(term)) next += 3;
      if (haystack.body.includes(term)) next += 1;
      return next;
    }, 0);
  };

  const runSearch = async (query) => {
    const clean = query.trim();
    if (!clean) {
      setResultsMessage(
        'Type to search the archive.',
        'Search by title, tag, summary or body text.',
      );
      return;
    }

    const id = ++requestId;
    const engine = await loadEngine();

    if (engine) {
      try {
        const search = await engine.search(clean);
        if (id !== requestId) return;
        const results = await Promise.all(
          search.results.slice(0, 20).map(async (result) => {
            const data = await result.data();
            return {
              url: data.url,
              title: data.meta?.title ?? 'Untitled',
              section: data.meta?.section,
              sectionKey: data.meta?.sectionKey,
              excerpt: data.excerpt,
            };
          }),
        );
        if (id === requestId) renderResults(results, clean);
        return;
      } catch (_) {
        /* fall through to the development index */
      }
    }

    const index = await loadFallbackIndex();
    if (id !== requestId) return;
    const terms = clean.toLowerCase().split(/\s+/).filter(Boolean);
    const scored = index
      .map((item) => ({ item, score: scoreFallback(item, terms) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map(({ item }) => item);
    renderResults(scored, clean);
  };

  const openSearch = () => {
    if (!dialog) return;
    setMenu(false);
    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    window.setTimeout(() => searchInput?.focus(), 20);
  };

  const closeSearch = () => {
    if (!dialog) return;
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else dialog.removeAttribute('open');
  };

  $$('[data-search-open]').forEach((button) => button.addEventListener('click', openSearch));
  $('[data-search-close]')?.addEventListener('click', closeSearch);

  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) closeSearch();
  });

  dialog?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeSearch();
  });

  searchInput?.addEventListener('input', (event) => {
    window.clearTimeout(searchTimer);
    const value = event.target.value;
    searchTimer = window.setTimeout(() => runSearch(value), 130);
  });

  searchInput?.addEventListener('keydown', (event) => {
    const links = $$('.search-result', resultsRoot ?? document);
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (links.length === 0) return;
      selectedIndex =
        event.key === 'ArrowDown'
          ? (selectedIndex + 1) % links.length
          : (selectedIndex - 1 + links.length) % links.length;
      links.forEach((link, index) => link.classList.toggle('is-selected', index === selectedIndex));
      links[selectedIndex]?.scrollIntoView({ block: 'nearest' });
    }
    if (event.key === 'Enter' && selectedIndex >= 0) {
      event.preventDefault();
      links[selectedIndex]?.click();
    }
  });

  document.addEventListener('keydown', (event) => {
    const target = event.target;
    const typing =
      target instanceof HTMLElement &&
      (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

    if (
      (event.key === '/' && !typing) ||
      ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k')
    ) {
      event.preventDefault();
      openSearch();
    }
    if (event.key === 'Escape' && dialog?.open) closeSearch();
  });

  /* ------------------------------------------------------------ Tag filter */
  const tagFilter = $('[data-tag-filter]');
  const tagItems = $$('[data-tag-item]');
  if (tagFilter && tagItems.length > 0) {
    const groups = $$('[data-tag-group]');
    const empty = $('[data-tag-empty]');
    const countLabel = $('[data-tag-count]');
    const total = tagItems.length;

    const applyTagFilter = () => {
      const query = tagFilter.value.trim().toLowerCase();
      let shown = 0;
      tagItems.forEach((item) => {
        const match = query === '' || (item.dataset.tagItem ?? '').includes(query);
        item.hidden = !match;
        if (match) shown += 1;
      });
      groups.forEach((group) => {
        const visible = $$('[data-tag-item]', group).some((item) => !item.hidden);
        group.hidden = !visible;
      });
      if (empty) empty.hidden = shown !== 0;
      if (countLabel) {
        countLabel.textContent = query === '' ? `${total} tags` : `${shown} of ${total} tags`;
      }
    };

    tagFilter.addEventListener('input', applyTagFilter);
    applyTagFilter();
  }

  /* ------------------------------------------- Read-only task list labels */
  $$('.prose-signal input[type="checkbox"][disabled]').forEach((input) => {
    input.setAttribute('aria-label', input.checked ? 'Completed' : 'Not completed');
    input.setAttribute('tabindex', '-1');
  });

  /* ------------------------------------------------------------- Copy code */
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.append(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
  };

  $$('.prose-signal pre').forEach((pre) => {
    if ($('.copy-code', pre)) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-code';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');
    button.addEventListener('click', async () => {
      const code = $('code', pre) ?? pre;
      await copyText(code.innerText);
      button.textContent = 'Copied';
      button.classList.add('is-copied');
      window.setTimeout(() => {
        button.textContent = 'Copy';
        button.classList.remove('is-copied');
      }, 1600);
    });
    pre.append(button);
  });

  /* ------------------------------------------------------------- Copy link */
  $$('[data-copy-link]').forEach((button) => {
    button.addEventListener('click', async () => {
      await copyText(button.dataset.copyLink);
      const label = $('[data-copy-label]', button);
      const linkIcon = $('[data-copy-icon="link"]', button);
      const checkIcon = $('[data-copy-icon="check"]', button);
      if (!label) return;
      const previous = label.textContent;
      label.textContent = 'Copied';
      button.classList.add('is-copied');
      if (linkIcon) linkIcon.classList.add('hidden');
      if (checkIcon) checkIcon.classList.remove('hidden');
      window.setTimeout(() => {
        label.textContent = previous;
        button.classList.remove('is-copied');
        if (linkIcon) linkIcon.classList.remove('hidden');
        if (checkIcon) checkIcon.classList.add('hidden');
      }, 2000);
    });
  });

  /* ---------------------------------------------------- Reading progress + TOC */
  const progress = $('[data-reading-progress]');
  const article = $('[data-article]');
  if (progress && article) {
    const updateProgress = () => {
      const rect = article.getBoundingClientRect();
      const total = Math.max(article.offsetHeight - window.innerHeight * 0.4, 1);
      const passed = Math.min(Math.max(-rect.top + 120, 0), total);
      progress.style.width = `${(passed / total) * 100}%`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }

  const tocLinks = $$('[data-toc-link]');
  if (tocLinks.length > 0) {
    const headingMap = new Map(
      tocLinks.map((link) => [link.dataset.tocLink, link]).filter(([id]) => id),
    );
    const headings = $$('h2[id], h3[id]', $('[data-article-body]') ?? document);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          tocLinks.forEach((link) => {
            link.classList.remove('is-active');
            link.removeAttribute('aria-current');
          });
          const active = headingMap.get(entry.target.id);
          if (active) {
            active.classList.add('is-active');
            active.setAttribute('aria-current', 'location');
          }
        }
      },
      { rootMargin: '-15% 0px -72% 0px', threshold: 0 },
    );
    headings.forEach((heading) => observer.observe(heading));
  }

  /* ----------------------------------------------------------- Signal field */
  const signalField = $('[data-signal-field]');
  if (signalField && !signalField.dataset.ready) {
    signalField.dataset.ready = '1';
    const canvas = $('canvas', signalField);
    const dataEl = $('[data-signal-data]', signalField);
    const ctx = canvas?.getContext('2d');
    let graph = { nodes: [], edges: [] };
    try {
      if (dataEl?.textContent) graph = JSON.parse(dataEl.textContent);
    } catch (_) {
      graph = { nodes: [], edges: [] };
    }

    if (ctx && graph.nodes.length > 0) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
      const root = document.documentElement;
      let colors = {};
      const readColors = () => {
        const css = getComputedStyle(root);
        colors = {
          edge: css.getPropertyValue('--brand').trim() || '#e0a619',
          critical: css.getPropertyValue('--critical').trim() || '#ff5a5a',
          high: css.getPropertyValue('--high').trim() || '#ff9f45',
          medium: css.getPropertyValue('--medium').trim() || '#f4cf5b',
          low: css.getPropertyValue('--low').trim() || '#79b8ff',
          info: css.getPropertyValue('--info').trim() || '#9aa7bd',
          lead: css.getPropertyValue('--brand').trim() || '#e0a619',
          node: css.getPropertyValue('--muted-strong').trim() || '#bcc6d7',
        };
      };
      readColors();
      document.addEventListener('signal:theme', readColors);

      // Golden-angle sphere: even, deterministic layout for any node count.
      const points = graph.nodes.map((node, index) => {
        const k = index + 0.5;
        const y = 1 - (k / graph.nodes.length) * 2;
        const radius = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = k * Math.PI * (3 - Math.sqrt(5));
        return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius, ...node };
      });

      let width = 0;
      let height = 0;
      let dpr = 1;
      let drawStatic = null;
      const resize = () => {
        const rect = signalField.getBoundingClientRect();
        width = Math.max(1, rect.width);
        height = Math.max(1, rect.height);
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        // Resizing clears the canvas; under reduced motion there is no loop to repaint it.
        if (reduced.matches) drawStatic?.();
      };
      resize();
      new ResizeObserver(resize).observe(signalField);

      let onScreen = true;
      new IntersectionObserver(
        (entries) => {
          onScreen = entries[0]?.isIntersecting !== false;
        },
        { threshold: 0 },
      ).observe(signalField);

      let rotation = 0;
      let last = performance.now();
      const depth = 3.4;

      const colorFor = (node) => {
        if (node.lead) return colors.lead;
        return colors[node.impact] ?? colors.info;
      };

      const draw = (now) => {
        if (document.hidden || (!onScreen && !reduced.matches)) {
          last = now;
          if (!reduced.matches) requestAnimationFrame(draw);
          return;
        }
        const dt = Math.min(48, now - last);
        last = now;
        if (!reduced.matches) rotation += dt * 0.00022;

        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);
        const tilt = 0.42;
        const cosX = Math.cos(tilt);
        const sinX = Math.sin(tilt);
        const cx = width / 2;
        const cy = height * 0.45;
        const R = Math.min(width, height) * 0.46;

        const project = (x, y, z) => {
          const x1 = x * cos - z * sin;
          const z1 = x * sin + z * cos;
          const y1 = y * cosX - z1 * sinX;
          const z2 = y * sinX + z1 * cosX;
          const scale = depth / (depth - z2);
          return { sx: cx + x1 * scale * R, sy: cy + y1 * scale * R, scale };
        };

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, width, height);

        // Wireframe globe: latitude rings and meridians make the 3D read instantly.
        ctx.strokeStyle = colors.edge;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.09;
        for (const latDeg of [-60, -30, 0, 30, 60]) {
          const lat = (latDeg * Math.PI) / 180;
          const ring = Math.cos(lat);
          const y = Math.sin(lat);
          ctx.beginPath();
          for (let i = 0; i <= 60; i += 1) {
            const t = (i / 60) * Math.PI * 2;
            const p = project(Math.cos(t) * ring, y, Math.sin(t) * ring);
            if (i === 0) ctx.moveTo(p.sx, p.sy);
            else ctx.lineTo(p.sx, p.sy);
          }
          ctx.stroke();
        }
        for (let m = 0; m < 8; m += 1) {
          const theta = (m / 8) * Math.PI * 2;
          ctx.beginPath();
          for (let i = 0; i <= 40; i += 1) {
            const lat = -Math.PI / 2 + (i / 40) * Math.PI;
            const p = project(
              Math.cos(lat) * Math.cos(theta),
              Math.sin(lat),
              Math.cos(lat) * Math.sin(theta),
            );
            if (i === 0) ctx.moveTo(p.sx, p.sy);
            else ctx.lineTo(p.sx, p.sy);
          }
          ctx.stroke();
        }

        const projected = points.map((p) => ({ ...project(p.x, p.y, p.z), node: p }));

        for (const [a, b] of graph.edges) {
          const pa = projected[a];
          const pb = projected[b];
          if (!pa || !pb) continue;
          ctx.strokeStyle = colors.edge;
          ctx.globalAlpha = 0.07 + 0.16 * ((pa.scale + pb.scale) / 2);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pa.sx, pa.sy);
          ctx.lineTo(pb.sx, pb.sy);
          ctx.stroke();
        }

        for (const [index, p] of projected.entries()) {
          const base = p.node.lead ? 5 : p.node.advisory ? 4 : 2.5;
          const pulse =
            p.node.advisory && !reduced.matches
              ? 0.5 + 0.5 * Math.sin(now * 0.004 + index * 1.7)
              : 0;
          const radius = (base + pulse * 1.8) * p.scale;
          ctx.globalAlpha = 0.9;
          if (p.node.advisory || p.node.lead) {
            ctx.shadowColor = colorFor(p.node);
            ctx.shadowBlur = (p.node.lead ? 18 : 12) * p.scale;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fillStyle = colorFor(p.node);
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          if (p.node.lead) {
            ctx.globalAlpha = 0.45;
            ctx.strokeStyle = colorFor(p.node);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, radius + 4 * p.scale, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;

        if (!reduced.matches) requestAnimationFrame(draw);
      };

      drawStatic = () => draw(performance.now());
      reduced.addEventListener('change', () => {
        if (reduced.matches) drawStatic();
        else requestAnimationFrame(draw);
      });

      if (reduced.matches) drawStatic();
      else requestAnimationFrame(draw);
    }
  }
})();
