import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { getMovieForName } from 'servises/getFilms';
import SearchBar from 'components/search/SearchBar';
import MovieGallery from 'components/gallery/MovieGallery';
import { ButtonMore } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query, page } = params;
  const number = Number(page);

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);

  //   return function () {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = e => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //     100
  //   ) {
  //     console.log('scroll');
  //     setSearchParams({ ...params, page: number + 1 });
  //   }
  // };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results, total_results } = await getMovieForName(query, number);
        setMovies(prev => [...prev, ...results]);
        setTotal(total_results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [number, query]);

  const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
      return;
    }
    const trueQuery = newQuery !== '' ? { query: newQuery, page: 1 } : {};
    setSearchParams(trueQuery);
    setMovies([]);
  };

  const handlePage = () => {
    setSearchParams({ ...params, page: number + 1 });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <>
          <ul>
            <MovieGallery array={movies} />
          </ul>
          {total !== movies.length && (
            <ButtonMore onClick={handlePage}> Load More</ButtonMore>
          )}
        </>
      )}
    </>
  );
};
export default Movies;
