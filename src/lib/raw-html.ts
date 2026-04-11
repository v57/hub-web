export function extractBody(html: string) {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);

  if (!match) {
    throw new Error('Expected an HTML document with a body tag.');
  }

  return match[1].replaceAll('./files/', '/files/');
}
