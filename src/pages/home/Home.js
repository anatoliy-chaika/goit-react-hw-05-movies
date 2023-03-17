import MovieGallery from 'components/MovieGallery';
import { useState, useEffect } from 'react';
import { getMovies } from 'servises/getFilms';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getMovies();
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <ul>
      <MovieGallery array={movies} />
    </ul>
  );
};

export default Home;
