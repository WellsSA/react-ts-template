import styled from 'styled-components';
import palette from 'theme/palette';

export const Container = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Table = styled.table`
  width: 100%;
  a {
    text-decoration: none;
    color: #000;
  }

  thead {
    font-weight: 600;
    tr {
      cursor: default;
    }
  }

  tr {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: ${palette.white};
    margin: 1rem 0;
    padding: 1rem 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 1px;
    border-radius: 4px;
    align-items: center;
    justify-items: center;
  }

  td {
    font-size: 1.4rem;
  }

  svg {
    cursor: pointer;
    margin: 0 0.5rem;
  }

  tbody {
    tr {
      &:hover {
        transition: 0.2s all;
        transform: translateX(5px);
      }
    }
  }
`;

export const ContainerButton = styled.div`
  margin: 1rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 600;
  }

  button {
    max-width: 20rem;
  }
`;
