import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/theMovieDbApi';
import { CastList, CastCard } from './Cast.styled';
import noFoto from '../../images/no-foto.png';

export function Cast() {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId, 'credits')
      .then(data => {
        setCastData(data.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(castData);

  return (
    <CastList>
      {castData.map(actor => (
        <CastCard key={actor.cast_id}>
          <p>Character: {actor.character}</p>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.original_name}
              width="150px"
              height="225px"
            />
          ) : (
            <img
              src={noFoto}
              alt={actor.original_name}
              width="150px"
              height="225px"
            />
          )}
          <h2>{actor.name}</h2>
        </CastCard>
      ))}
    </CastList>
  );
}
