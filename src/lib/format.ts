/** Pure formatting and text helpers. No Astro imports, so they are unit-testable. */

export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const plain = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*_`~|+-]/g, ' ');
  const words = plain.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatDate(date: Date, options: Intl.DateTimeFormatOptions = {}): string {
  const compact = options.month !== undefined || options.day !== undefined;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: compact ? undefined : 'numeric',
    timeZone: 'UTC',
    ...options,
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function isoDateTime(date: Date): string {
  return date.toISOString();
}

export function displayFormat(format: string): string {
  return format.replace(/^./, (letter) => letter.toUpperCase());
}

/** Derive author initials ("Kusal Tharindu" -> "KT") so components never hard-code them. */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function pluralise(count: number, singular: string, plural = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : plural}`;
}

export function truncate(value: string, max: number): string {
  if (value.length <= max) return value;
  return `${value.slice(0, Math.max(0, max - 1)).trimEnd()}…`;
}
