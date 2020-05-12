import styled from 'styled-components';
import palette from 'theme/palette';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  h2 {
    font-size: 1.8rem;
    margin-right: 1rem;
    font-weight: 600;
    color: ${palette.black};
  }
  img {
    max-width: 50px;
    border-radius: 50%;
  }
`;
