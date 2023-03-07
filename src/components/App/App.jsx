import GlobalStyle from '../GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Movies } from '../Movies/Movies';
import { MovieDetails } from '../MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
