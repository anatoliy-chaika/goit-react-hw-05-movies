import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieGallery = ({ array }) => {
  return array.map(item => {
    return (
      <Link key={item.id} to={`movies${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />
        <p>{item.original_title}</p>
      </Link>
    );
  });
};

export default MovieGallery;
MovieGallery.propTypes = { array: PropTypes.array };
