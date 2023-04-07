import { MoviesList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/services/api';
import { mapper } from 'components/services/mapper';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(movies => {
      const mappedMovies = mapper(movies.results);
      setMovies(mappedMovies);
    });
  }, []);
  return movies && <MoviesList movies={movies} />;
}