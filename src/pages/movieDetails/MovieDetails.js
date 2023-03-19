import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { getIdInfo } from 'servises/getFilms';
import {
  Addition,
  BackButton,
  Buttons,
  Card,
  Info,
  ListLink,
  Overview,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();

  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [release, setRelise] = useState('');
  const [genres, setGenres] = useState('');
  const [overview, setOverview] = useState('');

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const film = await getIdInfo(movieId);

        const { poster_path, original_title, release_date, genres, overview } =
          film;
        setImg(poster_path);
        setTitle(original_title);
        setRelise(release_date);
        setGenres(genres.map(({ name }) => name).join(', '));
        setOverview(overview);
      } catch {}
    };
    fetchInfo();
  }, [movieId]);

  return (
    <>
      <BackButton to={backLinkLocationRef.current}>Back to list</BackButton>
      <Card>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w400${img}`}
            alt="Img of movie"
          />
        </div>
        <div>
          <Title>{title}</Title>
          <Info>Date of release: {release}</Info>
          <Info>Genre: {genres}</Info>
          <Overview>{overview}</Overview>
        </div>
      </Card>
      <Addition>Addition information</Addition>
      <ListLink>
        <li>
          <Buttons to="cast" id={movieId}>
            Cast
          </Buttons>
        </li>
        <li>
          <Buttons to="reviews">Review</Buttons>
        </li>
      </ListLink>
      <Suspense fallback={<div>Wait a second</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
