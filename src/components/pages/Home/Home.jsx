import { useEffect, useState } from 'react';
import { getTrendsMovie } from '../../../services/theMovieDbApi';
import {
  HomeList,
  Link,
  FilmCard,
  FilmTitle,
  SectionTitle,
  Card,
} from '../Home/Home.styled';

// const TypeRequest = {
//   TRENDS: 'trends',
//   SEARCH: 'search',
//   DETAILS: `movieDetails`,
//   CREDITS: `movieCredits`,
//   REWIEWS: `movieReviews`,
//   VIDEOS: 'videos',
// };

export const Home = () => {
  // const [page, setPage] = useState(1);
  // const [type, setType] = useState(TypeRequest.TRENDS);
  // const [movieId, setMovieId] = useState(null);
  // const [query, setQuery] = useState('');
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    getTrendsMovie()
      .then(data => setTrendingFilms(data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <SectionTitle>Trending today</SectionTitle>
      <HomeList>
        {trendingFilms.map(film => (
          <Card key={film.id}>
            <Link to={`/movies/${film.id}`}>
              <FilmCard>
                <img
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt=""
                />
                <FilmTitle>{film.title}</FilmTitle>
              </FilmCard>
            </Link>
          </Card>
        ))}
      </HomeList>
    </>
  );
};
