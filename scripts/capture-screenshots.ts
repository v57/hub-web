import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

export type ScreenshotPage = {
  name: string;
  path: string;
};

export const appPages: ScreenshotPage[] = [
  { name: 'home', path: '/' },
  { name: 'pricing', path: '/pricing' },
  { name: 'feedback', path: '/feedback' }
];

export async function captureScreenshots(options: {
  baseUrl: string;
  pages: ScreenshotPage[];
  outDir: string;
  viewport?: { width: number; height: number };
}) {
  const viewport = options.viewport ?? { width: 1440, height: 2200 };

  await mkdir(options.outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport });

  try {
    for (const entry of options.pages) {
      const url = new URL(entry.path, options.baseUrl).href;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.screenshot({
        fullPage: true,
        path: path.join(options.outDir, `${entry.name}.png`)
      });
    }
  } finally {
    await page.close();
    await browser.close();
  }
}

function parseArgs(argv: string[]) {
  const result: Record<string, string> = {};

  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index];
    if (!current.startsWith('--')) {
      continue;
    }

    const key = current.slice(2);
    const next = argv[index + 1];
    if (next && !next.startsWith('--')) {
      result[key] = next;
      index += 1;
    } else {
      result[key] = 'true';
    }
  }

  return result;
}

if (import.meta.main) {
  const args = parseArgs(Bun.argv.slice(2));
  const outDir = args.out ?? 'screenshots/current';
  const baseUrl = args['base-url'] ?? 'http://127.0.0.1:5173';

  await captureScreenshots({
    baseUrl,
    pages: appPages,
    outDir
  });
}
