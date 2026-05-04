import { describe, expect, it } from 'bun:test';
import {
  buildCards,
  communityLinks,
  featureCards,
  getStartedPlatforms,
  platforms
} from '../src/lib/components/home/content';

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
    expect(platforms.map((platform) => platform.src)).toEqual([
      '/files/platforms/ios.svg',
      '/files/platforms/watchos.svg',
      '/files/platforms/tvos.svg',
      '/files/platforms/web.svg',
      '/files/platforms/linux.svg',
      '/files/platforms/windows.svg',
      '/files/platforms/macos.svg',
      '/files/platforms/visionos.svg'
    ]);
    expect(featureCards).toHaveLength(6);
    expect(buildCards).toHaveLength(5);
    expect(communityLinks.map((link) => link.title)).toEqual(['GitHub', 'Reddit', 'Discord', 'Twitter']);
    expect(getStartedPlatforms.map((platform) => platform.name)).toEqual(['macOS', 'Docker', 'Windows']);
    expect(getStartedPlatforms[0].steps.map((step) => step.command)).toEqual([
      'curl -fsSL https://bun.sh/install | bash',
      'bunx v57/hub'
    ]);
    expect(getStartedPlatforms[1].description).toContain('Docker allows to run Hub server on a virtual machine.');
    expect(getStartedPlatforms[2].steps[0].terminal).toBe('Powershell');
  });
});
