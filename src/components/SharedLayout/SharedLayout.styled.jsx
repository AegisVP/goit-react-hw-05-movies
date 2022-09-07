import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: ${p => p.theme.mp(2, 3)};

  min-height: 80px;
  width: 100%;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const StyledLink = styled(NavLink)`
  margin: ${p => p.theme.mp(0, 3)};
  padding: ${p => p.theme.mp(2)};

  text-decoration: none;
  color: darkblue;
  font-size: 32px;
  border-radius: ${p => p.theme.radii.normal};

  &.active {
    /* text-decoration: underline;
    color: darkred; */
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }
`;
