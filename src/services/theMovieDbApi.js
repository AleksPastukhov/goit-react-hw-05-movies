import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjMzkyOGJmMjMzNTdlOGE2NzA0NTk3M2M5NTE3OCIsInN1YiI6IjYzZDY0NDY4MjBlNmE1MDBkNTQzZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-Jn8MCWel133C-zeEATaTZg8SazetodXbbh1gi0C8';
const typeRequest = {
  trends: 'trending/movie/week',
  search: 'search/movie',
};

export async function getTrendsMovie() {
  const options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const respons = await axios.get(`${BASE_URL}${typeRequest.trends}`, options);
  return respons.data.results;
}

export async function searchMovie(query) {
  const options = {
    params: {
      query,
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const respons = await axios.get(`${BASE_URL}${typeRequest.search}`, options);
  return respons.data.results;
}

export async function getMovieById(movieId, type = 'details') {
  const typeRequestById = {
    details: `movie/${movieId}`,
    credits: `movie/${movieId}/credits`,
    reviews: `movie/${movieId}/reviews`,
    video: `movie/${movieId}/videos`,
  };

  const options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const respons = await axios.get(
    `${BASE_URL}${typeRequestById[type]}`,
    options
  );
  return respons.data;
}
