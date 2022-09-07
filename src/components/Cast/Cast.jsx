import { fetchFilmCredits } from 'components/Common/fetchFilms';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorName, CastItem, CastList, CastMeta, CharacterName, Span } from './Cast.styled';

const Cast = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    if (isNaN(movieId) || typeof movieId !== 'number') return <p>Not a number</p>;
    fetchFilmCredits(movieId, setCredits);
  }, [movieId]);

  console.log('credits', credits);

  return (
    <CastList>
      {credits && credits.length > 0 ? (
        credits.map(({ id, name, character, profile_path }) => {
          return (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
                    : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`
                }
                width="138"
                height="175"
                alt={name}
              />
              <CastMeta>
                <ActorName>{name}</ActorName>
                {character.length > 0 && (
                  <CharacterName>
                    <Span>as </Span> {character}
                  </CharacterName>
                )}
              </CastMeta>
            </CastItem>
          );
        })
      ) : (
        <CastItem>No information is available</CastItem>
      )}
    </CastList>
  );
};

export default Cast;
