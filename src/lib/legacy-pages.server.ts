import { execFileSync } from 'node:child_process';
import { extractBody } from './raw-html';

export function readLegacyBody(filePath: string) {
  const html = execFileSync('git', ['show', `HEAD:${filePath}`], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });

  return extractBody(html).replaceAll('./files/', '/files/');
}
