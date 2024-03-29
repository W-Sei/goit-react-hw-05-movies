import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'components/services/api';
import {
  Form,
  Button,
  SearchSvg,
  Input,
} from 'components/Searchbar/Searchbar.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesList } from 'components/MovieList/MovieList';
import { mapper } from 'components/services/mapper';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);

  const onChangeQuery = e => {
    setSearchQuery(e.target.value);
  };
  const resetForm = () => {
    setSearchQuery('');
  };
  const onFormSubmit = e => {
    e.preventDefault();

    const newQuery = e.target.elements.query.value.toLowerCase();
    if (newQuery.trim() === '') {
      toast.error("Please, enter correct movie's name");
      return;
    }
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      fetchMoviesBySearch(newQuery).then(r => {
        const mappedMovies = mapper(r.results);
        setMovies(mappedMovies);
        resetForm();
      });
    }
  }, [searchParams]);

  return (
    <>
      <ToastContainer />
      <Form onSubmit={onFormSubmit}>
        <Button type="submit">
          <span>
            <SearchSvg />
          </span>
        </Button>
        <Input
          type="text"
          name="query"
          value={searchQuery}
          onChange={onChangeQuery}
        ></Input>
      </Form>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}