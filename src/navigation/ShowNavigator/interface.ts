import { IEpisode } from '../../interface/shows';

export type TShowStackParamList = {
  HomeScreen: {};
  ShowDetailsScreen: { showId: number };
  EpisodeDetailsScreen: { episode: IEpisode };
};
