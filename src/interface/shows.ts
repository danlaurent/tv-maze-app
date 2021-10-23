export interface IRating {
  average: number;
}

export interface IShowImage {
  medium: string;
  original: string;
}

export interface IEpisode {
  id: string;
  name: string;
  season: number;
  number: number;
  image: IShowImage;
  summary: string;
  rating: IRating;
}

export interface ISchedule {
  time?: string;
  days?: string[];
}

export interface IShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  rating: IRating;
  image: IShowImage;
  summary: string;
  schedule: ISchedule;
  _embedded: {
    episodes: IEpisode[];
  };
}

export interface ISearchedShow {
  score: number;
  show: IShow;
}

export type TShowList = IShow[];

export type TSearchedShowList = ISearchedShow[];
