import MovieGallery from 'components/gallery/MovieGallery';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovies } from 'servises/getFilms';
import { TitlerOfHome } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <TitlerOfHome>Trending list of movies for a day</TitlerOfHome>
      <ul>
        <MovieGallery array={movies} />
      </ul>
    </>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.array,
};
