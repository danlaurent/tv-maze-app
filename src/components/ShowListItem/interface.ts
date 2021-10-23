import { ISearchedShow, IShow } from '../../interface/shows';

export interface IShowListItem {
  show: IShow;
  onPress?: (showId: number) => void;
}
