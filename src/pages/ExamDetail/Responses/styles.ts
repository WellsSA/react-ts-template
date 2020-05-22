import styled from 'styled-components';
import palette from 'theme/palette';

export const List = styled.ul`
  margin-top: 4rem;

  li {
    display: flex;
    flex-direction: column;
    background: ${palette.white};
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 1px;
    border-radius: 4px;
    align-items: center;
    justify-items: center;
    cursor: pointer;

    button {
      display: block;
      background: transparent;
      border: none;
      font-weight: 600;
      width: 100%;
      text-align: start;
    }

    &:hover {
      transition: 0.2s all;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 1px;
    }
  }
`;

export const SkeletonContainer = styled.div`
  margin-top: 4rem;

  span {
    margin: 1rem 0;
  }
`;
