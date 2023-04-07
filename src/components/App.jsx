import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';
import { NoData } from './pages/NoData';
import { Loader } from './Loader/Loader';
import { GlobalStyles } from 'GlobalStyles.styled';

const HomePage = lazy(() => import('./pages/Home'));
const MoviesPage = lazy(() => import('./pages/Movies'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetails'));
const CastPage = lazy(() => import('./pages/Cast'));
const ReviewsPage = lazy(() => import('./pages/Reviews'));

export function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<NoData />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
