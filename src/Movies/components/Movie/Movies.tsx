import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import SearchBox from "../../../components/SearchBox";
import MovieCard from "../MovieCard";
import * as C from "./styles";

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue: string) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    setLoading(true);
    getMovieRequest(searchValue);
    setLoading(false);
  }, [searchValue]);

  return (
    <C.Container>
      <Header />
      <SearchBox setSearchValue={setSearchValue} />
      {loading && (
        <C.ScreenWarning>
          <span role="img" aria-label="carregando">
            🖐
          </span>
          <div>Carregando...</div>
        </C.ScreenWarning>
      )}
      <MovieCard movies={movies} />
    </C.Container>
  );
};

export default Movies;
