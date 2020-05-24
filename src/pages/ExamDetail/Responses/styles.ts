import styled from 'styled-components';
import { Collapse as ReactCollapse } from 'react-collapse';
import palette from 'theme/palette';

export const List = styled.ul`
  margin-top: 4rem;
  display: block;
  max-height: 40rem;

  overflow-y: auto;

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
export const Collapse = styled(ReactCollapse)``;

export const CollapseContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  p {
    strong {
      margin-right: 5px;
      font-weight: 600;
    }
  }
`;
