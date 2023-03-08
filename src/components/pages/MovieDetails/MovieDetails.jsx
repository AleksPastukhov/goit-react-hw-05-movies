import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { Home } from '../Home/Home';
import { getMovieById } from '../../../services/theMovieDbApi';
import {
  NavItem,
  Wrapper,
  FilmInfo,
  GoBackBtn,
  NavList,
  InfoBox,
  FilmTitle,
  SubTitle,
  Description,
} from './MovieDetails.styled';

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
      <Wrapper>
        <GoBackBtn type="button" to="/">
          Go back
        </GoBackBtn>{' '}
        <FilmInfo>
          <img
            src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
            alt=""
            width="300px"
            height="440px"
          />
          <InfoBox>
            <div>
              <FilmTitle> {filmData.title}</FilmTitle>
              <Description>
                User Score:
                {filmData.vote_average
                  ? filmData.vote_average.toFixed(1) * 10 + '%'
                  : 'the movie is not popular'}
              </Description>
              <SubTitle>Overview</SubTitle>
              <Description>{filmData.overview}</Description>
              <SubTitle>Geners</SubTitle>
              <Description>
                {filmData.genres
                  ? filmData.genres.map(genre => genre.name + ' ')
                  : 'no genre'}
              </Description>
            </div>
          </InfoBox>
        </FilmInfo>
      </Wrapper>
      <Wrapper>
        <SubTitle>Additional information</SubTitle>
        <NavList>
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
        </NavList>
      </Wrapper>
    </>
  );
};
