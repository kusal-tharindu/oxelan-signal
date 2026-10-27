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

  const setMenu = (open) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle('hidden', !open);
    const openIcon = $('[data-menu-icon="open"]', menuToggle);
    const closeIcon = $('[data-menu-icon="close"]', menuToggle);
    if (openIcon) openIcon.classList.toggle('hidden', open);
    if (closeIcon) closeIcon.classList.toggle('hidden', !open);
  };

  menuToggle?.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
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
      const dynamicImport = new Function('url', 'return import(url)');
      searchEngine = await dynamicImport('/pagefind/pagefind.js');
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

  /* --------------------------------------------------------------- Filters */
  const filterRoot = $('[data-filter-root]');
  const filterTarget = $('[data-filter-target]');
  if (filterRoot && filterTarget) {
    const cards = $$('[data-post-card]', filterTarget);
    const fixedSection = filterTarget.dataset.sectionFilter ?? 'all';
    const state = { section: 'all', format: 'all', impact: 'all' };
    const pageSize = Number(filterTarget.dataset.pageSize ?? 10);
    let visibleLimit = pageSize;

    const readUrl = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('section')) state.section = params.get('section');
      if (params.get('format')) state.format = params.get('format');
      if (params.get('impact')) state.impact = params.get('impact');
    };

    const writeUrl = () => {
      const params = new URLSearchParams(window.location.search);
      for (const key of ['section', 'format', 'impact']) {
        if (state[key] === 'all') params.delete(key);
        else params.set(key, state[key]);
      }
      const query = params.toString();
      window.history.replaceState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
    };

    const syncButtons = () => {
      $$('[data-filter-group]', filterRoot).forEach((button) => {
        const group = button.dataset.filterGroup;
        button.setAttribute('aria-pressed', String(state[group] === button.dataset.filterValue));
      });
    };

    const matches = (card) => {
      if (fixedSection !== 'all' && card.dataset.section !== fixedSection) return false;
      if (state.section !== 'all' && card.dataset.section !== state.section) return false;
      if (state.format !== 'all' && card.dataset.format !== state.format) return false;
      if (state.impact === 'urgent' && !['critical', 'high'].includes(card.dataset.impact))
        return false;
      if (
        state.impact !== 'all' &&
        state.impact !== 'urgent' &&
        card.dataset.impact !== state.impact
      )
        return false;
      return true;
    };

    const applyFilters = () => {
      let matched = 0;
      let shown = 0;
      cards.forEach((card) => {
        const ok = matches(card);
        if (ok) matched += 1;
        const visible = ok && shown < visibleLimit;
        if (visible) shown += 1;
        card.hidden = !visible;
      });

      const empty = $('[data-filter-empty]', filterTarget);
      if (empty) empty.hidden = matched !== 0;

      const count = $('[data-filter-count]', filterRoot);
      if (count) {
        count.textContent =
          matched === cards.length ? `${matched} posts` : `${matched} of ${cards.length} posts`;
      }

      const more = $('[data-load-more]', filterTarget);
      if (more) more.hidden = matched <= visibleLimit;
    };

    $$('[data-filter-group]', filterRoot).forEach((button) => {
      button.addEventListener('click', () => {
        state[button.dataset.filterGroup] = button.dataset.filterValue;
        visibleLimit = pageSize;
        syncButtons();
        writeUrl();
        applyFilters();
      });
    });

    $('[data-filter-clear]', filterRoot)?.addEventListener('click', () => {
      state.section = 'all';
      state.format = 'all';
      state.impact = 'all';
      visibleLimit = pageSize;
      syncButtons();
      writeUrl();
      applyFilters();
    });

    $('[data-load-more]', filterTarget)?.addEventListener('click', () => {
      visibleLimit += pageSize;
      applyFilters();
    });

    readUrl();
    if (fixedSection !== 'all' && state.section === 'all') state.section = fixedSection;
    syncButtons();
    applyFilters();
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
      if (label) {
        const previous = label.textContent;
        label.textContent = 'Copied';
        window.setTimeout(() => {
          label.textContent = previous;
        }, 1600);
      }
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
})();
