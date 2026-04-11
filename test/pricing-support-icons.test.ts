import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'bun:test';

const supportIconFiles = ['github.svg', 'discord.svg', 'reddit.svg', 'twitter.svg'] as const;

describe('pricing support icons', () => {
  it('keeps the svg assets tightly cropped and shadow-free', () => {
    for (const fileName of supportIconFiles) {
      const svg = readFileSync(join(process.cwd(), 'static/files/apps', fileName), 'utf8');

      expect(svg).not.toContain('<filter');
      expect(svg).not.toContain('filter=');
      expect(svg).toContain('<rect');
      expect(svg).toContain('width="64"');
      expect(svg).toContain('height="64"');
    }
  });
});
