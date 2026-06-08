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
    expect(featureCards.map((card) => card.title)).toEqual([
      'Device Mesh',
      'Local Compute',
      'Service APIs',
      'Shared Storage',
      'Auto Launcher',
      'Load Balance',
      'Access Control',
      'Open Source'
    ]);
    expect(featureCards.map((card) => card.icon)).toEqual([
      'link',
      'cpu',
      'server.rack',
      'externaldrive.connected.to.line.below',
      'play.circle',
      'scale.3d',
      'lock.shield',
      'heart.circle'
    ]);
    expect(buildCards.map((card) => card.title)).toEqual([
      'Connect Devices',
      'Run Services',
      'Balance Load',
      'Stay Online',
      'Share Storage',
      'Control Access'
    ]);
    expect(buildCards.map((card) => card.icon)).toEqual([
      'network',
      'server.rack',
      'arrow.trianglehead.branch',
      'play.circle',
      'externaldrive.connected.to.line.below',
      'lock.shield'
    ]);
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
