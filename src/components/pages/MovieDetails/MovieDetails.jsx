import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { Home } from '../Home/Home';
import { getMovieById } from '../../../services/theMovieDbApi';
import { NavItem } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmData, setFilmData] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location);

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setFilmData(data))
      .catch(err => console.log(err));
  }, [movieId]);
  console.log(filmData);
  return (
    <>
      <button type="button">Go back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
        alt=""
      />
      <h1> {filmData.title}</h1>
      <p>
        User Score:
        {filmData.vote_average
          ? filmData.vote_average.toFixed(1) * 10 + '%'
          : 'the movie is not popular'}
      </p>
      <h2>Overview</h2>
      <p>{filmData.overview}</p>
      <h3>Geners</h3>
      <p>
        {filmData.genres
          ? filmData.genres.map(genre => genre.name + ' ')
          : 'no genre'}
      </p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavItem to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavItem>
        </li>
        <li>
          <NavItem to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavItem>
        </li>
      </ul>
    </>
  );
};
