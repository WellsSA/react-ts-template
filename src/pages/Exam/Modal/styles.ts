import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const Container = styled.div``;

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: grid;

  grid-template-columns: repeat(2, 20rem);
  grid-column-gap: 2rem;
`;

export const Loading = styled(ReactLoading).attrs({
  style: {
    height: '20px',
    width: '20px',
    margin: '0 auto',
    fill: '#fff',
  },
})``;
