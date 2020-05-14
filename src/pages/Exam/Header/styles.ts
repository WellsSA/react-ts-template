import styled from 'styled-components';
import palette from 'theme/palette';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${palette.purpleLight};
    font-size: 2rem;
  }

  h2 {
    font-size: 4rem;
    color: ${palette.purpleDark};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 20rem;
`;
