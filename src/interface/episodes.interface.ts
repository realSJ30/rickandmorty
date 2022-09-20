export interface IInfo {
  count: number;
  pages: number;
  next: number;
}

export interface ICharacter {
  name: string;
  image: string;
}

export interface IResult {
  name: string;
  air_date: string;
  episode: string;
  characters: ICharacter[];
}

export interface IEpisodes {
  info: IInfo;
  results: IResult[];
}
