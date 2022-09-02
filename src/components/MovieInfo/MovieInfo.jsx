// import { } from './MovieInfo.styled';

import { useFilmData } from 'components/Common/fetchFilms';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieInfo = () => {
  const params = useParams();
  const [filmData, { getFilmData }] = useFilmData();
  const movieId = parseInt(params.movieId);
  if (isNaN(movieId) || typeof movieId !== 'number') return <p>Not a number</p>;

  getFilmData(params.movieId);

  return filmData ? (
    <div>
      <h1>{filmData.title}</h1>
      <div style={{ display: 'flex' }}>
        {filmData.poster_path && (
          <img
            width="300"
            alt={filmData.tagline}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${filmData?.poster_path}`}
          />
        )}

        <div>
          <p>{filmData.overview}</p>
        </div>
      </div>
      <hr />
      <Link to="cast">Cast</Link>
      <br />
      <Link to="reviews">Reviews</Link>
      <hr />
      <Outlet />
    </div>
  ) : (
    <p>Loading...</p>
  );
};
