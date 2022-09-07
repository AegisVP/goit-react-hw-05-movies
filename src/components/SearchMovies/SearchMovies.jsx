import { useFilmSearch } from 'components/Common/fetchFilms';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledMovieList, StyledMovieItem, StyledMovieLink } from '../Common/MovieList.styled';
import { StyledLabel, StyledInput, StyledButton } from './SearchMovies.styled';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filmList, newSearch] = useFilmSearch();
  const paramsQuery = searchParams.get('query');

  useEffect(() => {
    console.log('useEffect: paramsQuery:', paramsQuery);
    let newQuery = '';
    if (paramsQuery && paramsQuery.length > 0) newQuery = paramsQuery;

    setSearchQuery(newQuery);
    newSearch({ query: newQuery, page: 1 });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsQuery]);

  console.log('body: paramsQuery:', paramsQuery);

  const onSubmit = e => {
    e?.preventDefault();

    const params = { query: searchQuery, page: 1 };

    setSearchParams(params);
    newSearch(params);
  };

  return filmList?.results.length === 0 ? (
    <form action="#" method="get" onSubmit={onSubmit}>
      <StyledLabel>
        <StyledInput
          type="text"
          name="query"
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
          placeholder="What movie do you wish to find?"
        />
        <StyledButton type="submit">🔎</StyledButton>
      </StyledLabel>
    </form>
  ) : (
    <StyledMovieList>
      {filmList.results.map(film => {
        return (
          <StyledMovieItem key={film.id}>
            <StyledMovieLink to={`${film.id}`} state={{ from: `/movies?query=${searchQuery}` }}>
              {film?.original_title}
            </StyledMovieLink>
          </StyledMovieItem>
        );
      })}
    </StyledMovieList>
  );
};

export default SearchMovies;
