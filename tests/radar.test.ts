import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';

interface RadarEntry {
  id: string;
  name: string;
  ring: string;
  quadrant: string;
  moved?: string;
  since?: string | number;
  summary: string;
  links?: { label: string; href: string }[];
}

const entries = parse(readFileSync('src/data/radar.yaml', 'utf8')) as RadarEntry[];

describe('radar.yaml', () => {
  it('keeps a short, balanced board', () => {
    expect(entries.length).toBeGreaterThanOrEqual(10);
    expect(entries.length).toBeLessThanOrEqual(20);

    for (const quadrant of ['ai', 'security', 'engineering']) {
      const count = entries.filter((entry) => entry.quadrant === quadrant).length;
      expect(count, `${quadrant} entries`).toBeGreaterThanOrEqual(2);
      expect(count, `${quadrant} entries`).toBeLessThanOrEqual(6);
    }
  });

  it('has unique ids and names', () => {
    expect(new Set(entries.map((entry) => entry.id)).size).toBe(entries.length);
    expect(new Set(entries.map((entry) => entry.name)).size).toBe(entries.length);
  });

  it('uses only valid rings, quadrants and moves', () => {
    for (const entry of entries) {
      expect(['adopt', 'trial', 'assess', 'hold']).toContain(entry.ring);
      expect(['ai', 'security', 'engineering']).toContain(entry.quadrant);
      expect(['new', 'up', 'down', 'same']).toContain(entry.moved ?? 'same');
      expect(entry.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it('gives every entry a decision summary and primary links', () => {
    for (const entry of entries) {
      expect(entry.summary.length).toBeGreaterThanOrEqual(40);
      expect(entry.links?.length ?? 0).toBeGreaterThan(0);
      for (const link of entry.links ?? []) {
        expect(link.label.length).toBeGreaterThan(0);
        expect(link.href).toMatch(/^https?:\/\//);
      }
    }
  });
});
