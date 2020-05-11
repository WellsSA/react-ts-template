import styled from 'styled-components';
import palette from 'theme/palette';

interface IButton {
  variant: 'outlined' | 'contained';
}
export const Button = styled.button<IButton>`
  width: 100%;
  height: 4rem;

  border: none;
  border-radius: 4px;

  background-color: ${props =>
    props.variant === 'outlined' ? palette.white : palette.purpleDark};

  color: ${props =>
    props.variant === 'outlined' ? palette.purpleDark : palette.white};

  font-weight: 600;

  &:hover {
    opacity: 0.8;
    transition: 0.4;
  }
`;
