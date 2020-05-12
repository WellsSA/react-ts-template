import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 2rem 0 0;

  button {
    max-width: 20rem;
  }
`;
