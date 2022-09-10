import { fetchTrendingFilms } from 'utils/fetchFilms';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

const Trending = () => {
  const [filmList, setFilmList] = useState([]);

  document.title = 'React HW05 - Trending movies';

  useEffect(() => {
    fetchTrendingFilms().then(setFilmList);
  }, []);

  return filmList?.total_results && <MovieList filmList={filmList} state={{ from: '/', addPath: 'movies/' }} />;
};

export default Trending;
