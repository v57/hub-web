import { execFileSync } from 'node:child_process';
import { extractBody } from './raw-html';

function linkifyButton(body: string, className: string, label: string, href: string, labelClass: string) {
  const pattern = new RegExp(
    `<div class="${className}">\\s*<div class="${labelClass}">${label}<\\/div>\\s*<\\/div>`
  );

  return body.replace(pattern, `<a class="${className}" href="${href}"><div class="${labelClass}">${label}</div></a>`);
}

export function readLegacyBody(filePath: string) {
  const html = execFileSync('git', ['show', `HEAD^:${filePath}`], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });

  let body = extractBody(html).replaceAll('./files/', '/files/');

  if (filePath === 'index.html') {
    body = linkifyButton(body, 'button11', 'Pricing', '/pricing', 'platform-name');
    body = linkifyButton(body, 'button11', 'Feedback', '/feedback', 'platform-name');
  }

  if (filePath === 'pricing.html') {
    body = linkifyButton(body, 'button', 'Feedback', '/feedback', 'button-label');
  }

  if (filePath === 'feedback.html') {
    body = linkifyButton(body, 'button43', 'Pricing', '/pricing', 'button-label');
  }

  return body;
}
