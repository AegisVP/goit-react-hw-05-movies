import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Trending = lazy(() => import('./Trending/Trending'));
const SearchMovies = lazy(() => import('./SearchMovies/SearchMovies'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

document.title = 'React hw05 - Movie search';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Trending />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <SearchMovies />
              </Suspense>
            }
          />
          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <MovieInfo />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
