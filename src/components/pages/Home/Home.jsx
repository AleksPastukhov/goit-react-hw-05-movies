import { useEffect, useState } from 'react';
import { getTrendsMovie } from '../../../services/theMovieDbApi';
import { FilmList } from '../../FilmsList/FilmsList';
import { SectionTitle } from '../Home/Home.styled';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    getTrendsMovie()
      .then(setTrendingFilms)
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <SectionTitle>Trending today</SectionTitle>
      <FilmList films={trendingFilms} />
    </>
  );
};

export default Home;
