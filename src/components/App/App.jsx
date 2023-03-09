import GlobalStyle from '../GlobalStyle';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Wrapper } from './App.styled';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { NotFound } from '../pages/NotFound/NotFound';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
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
