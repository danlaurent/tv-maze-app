import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '..';

const mockSuccessResponse = [
  {
    id: 1,
    name: 'testSuccess',
  },
];

const mockSuccessResponsePaginated = [
  {
    id: 2,
    name: 'testSuccessPage2',
  },
];

const mockErrorResponse = new Error('test Error');

describe('useFetch', () => {
  describe('When has a success response', () => {
    it('start loading and then returns the data', async () => {
      const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(mockSuccessResponse),
      });

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch('https://api.tvmaze.com/shows')
      );
      expect(result.current.loading).toBeTruthy();
      await waitForNextUpdate();
      expect(result.current.data).toBe(mockSuccessResponse);
    });

    describe('and has pagination', () => {
      it('returns the data and increments the page', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch('https://api.tvmaze.com/shows', { paginate: true })
        );
        expect(result.current.loading).toBeTruthy();
        await waitForNextUpdate();
        expect(result.current.data).toBe(mockSuccessResponse);
        expect(result.current.page).toBe(1);
      });

      describe('When loadMore is called', () => {
        it('returns the new page data with the previous one', async () => {
          const { result, waitForNextUpdate } = renderHook(() =>
            useFetch('https://api.tvmaze.com/shows', { paginate: true })
          );
          const mockFetchPromise = Promise.resolve({
            json: () => Promise.resolve(mockSuccessResponsePaginated),
          });
          await waitForNextUpdate();

          global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
          act(() => {
            result.current.loadMore();
          });

          await waitForNextUpdate();

          expect(result.current.data).toEqual([
            ...mockSuccessResponse,
            ...mockSuccessResponsePaginated,
          ]);
          expect(result.current.page).toBe(2);
        });
      });
    });
  });

  describe('When occurs an error', () => {
    it('returns the error', async () => {
      const mockFetchPromise = Promise.resolve({
        json: () => Promise.reject(mockErrorResponse),
      });

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch('https://api.tvmaze.com/shows')
      );

      await waitForNextUpdate();

      expect(result.current.error).toBe(mockErrorResponse);
    });
  });
});
