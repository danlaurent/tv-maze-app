import { TSearchedShowList } from '../interface/shows';

export const handleSearchResults = (results: TSearchedShowList) =>
  results.map((result) => result.show);
