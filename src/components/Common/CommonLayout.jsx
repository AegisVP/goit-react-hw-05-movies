import { HeaderSection, StyledLink } from 'components/Common/CommonLayout.styled';

export const CommonHeader = () => {
  return (
    <>
      <HeaderSection>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </HeaderSection>
    </>
  );
};
