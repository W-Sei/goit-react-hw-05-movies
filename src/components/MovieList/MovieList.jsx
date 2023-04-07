import propTypes from 'prop-types';
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
  movies: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      original_title: propTypes.string.isRequired,
      poster_path: propTypes.string.isRequired,
      vote_average: propTypes.number.isRequired,
    })
  ),
};