import { handleSearchResults } from '../search';

const resultsMock: any = [
  {
    score: 1,
    show: {
      id: 1,
      name: 'testShow',
    },
  },
];

describe('handleSearchResults', () => {
  it('returns a show array', () => {
    handleSearchResults(resultsMock);
  });
});
