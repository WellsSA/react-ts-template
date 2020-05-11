import React from 'react';

import { Button as ButtonStyled } from './styles';

interface IProps {
  children: React.ReactNode;
  variant?: 'outlined' | 'contained';
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button: React.FC<IProps> = ({
  children,
  type = 'button',
  variant = 'contained',
  onClick,
}) => {
  return (
    <ButtonStyled variant={variant} type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
