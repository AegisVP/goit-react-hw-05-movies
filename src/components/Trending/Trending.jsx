import { useFilmSearch } from 'components/Common/fetchFilms';
import { useEffect } from 'react';
import { StyledMovieList, StyledMovieItem, StyledMovieLink } from '../Common/MovieList.styled';

const Trending = () => {
  const [filmList, getFilmList] = useFilmSearch();

  useEffect(() => {
    getFilmList('trending');
  }, [getFilmList]);

  return (
    <StyledMovieList>
      {filmList.results.map(film => (
        <StyledMovieItem key={film.id}>
          <StyledMovieLink to={`movies/${film.id}`} state={{ from: '/' }}>
            {film.title}
          </StyledMovieLink>
        </StyledMovieItem>
      ))}
    </StyledMovieList>
  );
};

export default Trending;