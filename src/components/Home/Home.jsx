import { useFilmSearch } from 'components/Common/fetchFilms';
import MovieList from 'components/MovieList/MovieList';
import { useEffect } from 'react';
// import { StyledMovieList, StyledMovieItem, StyledMovieLink } from '../MovieList/MovieList.styled';

const Trending = () => {
  const [filmList, getFilmList] = useFilmSearch();

  useEffect(() => {
    getFilmList('trending');
  }, [getFilmList]);

  return filmList?.total_results && <MovieList filmList={filmList} state={{ from: '/', addPath: 'movies/' }} />;
};

export default Trending;
