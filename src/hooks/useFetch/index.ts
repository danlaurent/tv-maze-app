import { useState, useEffect, useCallback } from 'react';
import { fetchService } from '../../utils/fetch';
import { getUrlWithOptions } from '../../utils/url';

export const useFetch = <T>(url: string, options?: any) => {
  const [page, setPage] = useState<number>(0);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = useCallback(() => setShouldFetch(true), []);

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);

      const urlWithOptions = getUrlWithOptions(
        url,
        options?.paginate ? { page } : null
      );
      try {
        const newData: T = await fetchService<T>(urlWithOptions);

        setShouldFetch(false);

        if (options?.paginate) {
          setData((oldData: T | null): T => {
            if (oldData) {
              return <T>(
                (<unknown>[
                  ...(oldData as unknown as T[]),
                  ...(newData as unknown as T[]),
                ])
              );
            }
            return newData;
          });

          setPage(page + 1);
        } else {
          setData(newData);
        }
      } catch (error: unknown) {
        setError(error as Error);
      }

      setLoading(false);
    };

    fetchData();
  }, [page, shouldFetch]);

  return { data, loading, error, loadMore, page };
};
