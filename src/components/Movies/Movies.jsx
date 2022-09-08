import { useFilmSearch } from 'components/Common/fetchFilms';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const SearchForm = lazy(() => import('components/SearchForm/SearchForm'));
const MovieList = lazy(() => import('components/MovieList/MovieList'));

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState('');
  const [filmList, newSearch] = useFilmSearch();
  const paramsQuery = searchParams.get('query');
  const paramsPage = searchParams.get('page');

  const isPositiveNumber = n => !(isNaN(parseInt(n)) || !n || n === '' || n <= 0);

  useEffect(() => {
    const newQueryValue = paramsQuery ?? '';
    const newPageValue = isPositiveNumber(paramsPage) ? paramsPage : 1;

    if (newQueryValue !== '') setSearchParams({ query: newQueryValue, page: newPageValue });

    setSearchQuery(newQueryValue);
    setSearchPage(newPageValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsQuery, paramsPage]);

  useEffect(() => {
    newSearch({ query: searchQuery, page: searchPage });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, searchPage]);

  const onSubmit = e => {
    e?.preventDefault();

    if (e.currentTarget.query.value !== '') setSearchParams({ query: e.currentTarget.query.value, page: 1 });
  };

  if (!filmList.total_results) {
    document.title = 'React HW05 - Movie search';
    
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <SearchForm onSubmitHandler={onSubmit} />
        {filmList?.total_results === 0 && <p>Nothing found</p>}
      </Suspense>
    );
  } else {
    document.title = `React HW05 - Movie search - ${searchQuery}`;

    return (
      <Suspense fallback={<p>Loading...</p>}>
        <MovieList filmList={filmList} state={{ from: `/movies?query=${searchQuery}`, addPath: '' }} />
      </Suspense>
    );
  }
};

export default SearchMovies;
