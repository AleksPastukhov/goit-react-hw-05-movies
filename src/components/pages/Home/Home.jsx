import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendsMovie } from '../../../services/theMovieDbApi';
import {
  HomeList,
  Link,
  FilmCard,
  FilmTitle,
  SectionTitle,
  Card,
} from '../Home/Home.styled';
import img from '../../../images/depositphotos_12766135-stock-photo-3d-cinema-clapper-film-reel.jpg';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();
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
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <FilmCard>
                {film.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.title || film.name}
                    width="250px"
                    height="375px"
                  />
                ) : (
                  <img
                    src={img}
                    alt={film.title || film.name}
                    width="250px"
                    height="375px"
                  />
                )}
                <FilmTitle>{film.title || film.name}</FilmTitle>
              </FilmCard>
            </Link>
          </Card>
        ))}
      </HomeList>
    </>
  );
};

export default Home;
