import React from 'react';

import { Button as ButtonStyled } from './styles';

interface IProps {
  children: React.ReactNode;
  variant?: 'outlined' | 'contained' | 'dashed';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button: React.FC<IProps> = ({
  children,
  type = 'button',
  variant = 'contained',
  onClick,
  disabled,
}) => {
  return (
    <ButtonStyled
      variant={variant}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
