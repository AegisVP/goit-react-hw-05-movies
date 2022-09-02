// import { Outlet } from 'react-router-dom';

import { useFilmSearch } from 'components/Common/fetchFilms';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Trending = () => {
  const [filmList, getFilmList] = useFilmSearch();

  useEffect(() => {
    getFilmList('trending');
  }, [getFilmList]);

  console.log(filmList);

  return (
    <ul>
      {filmList.results.map(film => (
        <li key={film.id}>
          <Link to={`movies/${film.id}`}>{film.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
