import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { getMovieForName } from 'servises/getFilms';
import SearchBar from 'components/search/SearchBar';
import MovieGallery from 'components/gallery/MovieGallery';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query } = params;

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results } = await getMovieForName(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
      return;
    }
    const trueQuery = newQuery !== '' ? { query: newQuery } : {};
    setSearchParams(trueQuery);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <ul>
          <MovieGallery array={movies} />
        </ul>
      )}
    </>
  );
};
export default Movies;
