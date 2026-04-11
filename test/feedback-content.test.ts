import { describe, expect, it } from 'bun:test';
import {
  cardCount,
  composerPrompt,
  feedbackCards,
  filterChips,
  topTags
} from '../src/lib/components/feedback/content';

describe('feedback content', () => {
  it('keeps the composer, filters, and cards grouped together', () => {
    expect(composerPrompt).toBe('Describe your issue or suggestion');
    expect(topTags).toHaveLength(9);
    expect(filterChips.map((chip) => chip.label)).toEqual([
      'All',
      'New features',
      'Improvements',
      'Questions',
      'Bugs'
    ]);
    expect(cardCount).toBe('38832 CARDS');
    expect(feedbackCards).toHaveLength(8);
    expect(feedbackCards[0].title).toBe('About this platform');
    expect(feedbackCards.at(-1)?.statusLabel).toBe('Implementing');
  });
});
