import { Movie } from "./Movie";

export interface MovieSearch {
  Movie: Movie[];
  totalResults: string;
  Response: string;
}
