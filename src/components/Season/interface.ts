import { IEpisode } from '../../interface/shows';

export interface ISeason {
  season: {
    season: number;
    episodes: IEpisode[];
  };
  onEpisodePress?: (episode: IEpisode) => void;
  testID?: string;
}
