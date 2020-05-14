import styled from 'styled-components';
import palette from 'theme/palette';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 25rem auto;
  grid-column-gap: 2rem;
  padding: 2rem;
`;

export const LeftSideContainer = styled.div`
  padding: 2rem;
`;

export const RightSideContainer = styled.div`
  padding: 2rem 4rem;
  border-radius: 4rem;
  background: ${palette.grayLight};
`;

export const ChildrenContainer = styled.div`
  padding: 2rem 0 0;
`;
