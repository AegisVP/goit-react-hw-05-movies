import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'ad24807293275bef83ede161311e71e0';
const BASE_URL = 'https://api.themoviedb.org/3';
const PATH_TRENDING = 'movie/popular'; // - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
const PATH_SEARCH = 'search/movie'; // - пошук фільму за ключовим словом на сторінці фільмів.
const PATH_DETAILS = 'movie'; // - запит повної інформації про фільм для сторінки кінофільму.
const PATH_CREDITS = 'credits'; // - запит інформації про акторський склад для сторінки кінофільму.
const PATH_REVIEWS = 'reviews'; // - запит оглядів для сторінки кінофільму.
const searchParam = new URLSearchParams({ api_key: API_KEY });

export async function fetchFilmData(movieId, funcCB) {
  if (!movieId) return;

  const filmData = await axios
    .get(`${BASE_URL}/${PATH_DETAILS}/${movieId}?${searchParam}`)
    .then(r => r.data)
    .catch(window.alert);

  funcCB(filmData);
}

export async function fetchFilmCredits(movieId, funcCB) {
  if (!movieId) return;

  const filmCredits = await axios
    .get(`${BASE_URL}/${PATH_DETAILS}/${movieId}/${PATH_CREDITS}?${searchParam}`)
    .then(r => r.data.cast.slice(0, 10))
    .catch(window.alert);

  funcCB(filmCredits);
}

export async function fetchFilmReviews(movieId, funcCB) {
  if (!movieId) return;

  const filmReviews = await axios
    .get(`${BASE_URL}/${PATH_DETAILS}/${movieId}/${PATH_REVIEWS}?${searchParam}`)
    .then(r => r.data.results.slice(0, 10))
    .catch(window.alert);

  funcCB(filmReviews);
}

export const useFilmSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState('');
  const [filmList, setFilmList] = useState({ results: [] });

  async function fetchFilmList({ query = 'trending', page = 1 }) {
    if (query?.length > 0 && query !== 'trending') {
      searchParam.set('query', query);
      searchParam.set('page', page);
    }

    const URL_PATH = query === 'trending' ? PATH_TRENDING : PATH_SEARCH;
    const path = `${BASE_URL}/${URL_PATH}?${searchParam}`;

    await axios
      .get(path)
      .then(r => r.data)
      .then(setFilmList)
      .catch(window.alert);
  }

  useEffect(() => {
    if (searchQuery) fetchFilmList({ query: searchQuery, page: searchPage });
    else emptyFilmList();
  }, [searchQuery, searchPage]);

  const newSearch = ({ query = 'trending', page = 1 } = {}) => {
    if (searchQuery !== query) {
      setSearchQuery(query?.trim().toLocaleLowerCase());
      setSearchPage(page);

      if (!(query?.length >= 0)) emptyFilmList();
    }
  };

  const emptyFilmList = () => {
    setFilmList({});
  };

  return [filmList, newSearch, emptyFilmList];
};

// export default fetchFilmData;
