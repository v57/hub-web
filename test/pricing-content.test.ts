import { describe, expect, it } from 'bun:test';
import { litePlan, proPlan, supportButtons } from '../src/lib/components/pricing/content';

describe('pricing content', () => {
  it('keeps the plan data grouped by section', () => {
    expect(litePlan.name).toBe('Hub Lite');
    expect(litePlan.features).toHaveLength(2);
    expect(proPlan.name).toBe('Hub Pro');
    expect(proPlan.features).toHaveLength(6);
  });

  it('keeps the support options in one place', () => {
    expect(supportButtons.map((button) => button.label)).toEqual([
      'Bybit',
      'GitHub',
      'Discord',
      'Buy Me a Coffee'
    ]);
    expect(supportButtons.map((button) => button.src)).toEqual([
      '/files/apps/bybit.svg',
      '/files/apps/github.svg',
      '/files/apps/discord.svg',
      '/files/apps/buymeacoffee.svg'
    ]);
    expect(supportButtons.every((button) => button.href === 'https://github.com/v57')).toBe(true);
  });
});
