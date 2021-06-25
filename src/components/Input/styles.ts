/* eslint-disable indent */
import styled from 'styled-components';
import { BsFillXCircleFill } from 'react-icons/bs';

export const Wrapper = styled.fieldset`
  width: 100%;
  border: none;
  margin-bottom: 12px;
  border-radius: 16px;
`;

export const Label = styled.label``;

export const Container = styled.div<{ hasError: boolean }>`
  background-color: transparent;
  border: 1.5px solid
    ${(props) => (props.hasError ? 'var(--error-700)' : '#bbbbbb')};
  border-radius: 16px;
  padding: 12px 16px;
  margin: 2px 0;

  display: flex;
  align-items: center;
  flex-direction: row;

  &:hover {
    border-color: ${(props) =>
      props.hasError ? 'var(--error-700)' : '#858585'};
  }

  &:focus-within {
    border-color: ${(props) =>
      props.hasError ? 'var(--error-700)' : 'var(--purple)'};
  }
`;

export const TextInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const IconButton = styled.button`
  border: none;
  background-color: transparent;

  width: 24px;
  height: 24px;

  font-size: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  color: #858585;

  margin-left: 12px;
`;

export const ErrorIcon = styled(BsFillXCircleFill)`
  font-size: 18px;
  color: var(--error-700);
  margin-left: 12px;
`;

export const ErrorMessage = styled.span`
  color: var(--error-700);
`;
