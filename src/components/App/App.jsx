import GlobalStyle from '../GlobalStyle';
// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Wrapper } from './App.styled';
import { ShraedLayout } from '../ShraedLayot/ShraedLayot';
import { NotFound } from '../pages/NotFound/NotFound';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { Reviews } from '../../components/Reviews/Reviews';
import { Cast } from '../../components/Cast/Cast';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const Reviews = lazy(() => import('../../components/Reviews/Reviews'));
// const Cast = lazy(() => import('../../components/Cast/Cast'));

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<ShraedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Wrapper>
  );
};
