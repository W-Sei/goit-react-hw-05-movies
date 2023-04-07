import PropTypes from 'prop-types';
import { List } from './MovieList.styled';
import { MoviesListItem } from 'components/MovieItem/MovieItem';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, original_title, poster_path, vote_average }) => {
        return (
          <MoviesListItem
            key={id}
            id={id}
            title={original_title}
            poster={poster_path}
            vote={vote_average}
          />
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};