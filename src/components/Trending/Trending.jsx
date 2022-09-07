// import { Outlet } from 'react-router-dom';

import { useFilmSearch } from 'components/Common/fetchFilms';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { StyledMovieList, StyledMovieItem, StyledMovieLink } from '../Common/MovieList.styled';

const Trending = () => {
  const [filmList, getFilmList] = useFilmSearch();

  useEffect(() => {
    getFilmList('trending');
  }, [getFilmList]);

  console.log(filmList);

  return (
    <StyledMovieList>
      {filmList.results.map(film => (
        <StyledMovieItem key={film.id}>
          <StyledMovieLink to={`movies/${film.id}`} StyledLink state={{ from: '/' }}>
            {film.title}
          </StyledMovieLink>
        </StyledMovieItem>
      ))}
    </StyledMovieList>
  );
};

export default Trending;