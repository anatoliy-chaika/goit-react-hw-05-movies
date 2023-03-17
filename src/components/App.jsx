import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles.stylad';
import Home from 'pages/home/Home';
import MovieDetails from 'pages/movieDetails/MovieDetails';
import Movies from 'pages/movies/Movies';
import NotFound from 'pages/notFound/NotFound';
import { Container, Header, Link } from './App.styled';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyles />
    </Container>
  );
};
