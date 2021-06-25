import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType: string;
  variant: string;
  text: string;
  isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  buttonType,
  variant,
  text,
  isLoading,
  ...rest
}) => (
  <StyledButton {...rest} buttonType={buttonType} variant={variant}>
    {isLoading ? 'Carregando...' : text}
  </StyledButton>
);
