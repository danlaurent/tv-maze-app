import { TShowList } from '../../interface/shows';

export interface IShowList {
  shows: TShowList | null;
  onMoviePress?: (showId: number) => void;
  onEndReached?: () => void;
  testID?: string;
}
