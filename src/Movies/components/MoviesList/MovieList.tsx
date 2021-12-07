import React from "react";
import Header from "../../../components/Header";
import * as C from "./styles";
import { Movie } from "../../../components/types/Movie";
import MovieListItem from "../MovieListItem";

const MoviesList = (props: { movies: Movie[] }) => {
  return (
    <C.Container>
      <C.Area>
        <C.MoviesList>
          {props.movies.map((movie, index) => (
            <MovieListItem movie={movie} />
          ))}
        </C.MoviesList>
      </C.Area>
    </C.Container>
  );
};

export default MoviesList;
