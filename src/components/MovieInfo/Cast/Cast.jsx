import { useFilmData } from "components/Common/fetchFilms";
import { useParams } from "react-router-dom";

export const Cast = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);
  const [credits, { getCredits }] = useFilmData();

  getCredits();
  console.log(credits);

  return <p>Cast ({movieId})</p>;
};
