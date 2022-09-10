import axios from 'axios';

const API_KEY = 'ad24807293275bef83ede161311e71e0';
const BASE_URL = 'https://api.themoviedb.org/3/';
const PATH_TRENDING = 'movie/popular'; // - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
const PATH_SEARCH = 'search/movie'; // - пошук фільму за ключовим словом на сторінці фільмів.
const PATH_DETAILS = 'movie'; // - запит повної інформації про фільм для сторінки кінофільму.
const PATH_CREDITS = 'credits'; // - запит інформації про акторський склад для сторінки кінофільму.
const PATH_REVIEWS = 'reviews'; // - запит оглядів для сторінки кінофільму.

const fetchPath = path => axios.get(path).then(r => r.data);

export const fetchTrendingFilms = () => fetchPath(`${BASE_URL}${PATH_TRENDING}?api_key=${API_KEY}`);
export const fetchFilmList = ({ query = 'trending', page = 1 }) => fetchPath(`${BASE_URL}${PATH_SEARCH}?api_key=${API_KEY}&query=${query}&page=${page}`);
export const fetchFilmData = movieId => fetchPath(`${BASE_URL}${PATH_DETAILS}/${movieId}?api_key=${API_KEY}`);
export const fetchFilmCredits = movieId => fetchPath(`${BASE_URL}${PATH_DETAILS}/${movieId}/${PATH_CREDITS}?api_key=${API_KEY}`).then(r => r.cast.slice(0, 10));
export const fetchFilmReviews = movieId => fetchPath(`${BASE_URL}${PATH_DETAILS}/${movieId}/${PATH_REVIEWS}?api_key=${API_KEY}`).then(r => r.results.slice(0, 10));
