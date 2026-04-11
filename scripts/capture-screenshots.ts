import { mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

export type ScreenshotPage = {
  name: string;
  path: string;
};

export const currentPages: ScreenshotPage[] = [
  { name: 'home', path: '/index.html' },
  { name: 'pricing', path: '/pricing.html' },
  { name: 'feedback', path: '/feedback.html' }
];

export const appPages: ScreenshotPage[] = [
  { name: 'home', path: '/' },
  { name: 'pricing', path: '/pricing' },
  { name: 'feedback', path: '/feedback' }
];

export function startStaticServer(rootDir: string, port = 4173) {
  const resolvedRoot = path.resolve(rootDir);

  const server = Bun.serve({
    hostname: '127.0.0.1',
    port,
    async fetch(request) {
      const url = new URL(request.url);
      let pathname = decodeURIComponent(url.pathname);

      if (pathname === '/') {
        pathname = '/index.html';
      } else if (pathname === '/pricing') {
        pathname = '/pricing.html';
      } else if (pathname === '/feedback') {
        pathname = '/feedback.html';
      }

      const filePath = path.resolve(resolvedRoot, `.${pathname}`);

      if (!filePath.startsWith(resolvedRoot)) {
        return new Response('Forbidden', { status: 403 });
      }

      if (!existsSync(filePath)) {
        return new Response('Not found', { status: 404 });
      }

      const fileStats = await stat(filePath);

      if (!fileStats.isFile()) {
        return new Response('Not found', { status: 404 });
      }

      return new Response(Bun.file(filePath));
    }
  });

  return {
    baseUrl: `http://127.0.0.1:${server.port}`,
    stop: () => server.stop()
  };
}

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
  const mode = args.mode ?? 'current';
  const baseUrl = args['base-url'];
  const rootDir = args.root ?? '.';
  const pages = mode === 'app' ? appPages : currentPages;
  const server = baseUrl ? null : startStaticServer(rootDir);

  try {
    await captureScreenshots({
      baseUrl: baseUrl ?? server!.baseUrl,
      pages,
      outDir
    });
  } finally {
    server?.stop();
  }
}
