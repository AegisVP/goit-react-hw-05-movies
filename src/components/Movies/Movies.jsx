import { lazy, Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmList } from 'utils/fetchFilms';
import { isPositiveNumber } from 'utils/isPositiveNumber';

const SearchForm = lazy(() => import('components/SearchForm/SearchForm'));
const MovieList = lazy(() => import('components/MovieList/MovieList'));

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [filmList, setFilmList] = useState([]);

  const paramsQuery = searchParams.get('query') || '';
  const paramsPage = parseInt(isPositiveNumber(searchParams.get('page')) || 1);

  if (paramsQuery !== searchQuery) setSearchQuery(paramsQuery);
  if (paramsPage !== searchPage) setSearchPage(paramsPage);

  useEffect(() => {
    if (searchQuery === '') setFilmList({});
    else fetchFilmList({ query: searchQuery, page: searchPage }).then(setFilmList);
  }, [searchQuery, searchPage]);

  const onSubmit = e => {
    e?.preventDefault();
    const searchValue = String(e.currentTarget.query.value).trim();

    if (searchValue !== '') setSearchParams({ query: searchValue, page: 1 });
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
