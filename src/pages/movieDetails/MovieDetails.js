import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getIdInfo } from 'servises/getFilms';

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        await getIdInfo(movieId);
      } catch {}
    };
    fetchInfo();
  }, [movieId]);

  return (
    <>
      <div>Now showing product with id - {movieId}</div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
