// import { } from './MovieInfo.styled';

import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieInfo = () => {
  const params = useParams();

  const movieId = parseInt(params.movieId);
  if (isNaN(movieId) || typeof movieId !== 'number') return <p>Not a number</p>;

  return (
    <div>
      <p>Movie info: {movieId}</p>
      <hr />
      <Link to="cast">Cast</Link>
      <br />
      <Link to="reviews">Reviews</Link>
      <hr />
      <Outlet />
    </div>
  );
};
