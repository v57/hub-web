import { describe, expect, it } from 'bun:test';
import { buildCards, communityLinks, featureCards, platforms } from '../src/lib/components/home/content';

describe('home content', () => {
  it('keeps the homepage data grouped by section', () => {
    expect(platforms.map((platform) => platform.name)).toEqual([
      'macOS',
      'iOS',
      'tvOS',
      'visionOS',
      'watchOS',
      'Windows',
      'Linux',
      'Web'
    ]);
    expect(featureCards).toHaveLength(6);
    expect(buildCards).toHaveLength(5);
    expect(communityLinks.map((link) => link.title)).toEqual(['GitHub', 'Reddit', 'Discord', 'Twitter']);
  });
});
