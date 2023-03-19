import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../layout/SharedLayout';
// import Home from 'pages/home/Home';
// import MovieDetails from 'pages/movieDetails/MovieDetails';
// import Movies from 'pages/movies/Movies';
// import Cast from './Cast';
// import Reviews from './Reviews';

const Home = lazy(() => import('../../pages/home/Home'));
const MovieDetails = lazy(() =>
  import('../../pages/movieDetails/MovieDetails')
);
const Movies = lazy(() => import('../../pages/movies/Movies'));
const Cast = lazy(() => import('../cast/Cast'));
const Reviews = lazy(() => import('../reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
