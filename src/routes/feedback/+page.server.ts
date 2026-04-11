import { readLegacyBody } from '$lib/legacy-pages.server';

export function load() {
  return {
    body: readLegacyBody('feedback.html')
  };
}
