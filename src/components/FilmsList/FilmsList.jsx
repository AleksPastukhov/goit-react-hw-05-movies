import { useLocation } from 'react-router-dom';
import { HomeList, Link, FilmCard, FilmTitle, Card } from './FilmsList.styled';
import img from '../../images/depositphotos_12766135-stock-photo-3d-cinema-clapper-film-reel.jpg';

export const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <HomeList>
      {films.map(({ id, poster_path, name, title }) => (
        <Card key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <FilmCard>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : img
                }
                alt={`Poster ${title || name}`}
                width="250px"
                height="375px"
              />
              <FilmTitle>{title || name}</FilmTitle>
            </FilmCard>
          </Link>
        </Card>
      ))}
    </HomeList>
  );
};
