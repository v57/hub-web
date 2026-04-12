import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'bun:test';

const layoutSource = readFileSync('src/routes/+layout.svelte', 'utf8');

describe('theme tokens', () => {
  it('defines the semantic color tokens in the global layout', () => {
    expect(layoutSource).toContain('--color-page');
    expect(layoutSource).toContain('--color-surface');
    expect(layoutSource).toContain('--color-text');
    expect(layoutSource).toContain('--color-accent');
    expect(layoutSource).toContain('--color-status-success');
  });
});
