import { useParams } from "react-router-dom";

export const Reviews = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);

  return <p>Reviews ({movieId})</p>;
};
