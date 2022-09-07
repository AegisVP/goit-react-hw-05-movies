import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

// const createAsyncComponent = path => {
//   // const componentName = path.match(/[a-zA-Z]+$/)[0];
//   // console.log('componentName:', componentName);
//   // return lazy(() => import(path).then(module => ({ ...module, default: module[componentName] })));

//   return lazy(() => import(path));
// };

const Trending = lazy(() => import('./Trending/Trending'));
const SearchMovies = lazy(() => import('./SearchMovies/SearchMovies'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));

document.title = "React hw05 - Movie search";

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
          <Route index element={<Trending />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
