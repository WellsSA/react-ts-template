import styled from 'styled-components';
import palette from 'theme/palette';

export const Container = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-rows: auto;

  > strong {
    color: ${palette.purpleDark};
    font-size: 1.8rem;
  }
`;

export const CopyToClipboardContainer = styled.div`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 5px;
  width: fit-content;

  span {
    padding: 1rem;
    border-right: 1px solid #ccc;
  }

  svg {
    margin: 1rem;
    cursor: pointer;
    margin-left: 5px;
  }
`;
