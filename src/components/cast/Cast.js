import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'servises/getFilms';
import { Actor, ListCasts, ActorImg, ActorItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const { cast } = await getActors(movieId);
        setActors(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActors();
  }, [movieId]);

  return (
    <ListCasts>
      {actors.length > 0 ? (
        actors.map(({ credit_id, name, character, profile_path }) => (
          <ActorItem key={credit_id}>
            <ActorImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : `https://slemz.com.ua/image/cache/webp/Flanec-ru10.-1200x800.webp`
              }
              alt={name}
            />
            <Actor>{name}</Actor>
          </ActorItem>
        ))
      ) : (
        <p>Sorry, we have not any infomation</p>
      )}
    </ListCasts>
  );
};
export default Cast;
