import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "../../Movies/components/Movie";
import MovieDetails from "../../Movies/components/MovieDetails";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
