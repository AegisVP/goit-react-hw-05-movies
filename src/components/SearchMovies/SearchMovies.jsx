import { useFilmSearch } from 'components/Common/fetchFilms';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledMovieList, StyledMovieItem, StyledMovieLink } from '../Common/MovieList.styled';
import { StyledLabel, StyledInput, StyledButton } from './SearchMovies.styled';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState('');
  const [filmList, newSearch] = useFilmSearch();
  const paramsQuery = searchParams.get('query');
  const paramsPage = searchParams.get('page');

  useEffect(() => {
    const newQueryValue = paramsQuery || '';
    const newPageValue = !paramsPage || paramsPage === '' ? 1 : paramsPage;

    if (newQueryValue !== '') setSearchParams({ query: newQueryValue, page: newPageValue });

    setSearchQuery(newQueryValue);
    setSearchPage(newPageValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsQuery, paramsPage]);

  // useEffect(() => {}, []);

  useEffect(() => {
    newSearch({ query: searchQuery, page: searchPage });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, searchPage]);

  const onSubmit = e => {
    e?.preventDefault();

    if (e.currentTarget.query.value !== '') setSearchParams({ query: e.currentTarget.query.value, page: 1 });
  };

  return !filmList.results || filmList.results?.length === 0 ? (
    <div>
      <form action="#" method="get" onSubmit={onSubmit}>
        <StyledLabel>
          <StyledInput type="text" name="query" autoFocus placeholder="What movie do you wish to find?" />
          <StyledButton type="submit">🔎</StyledButton>
        </StyledLabel>
      </form>
      {filmList.results?.length === 0 && <p>no films found</p>}
    </div>
  ) : (
    <Suspense fallback={<p>Loading...</p>}>
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
    </Suspense>
  );
};

export default SearchMovies;
