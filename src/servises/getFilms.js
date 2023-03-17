import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7365af2a22cee957c4f845cc26521213';

export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );

  return response.data;
};

export const getIdInfo = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};
