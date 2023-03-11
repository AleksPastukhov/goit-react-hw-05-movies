import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBox } from '../../SearchBox/SearchBox';
import { searchMovie } from '../../../services/theMovieDbApi';
import { FilmList } from '../../FilmsList/FilmsList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const searchQuery = searchParams.get('q') ?? '';

  useEffect(() => {
    searchMovie(searchQuery)
      .then(setFoundMovies)
      .catch(err => console.log(err));
  }, [searchQuery]);

  const onFormSabmit = e => {
    e.preventDefault();
    const q = e.target.name.value;
    const nextParams = q !== '' ? { q } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBox onFormSabmit={onFormSabmit} />
      <FilmList films={foundMovies} />
    </>
  );
};

export default Movies;
