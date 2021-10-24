import { getUrlWithOptions } from '../url';

const urlMock = 'https://api.tvmaze.com/shows';
const optionsMock = { page: 23 };

describe('getUrlWithOptions', () => {
  it('returns the url with options as url parameters', () => {
    const url = getUrlWithOptions(urlMock, optionsMock);
    expect(url).toBe(`${urlMock}?page=23`);
  });

  describe('If no options were provided', () => {
    it('returns the original url', () => {
      const url = getUrlWithOptions(urlMock);
      expect(url).toBe(urlMock);
    });
  });
});
