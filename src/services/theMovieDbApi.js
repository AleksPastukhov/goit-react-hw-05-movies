import axios from 'axios';

export async function theMovieDbAPI(
  page = 1,
  type = 'trends',
  movieId = 758009,
  query = 'cat'
) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjMzkyOGJmMjMzNTdlOGE2NzA0NTk3M2M5NTE3OCIsInN1YiI6IjYzZDY0NDY4MjBlNmE1MDBkNTQzZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-Jn8MCWel133C-zeEATaTZg8SazetodXbbh1gi0C8';
  const typeRequest = {
    trends: 'trending/movie/week',
    search: 'search/movie',
    details: `movie/${movieId}`,
    credits: `movie/${movieId}/credits`,
    reviews: `movie/${movieId}/reviews`,
    video: `movie/${movieId}/videos`,
  };
  const options = {
    params: {
      page,
      query,
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const respons = await axios.get(`${BASE_URL}${typeRequest[type]}`, options);
  return respons.data;
}
