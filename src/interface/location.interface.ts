
export interface Info {
    count: number;
    pages: number;
}

export interface IResident {
    name: string;
    image: string;
}

export interface IResult {
    name: string;
    dimension: string;
    type: string;
    residents: IResident[];
}

export interface ILocations {
    info: Info;
    results: IResult[];
}
