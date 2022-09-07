import { fetchFilmData } from 'components/Common/fetchFilms';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import posterPlaceholder from '../../img/film-poster-placeholder.png';
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
    if (isNaN(movieId) || typeof movieId !== 'number') return <p>Not a valid movie identificator</p>;
    fetchFilmData(movieId, setFilmData);
  }, [movieId]);

  const { title, tagline, poster_path, overview, release_date } = filmData;

  return (
    <Suspense fallback={<p>Loading...</p>}>
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
          <img
            width="300"
            height="450"
            alt={tagline}
            src={poster_path ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}` : posterPlaceholder}
          />
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
    </Suspense>
  );
};

export default MovieInfo;
