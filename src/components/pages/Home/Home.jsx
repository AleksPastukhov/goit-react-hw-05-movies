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
import img from '../../../images/depositphotos_12766135-stock-photo-3d-cinema-clapper-film-reel.jpg';

const Home = () => {
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
                {film.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt=""
                    width="250px"
                    height="375px"
                  />
                ) : (
                  <img src={img} alt="" width="250px" height="375px" />
                )}
                <FilmTitle>{film.title}</FilmTitle>
              </FilmCard>
            </Link>
          </Card>
        ))}
      </HomeList>
    </>
  );
};

export default Home;
