import styled from 'styled-components';
import palette from 'theme/palette';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${palette.purpleDark};
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
