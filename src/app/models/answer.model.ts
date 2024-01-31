export interface Answer {
  Search: [Data];
}

export interface Data {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export type Answers = Array<Data>;
