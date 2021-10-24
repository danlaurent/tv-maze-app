import {
  humanizeMetaInfo,
  cleanSummary,
  handleSchedule,
  handleShowSeasons,
} from '../transform';

const metaInfoMock = ['Test', 'for', 'humanizeFunction'];
const summaryWithTagsMock = '<p><b>Under the Dome</b> is a story.</p>';
const scheduleMock = {
  time: '22:00',
  days: ['Monday', 'Sunday'],
};
const showSeasonsMock = [
  {
    id: '1',
    name: 'Test',
    season: 1,
    number: 1,
    image: {
      medium: '',
      original: '',
    },
    summary: 'Test',
    rating: {
      average: 10,
    },
  },
];

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

  describe('handleShowSeasons', () => {
    it('order episodes into seasons', () => {
      const season = handleShowSeasons(showSeasonsMock);
      expect(season).toEqual([
        { season: 1, episodes: [{ ...showSeasonsMock[0] }] },
      ]);
    });
  });

  describe('handleSchedule', () => {
    it('make schedule readable', () => {
      const schedule = handleSchedule(scheduleMock);
      expect(schedule).toBe('22:00 on Monday | Sunday');
    });

    describe('When no schedule is provided', () => {
      it('returns undefined', () => {
        const schedule = handleSchedule({});
        expect(schedule).toBe(undefined);
      });
    });
  });
});
