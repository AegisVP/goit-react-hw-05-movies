import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'ad24807293275bef83ede161311e71e0';
const BASE_URL = 'https://api.themoviedb.org/3';
const PATH_TRENDING = 'movie/popular'; // - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
const PATH_SEARCH = 'search/movie'; // - пошук фільму за ключовим словом на сторінці фільмів.
const PATH_DETAILS = 'movie'; // - запит повної інформації про фільм для сторінки кінофільму.
const PATH_CREDITS = 'credits'; // - запит інформації про акторський склад для сторінки кінофільму.
const PATH_REVIEWS = 'reviews'; // - запит оглядів для сторінки кінофільму.

// async function fetchFilmData({ path = PATH_SEARCH }) {
//   const searchParam = new URLSearchParams({ api_key: API_KEY });

//   return await axios
//     .get(`${BASE_URL}${URL_PATH}`)
//     .then(response => {
//       if (response.status !== 200) return Promise.reject(`Error: ${response.message}`);
//       return response.data;
//     })
//     .catch(err => {
//       return Promise.reject(err => {
//         window.alert('There was an error during last film data request');
//         console.log(err);
//       });
//     });
// }

export const useFilmData = () => {
  const [movieId, setMovieId] = useState();
  const [filmData, setFilmData] = useState();
  const [filmCredits, setFilmCredits] = useState();
  const [filmReviews, setFilmReviews] = useState();

  async function fetchFilmData(movieId) {
    const searchParam = new URLSearchParams({ api_key: API_KEY });

    const filmDataPromise = new Promise((resolve, reject) => {
      const path = `${BASE_URL}/${PATH_DETAILS}/${movieId}?${searchParam}`;
      console.log(path);
      resolve(axios.get(path).then(r => r.data));
    });

    const filmCreditsPromise = new Promise((resolve, reject) => {
      const path = `${BASE_URL}/${PATH_DETAILS}/${movieId}/${PATH_CREDITS}?${searchParam}`;
      console.log(path);
      resolve(axios.get(path).then(r => r.data));
    });

    const filmReviewsPromise = new Promise((resolve, reject) => {
      const path = `${BASE_URL}/${PATH_DETAILS}/${movieId}/${PATH_REVIEWS}?${searchParam}`;
      console.log(path);
      resolve(axios.get(path).then(r => r.data));
    });

    filmDataPromise.then(setFilmData).catch(console.log);
    filmCreditsPromise.then(setFilmCredits).catch(console.log);
    filmReviewsPromise.then(setFilmReviews).catch(console.log);
  }

  useEffect(() => {
    fetchFilmData(movieId);
  }, [movieId]);

  const getFilmData = newMovieId => {
    if (movieId !== parseInt(newMovieId) && !isNaN(newMovieId)) setMovieId(parseInt(newMovieId));
  };

  const getCredits = () => {
    return filmCredits;
  };

  const getReviews = () => {
    return filmReviews;
  };

  return [filmData, { getFilmData, getCredits, getReviews }];
};

export const useFilmSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filmList, setFilmList] = useState({ results: [] });

  async function fetchFilmSearch(query = 'trending', page = 1) {
    const searchParam = new URLSearchParams({ api_key: API_KEY, page });
    // console.log('query', query?.length);
    // console.log(searchParam.toString());
    if (query?.length > 0 && query !== 'trending') searchParam.append('query', query);
    // console.log(searchParam.toString());

    const filmListPromise = new Promise(resolve => {
      const URL_PATH = query === 'trending' ? PATH_TRENDING : PATH_SEARCH;
      // console.log('query', query);
      // console.log('URL_PATH', URL_PATH);
      const path = `${BASE_URL}/${URL_PATH}?${searchParam}`;
      // console.log('path', path);
      resolve(axios.get(path).then(r => r.data));
    });

    filmListPromise.then(setFilmList).catch(console.log);
  }

  useEffect(() => {
    if (searchQuery) fetchFilmSearch(searchQuery, currentPage);
  }, [searchQuery, currentPage]);

  const newSearch = ({ query = 'trending', page = 1 } = {}) => {
    // console.log(`saved search: "${searchQuery}", page: ${currentPage}`);
    // console.log(`new search: "${query}", page:${page}`);
    if (searchQuery !== query && query?.length >= 0) setSearchQuery(String(query).toLocaleLowerCase().trim());
    if (!isNaN(page) && parseInt(page) > 0 && parseInt(page) !== currentPage) setCurrentPage(page);
  };

  return [filmList, newSearch];
};

// export default fetchFilmData;
