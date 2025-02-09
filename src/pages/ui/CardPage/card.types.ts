interface Origin {
    name: string;
    url: string;
}

interface Location {
    name: string;
    url: string;
}

export interface Result {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

interface Info {
    count: number;
    pages: number;
    next: string | null; // может быть null
    prev: string | null; // может быть null
}

export interface CardType {
    info: Info;
    results: Result[];
}
