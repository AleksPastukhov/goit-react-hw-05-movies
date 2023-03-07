import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { Home } from '../Home/Home';
// import { Cast } from '../../Cast/Cast';
// import { Reviews } from '../../Reviews/Reviews';
import { getMovieById } from '../../../services/theMovieDbApi';

export function MovieDetails() {
  const { movieId } = useParams();
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setFilmData(data))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <div>{movieId}</div>
      <p> {filmData.title}</p>
      {/* <Routes>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes> */}
    </>
  );
}
