import { describe, expect, it } from 'bun:test';
import { getToolbarConfig } from '../src/lib/components/toolbar';

describe('toolbar config', () => {
  it('keeps the home toolbar actions in one place', () => {
    const toolbar = getToolbarConfig('home');

    expect(toolbar.pageName).toBeUndefined();
    expect(toolbar.actions.map((action) => action.label)).toEqual(['Pricing', 'Feedback', 'Download', 'Open']);
    expect(toolbar.actions.filter((action) => action.href).map((action) => action.href)).toEqual([
      '/pricing',
      '/feedback'
    ]);
  });

  it('shares the page title for the section pages', () => {
    expect(getToolbarConfig('feedback').pageName).toBe('Feedback');
    expect(getToolbarConfig('pricing').pageName).toBe('Pricing');
    expect(getToolbarConfig('privacy').pageName).toBe('Privacy Policy');
  });
});
