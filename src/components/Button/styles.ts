import styled, { css } from 'styled-components';
import palette from 'theme/palette';

interface IButton {
  variant: 'outlined' | 'contained' | 'dashed';
  disabled?: boolean;
}
export const Button = styled.button<IButton>`
  width: 100%;
  height: 4rem;

  border: none;
  border-radius: 4px;

  ${props =>
    props.variant === 'outlined' &&
    css`
      background-color: ${palette.white};
      color: ${palette.purpleDark};
    `}

  ${props =>
    props.variant === 'contained' &&
    css`
      background-color: ${palette.purpleDark};
      color: ${palette.white};
    `}

  ${props =>
    props.variant === 'dashed' &&
    css`
      border: 2px dashed ${palette.purpleDark};
    `}

  font-weight: 600;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    opacity: 0.8;
    transition: 0.4;
  }
`;
