import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'bun:test';

const supportIconFiles = [
  'discord.svg',
  'patreon.svg',
  'boosty.svg',
  'github.svg',
  'buymeacoffee.svg',
  'kofi.svg',
  'usdt.svg',
  'btc.svg'
] as const;

describe('pricing support icons', () => {
  it('keeps the svg assets tightly cropped and shadow-free', () => {
    for (const fileName of supportIconFiles) {
      const svg = readFileSync(join(process.cwd(), 'static/files/apps', fileName), 'utf8');

      expect(svg).not.toContain('<filter');
      expect(svg).not.toContain('filter=');
      expect(svg).toContain('width="64"');
      expect(svg).toContain('height="64"');
      expect(svg).toContain('<path');
    }
  });
});
