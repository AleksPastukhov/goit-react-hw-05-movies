import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

export function MovieDetails() {
  return (
    <>
      <Routes>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}