/**
 *  all interfaces
 */

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  id: number;
  airdate: string;
  airstamp: string;
  airtime: string;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  toggleFavAction: (
    state: IEpisode,
    dispatch: any,
    episode: IEpisode | any
  ) => IAction;
  favourites: Array<IEpisode>;
}
