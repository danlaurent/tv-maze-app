import { humanizeMetaInfo, cleanSummary } from '../transform';

const metaInfoMock = ['Test', 'for', 'humanizeFunction'];
const summaryWithTagsMock = '<p><b>Under the Dome</b> is a story.</p>';

describe('Transform utils', () => {
  describe('humanizeMetaInfo', () => {
    it('returns a string from metaInfo array', () => {
      const metaInfo = humanizeMetaInfo(metaInfoMock);
      expect(metaInfo).toBe('Test | for | humanizeFunction');
    });
  });

  describe('cleanSummary', () => {
    it('remove the html tags from summary', () => {
      const summary = cleanSummary(summaryWithTagsMock);
      expect(summary).toBe('Under the Dome is a story.');
    });
  });
});
