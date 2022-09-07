import { fetchFilmData } from 'components/Common/fetchFilms';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  Button,
  DescriptionLink,
  MovieDescription,
  MovieInfoContainer,
  MovieLinks,
  MovieMeta,
  MovieTitle,
  MovieYear,
} from './MovieInfo.styled';

const MovieInfo = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);
  const [filmData, setFilmData] = useState([]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (isNaN(movieId) || typeof movieId !== 'number') return <p>Not a number</p>;
    fetchFilmData(movieId, setFilmData);
  }, [movieId]);

  const { title, tagline, poster_path, overview, release_date } = filmData;

  return filmData ? (
    <MovieInfoContainer>
      <Link to={backLinkHref}>
        <Button>
          <IoMdArrowRoundBack />
          Go back
        </Button>
      </Link>
      <MovieTitle>
        {title} <MovieYear>({String(release_date).slice(0, 4)})</MovieYear>
      </MovieTitle>
      <MovieMeta>
        {poster_path && (
          <img
            width="300"
            height="450"
            alt={tagline}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
          />
        )}

        <MovieDescription>{overview}</MovieDescription>
      </MovieMeta>
      <MovieLinks>
        <DescriptionLink to="cast" state={{ from: `${backLinkHref}` }}>
          Cast
        </DescriptionLink>
        <DescriptionLink to="reviews" state={{ from: `${backLinkHref}` }}>
          Reviews
        </DescriptionLink>
      </MovieLinks>
      <Outlet />
    </MovieInfoContainer>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieInfo;
