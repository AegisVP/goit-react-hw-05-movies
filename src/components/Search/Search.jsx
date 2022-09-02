import { useFilmSearch } from 'components/Common/fetchFilms';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filmList, searchFilm] = useFilmSearch();

  const onSubmit = e => {
    e.preventDefault();
    searchFilm({ query: searchQuery, page: 1 });
  };

  return filmList?.results.length === 0 ? (
    <form action="#" onSubmit={onSubmit}>
      <label>
        Search:{' '}
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
          placeholder="What movie you wish to find?"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  ) : (
    <ul>
      {filmList.results.map(film => {
        return (
          <li key={film.id}>
            <Link to={`${film.id}`}>{film?.original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
