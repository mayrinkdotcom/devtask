/* eslint-disable indent */
import styled from 'styled-components';

export const StyledButton = styled.button<{
  buttonType: string;
  variant: string;
}>`
  width: 100%;
  height: 54px;

  font-weight: 500;

  font-size: 1.1rem;

  margin-top: 4px;
  border-radius: 16px;
  border: ${(props) =>
    props.buttonType === 'outline'
      ? props.variant === 'secondary'
        ? 'solid 1px var(--blue-500)'
        : 'solid 1px var(--dark-purple)'
      : 'none'};
  background-color: ${(props) =>
    props.buttonType === 'solid'
      ? props.variant === 'secondary'
        ? 'var(--caramel-400)'
        : 'var(--purple)'
      : 'transparent'};

  color: ${(props) =>
    props.buttonType === 'solid'
      ? props.variant === 'secondary'
        ? 'var(--black)'
        : 'var(--white)'
      : props.variant === 'secondary'
      ? 'var(--blue-500)'
      : 'var(--purple)'};

  outline: none;

  &:focus {
    border: 1.5px solid
      ${(props) =>
        props.variant === 'secondary'
          ? 'var(--blue-800)'
          : 'var(--caramel-800)'};
  }
`;
