import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'servises/getFilms';
import { Sorry } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [array, setArray] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await getReviews(movieId);
        setArray(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {array.length > 0 ? (
        array.map(({ id, author, content }) => (
          <li key={id}>
            <b>{author}</b>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <Sorry>Sorry, we have not any reviews for this movie</Sorry>
      )}
    </ul>
  );
};

export default Reviews;
