import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieList = styled.ul`
  margin: ${p => p.theme.mp(1, 0, 0)};
  padding: ${p => p.theme.mp(2)};

  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;

  list-style: none;
`;

export const StyledMovieItem = styled.li`
  margin: ${p => p.theme.mp(2)};
  padding: 0;
  word-wrap: none;
  padding: 0;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledMovieLink = styled(Link)`
  margin: 0;
  padding: ${p => p.theme.mp(2)};

  width: 100%;

  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  color: darkblue;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

  &.active {
    text-decoration: underline;
    color: darkred;
  }
`;
