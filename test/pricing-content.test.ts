import { describe, expect, it } from 'bun:test';
import { litePlan, proPlan, supportButtons } from '../src/lib/components/pricing/content';

describe('pricing content', () => {
  it('keeps the plan data grouped by section', () => {
    expect(litePlan.name).toBe('Hub Lite');
    expect(litePlan.features).toHaveLength(2);
    expect(litePlan.ctaLabel).toBe('Install Lite');
    expect(litePlan.ctaHref).toBe('https://github.com/v57/hub-lite');
    expect(proPlan.name).toBe('Hub Pro');
    expect(proPlan.features).toHaveLength(6);
    expect(proPlan.ctaLabel).toBe('Install Pro');
    expect(proPlan.ctaHref).toBe('https://github.com/v57/hub-pro');
  });

  it('keeps the support options in one place', () => {
    expect(supportButtons.map((button) => button.label)).toEqual([
      'Discord',
      'Patreon',
      'Boosty',
      'GitHub',
      'Buy Me a Coffee',
      'Ko-Fi',
      'USDT',
      'BTC'
    ]);
    expect(supportButtons.map((button) => button.src)).toEqual([
      '/files/apps/discord.svg',
      '/files/apps/patreon.svg',
      '/files/apps/boosty.svg',
      '/files/apps/github.svg',
      '/files/apps/buymeacoffee.svg',
      '/files/apps/kofi.svg',
      '/files/apps/usdt.svg',
      '/files/apps/btc.svg'
    ]);
    expect(supportButtons).toHaveLength(8);
    expect(supportButtons.every((button) => button.href.startsWith('https://'))).toBe(true);
  });
});
