import { Routes, Route, Navigate } from 'react-router-dom';
import { Trending } from './Trending/Trending';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { Cast } from './MovieInfo/Cast/Cast';
import { Reviews } from './MovieInfo/Reviews/Reviews';
import { Search } from './Search/Search';
// import { HeaderSection, StyledLink } from './Trending/Trending.styled';
import { CommonHeader } from './Common/CommonLayout';

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
      <CommonHeader />
      
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
