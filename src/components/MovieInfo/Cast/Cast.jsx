import { useParams } from "react-router-dom";

export const Cast = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);

  return <p>Cast ({movieId})</p>;
};
