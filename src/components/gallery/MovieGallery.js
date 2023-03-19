import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieGalleryStyled,
  MovieLi,
  MoviePoster,
  TitleMain,
} from './MovieGallery.styled';

const MovieGallery = ({ array }) => {
  const location = useLocation();
  return (
    <MovieGalleryStyled>
      {array.map(item => {
        return (
          <MovieLi key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              />
              <TitleMain>{item.original_title}</TitleMain>
            </Link>
          </MovieLi>
        );
      })}
    </MovieGalleryStyled>
  );
};

export default MovieGallery;
MovieGallery.propTypes = { array: PropTypes.array };
