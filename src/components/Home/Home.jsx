import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { theMovieDbAPI } from '../../services/theMovieDbApi';

// const TypeRequest = {
//   TRENDS: 'trends',
//   SEARCH: 'search',
//   DETAILS: `movieDetails`,
//   CREDITS: `movieCredits`,
//   REWIEWS: `movieReviews`,
//   VIDEOS: 'videos',
// };

export function Home() {
  //   const [page, setPage] = useState(1);
  //   const [type, setType] = useState(TypeRequest.TRENDS);
  //   const [movieId, setMovieId] = useState(null);
  //   const [query, setQuery] = useState('');
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    theMovieDbAPI()
      .then(data => setTrendingFilms(data.results))
      .catch(err => console.log(err));
  }, []);
  // const { film.id } = useParams()
  return (
    <ul>
      {trendingFilms.map(film => (
        <li key={film.id}>
          <NavLink to="/movies/:film.id">{film.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}
