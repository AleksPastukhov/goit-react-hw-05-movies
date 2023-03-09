import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBox } from '../../SearchBox/SearchBox';
import { searchMovie } from '../../../services/theMovieDbApi';
import { HomeList, Link, FilmCard, FilmTitle, Card } from '../Home/Home.styled';
import img from '../../../images/depositphotos_12766135-stock-photo-3d-cinema-clapper-film-reel.jpg';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const searchQuery = searchParams.get('q') ?? '';

  useEffect(() => {
    searchMovie(searchQuery)
      .then(data => setFoundMovies(data.results))
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
      <HomeList>
        {foundMovies.map(film => (
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

export default Movies;
