export interface IInfo {
  count: number;
  pages: number;
}

export interface IOrigin {
  dimension: string;
  name: string;
  type: string;
}

export interface ILocation {
  name: string;
}

export interface ICharacter {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: Location;
  image: string;
}

