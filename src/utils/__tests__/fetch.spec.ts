import { fetchService } from '../fetch';

const mockSuccessResponse = [
  {
    id: 1,
    name: 'testSuccess',
  },
];

const mockErrorResponse = new Error('test Error');

describe('fetchService', () => {
  describe('When has a success response', () => {
    beforeEach(() => {
      const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(mockSuccessResponse),
      });

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('returns the response', async () => {
      const response = await fetchService('https://api.tvmaze.com/shows');
      expect(response).toBe(mockSuccessResponse);
    });
  });

  describe('When occurs an error', () => {
    beforeEach(() => {
      const mockFetchPromise = Promise.reject(mockErrorResponse);

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    });

    it('throws an error', async () => {
      try {
        const response = await fetchService('https://api.tvmaze.com/shows');
      } catch (error) {
        expect(error).toBe(mockErrorResponse);
      }
    });
  });
});
