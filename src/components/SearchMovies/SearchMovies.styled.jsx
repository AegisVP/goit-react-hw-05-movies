import styled from 'styled-components';

export const StyledLabel = styled.label`
  margin: ${p => p.theme.mp(2)};

  display: flex;

  font-size: 14px;
  border: 1px solid #000000;
`;

export const StyledInput = styled.input`
  margin: 0;
  padding: ${p => p.theme.mp(1)};

  width: 250px;
  border: none;
  outline: none;
`;

export const StyledButton = styled.button`
  padding: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;

  font-size: 18px;
  line-height: 18px;

  border: none;
  outline: none;
  background-color: transparent;
`;
