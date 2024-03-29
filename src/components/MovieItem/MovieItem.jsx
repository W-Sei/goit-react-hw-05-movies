import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Info, Image, Title, Vote } from './MovieItem.styled';
import noPoster from '../images/noMovie.png';

export function MoviesListItem({ id, title, poster, vote }) {
  const location = useLocation();

  return (
    <Item>
      <Link
        to={`/movies/${id}`}
        state={{ from: location.pathname + location.search }}
      >
        <Image
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
          alt={title}
        />

        <Info>
          <Title>{title ? title : 'No Title'}</Title>
          <Vote>Vote: {vote}</Vote>
        </Info>
      </Link>
    </Item>
  );
}
MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};
