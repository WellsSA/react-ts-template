import styled, { css } from 'styled-components';
import palette from 'theme/palette';
import { Link } from 'react-router-dom';

interface IListItem {
  active: boolean;
  to: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h2`
  color: ${palette.purpleDark};
  font-weight: 600;
  font-size: 2.5rem;
  margin: 0 0 4rem 0;
`;

export const List = styled.ul`
  a + a {
    margin-top: 2rem;
  }
`;

const commonListItemCss = css`
  display: flex;
  align-items: center;
  padding: 1.5rem;

  border-radius: 4px;
  cursor: pointer;
  svg {
    margin-right: 2rem;
    color: ${palette.purpleDark};
  }
  &:hover {
    background-color: ${palette.purpleLight};
    color: ${palette.purpleDark};
    opacity: 1;
  }
`;

export const ListItem = styled(Link)<IListItem>`
  background-color: ${props =>
    props.active ? palette.purpleLight : palette.white};
  color: ${props => (props.active ? palette.purpleDark : palette.black)};
  opacity: ${props => (props.active ? 1 : 0.5)};
  ${commonListItemCss}
  text-decoration: none;
`;

export const LogoutContainer = styled.button`
  border: none;
  background: ${palette.white};
  color: ${palette.black};
  opacity: 0.5;
  margin-top: 2rem;
  ${commonListItemCss}
`;
