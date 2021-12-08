import * as C from "./styles";
import { Movie } from "../../../components/types/Movie";
import Card from "../../../components/DisplayCard";

const MovieCard = (props: { movies: Movie[] }) => {
  return (
    <C.Container>
      <C.Area>
        <C.MoviesList>
          {props.movies.map((movie, index) => (
            <Card
              title={movie.Title}
              date={movie.Year.toString()}
              imgUrl={movie.Poster}
              idDetail={movie.imdbID}
            />
          ))}
        </C.MoviesList>
      </C.Area>
    </C.Container>
  );
};

export default MovieCard;
