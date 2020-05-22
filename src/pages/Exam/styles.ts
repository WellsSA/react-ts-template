import styled from 'styled-components';
import palette from 'theme/palette';

export const Container = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-weight: 600;
    font-size: 2.4rem;
    color: ${palette.purpleDark};
  }
`;

export const SkeletonContainer = styled.div`
  margin-top: 4rem;

  span {
    margin: 1rem 0;
  }
`;
