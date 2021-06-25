import React, {
  useState,
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import { FieldError } from 'react-hook-form';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import {
  Wrapper,
  Label,
  Container,
  TextInput,
  IconButton,
  ErrorIcon,
  ErrorMessage,
} from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelFor?: string;
  icon?: string;
  error?: FieldError;
  passwordInput?: boolean;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, labelFor, icon, error, passwordInput, style, ...rest },
  ref,
) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Wrapper style={style}>
      {!!label && <Label htmlFor={labelFor}>{label}</Label>}

      <Container hasError={!!error}>
        <TextInput
          id={labelFor}
          {...rest}
          ref={ref}
          type={passwordInput && !showPassword ? 'password' : 'text'}
        />

        {error ? (
          <ErrorIcon />
        ) : (
          <>
            {passwordInput && (
              <IconButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              </IconButton>
            )}
          </>
        )}
      </Container>

      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Wrapper>
  );
};

export const Input = forwardRef(InputBase);
