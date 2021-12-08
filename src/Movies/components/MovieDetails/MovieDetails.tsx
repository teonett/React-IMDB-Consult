import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../../components/Theme";
import { MovieDetail } from "../../../components/types/MovieDetail";
import * as C from "./styles";

const MovieDetails = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetail>();
  const getMovieRequest = async (idMovie: string) => {
    const url = `http://www.omdbapi.com/?i=${idMovie}&plot=full&apikey=263d22d8`;
    const response = await fetch(url);
    const responseJson = await response.json();

    setMovie(responseJson);
  };

  useEffect(() => {
    let idMovie = sessionStorage.getItem("idMovie") || "";
    getMovieRequest(idMovie);
  }, []);

  const handleClickBack = () => {
    navigate(`/`);
  };

  return (
    <Theme>
      <C.Container>
        <C.Title>{movie?.Title}</C.Title>
        <C.Table>
          <thead>
            <tr>
              <C.TableHeadColumn width={300}></C.TableHeadColumn>
              <C.TableHeadColumn width={600}></C.TableHeadColumn>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <C.StyledPhoto src={movie?.Poster} />
              </td>
              <td>
                <C.Button onClick={handleClickBack}>🏠</C.Button>
                <C.Description>{movie?.Plot}</C.Description>
                <C.Actions>
                  <C.Action>
                    Gênero
                    <br /> {movie?.Genre}
                  </C.Action>
                  <C.Action>
                    Lançamento / Duração
                    <br /> {movie?.Released} / {movie?.Runtime}
                  </C.Action>
                </C.Actions>
                <C.Actions>
                  <C.Action>
                    Origem :
                    <br /> {movie?.Country}
                  </C.Action>
                  <C.Action>
                    Idioma Original
                    <br /> {movie?.Language}
                  </C.Action>
                </C.Actions>
                <C.Actions>
                  <C.Action>
                    Diretor(es) / Excritor(es)
                    <br /> {movie?.Director} / {movie?.Writer}
                  </C.Action>
                  <C.Action>
                    Atores
                    <br /> {movie?.Actors}
                  </C.Action>
                </C.Actions>
                <C.Actions>
                  <C.Action>
                    Prêmios
                    <br /> {movie?.Awards}
                  </C.Action>
                  <C.Action>
                    Mídia Digital (DVD / Bluray)
                    <br /> {movie?.DVD}
                  </C.Action>
                </C.Actions>
                <C.Actions>
                  <C.Action>Bilheteria: {movie?.BoxOffice}</C.Action>
                  <C.Action>Avaliação: {movie?.imdbRating}</C.Action>
                </C.Actions>
              </td>
            </tr>
          </tbody>
        </C.Table>
      </C.Container>
    </Theme>
  );
};

export default MovieDetails;
