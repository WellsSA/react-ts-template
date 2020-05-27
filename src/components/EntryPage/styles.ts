import styled from 'styled-components';
import palette from 'theme/palette';

export const Container = styled.div`
  background-color: ${palette.grayLight};

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
  background-color: ${palette.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 1px;
  padding: 4rem 2rem;
  border-radius: 4px;
  width: 100%;
  max-width: 320px;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 2rem;
`;
