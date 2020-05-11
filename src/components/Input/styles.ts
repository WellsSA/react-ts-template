import styled from 'styled-components';
import palette from 'theme/palette';

interface IInputStyled {
  variant?: 'contained';
}

export const InputStyled = styled.input<IInputStyled>`
  border: 2px solid ${palette.grayLight};
  border-radius: 4px;
  height: 4rem;
  width: 100%;

  padding: 0 1rem;

  &:hover {
    transition: 0.5s;
    border: 2px solid ${palette.purpleDark};
  }

  ::placeholder {
    color: #ccc;
  }
`;

export const Label = styled.label`
  > span {
    color: ${palette.purpleDark};
    font-weight: 600;
    display: block;
    padding-bottom: 0.5rem;
  }

  p {
    color: #f00;
    font-size: 1.4rem;
  }
`;
