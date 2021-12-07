import React from "react";
import { Movie } from "../../../components/types/Movie";
import * as C from "./styles";

type MovieListItemProps = {
  movie: Movie;
};

const MovieListItem = ({ movie }: MovieListItemProps) => {
  return (
    <C.Container>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Year}</p>
      <p>{movie.Title}</p>
    </C.Container>
  );
};

export default MovieListItem;
