import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  margin: ${p => p.theme.mp(0, 0, 2)};
  padding: ${p => p.theme.mp(2, 3)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: none;
  outline: none;
  color: #222244;
  background-color: transparent;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const MovieTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 36px;
  font-weight: bold;
`;

export const MovieYear = styled.span`
  font-size: 32px;
  font-weight: normal;
`;

export const MovieMeta = styled.div`
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 1px solid #000000;
`;

export const MovieDescription = styled.p`
  margin: 0 0 0 10px;
  font-size: 16px;
  font-weight: normal;
`;

export const DescriptionLink = styled(Link)`
  margin: 10px 0 0;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  color: #222244;
`;

export const MovieLinks = styled.div`
  display: flex;
  padding: 0 0 20px;
  flex-direction: column;
  border-bottom: 1px solid #000000;
`;
