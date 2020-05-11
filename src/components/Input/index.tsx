/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { InputStyled, Label } from './styles';

interface IProps {
  variant?: 'contained';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'password';
  error?: string;
  value?: string;
  name?: string;
}
const Input: React.FC<IProps> = ({
  variant = 'contained',
  onChange,
  label,
  placeholder,
  type = 'text',
  error,
  value,
  name,
}) => {
  return (
    <Label>
      <span>{label}</span>
      <InputStyled
        placeholder={placeholder}
        variant={variant}
        onChange={onChange}
        type={type}
        value={value}
        name={name}
      />
      <p>{error}</p>
    </Label>
  );
};

export default Input;
