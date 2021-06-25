import React, { useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';

import { Button } from '../Button';
import { Input } from '../Input';

import {
  Container,
  ModalCloseButton,
  ModalContent,
  ContentWrapper,
  ModalTitle,
  ModalText,
} from './styles';
import { api } from '../../services/api';

type ForgotPasswordFormData = {
  email: string;
};

const forgotPasswordFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
});

type ModalProps = {
  modalIsOpen: boolean;
  toggleModalFunction: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  modalIsOpen,
  toggleModalFunction,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordFormSchema),
  });

  const handleResetPassword = useCallback(
    async (values) => {
      try {
        await api.post('/auth/reset-password', {
          email1: values.email,
          email2: values.email,
        });

        toast.success('Email de recuperação de senha enviado com sucesso.');

        toggleModalFunction();
      } catch (err) {
        const { status } = err.response;

        if (status === 422) {
          toast.error('Falha ao enviar email de recuperação de senha.');
          return;
        }

        toast.error('Erro interno de servidor.');
      }
    },
    [toggleModalFunction],
  );

  useEffect(() => {
    reset();
  }, [modalIsOpen]);

  return (
    <Container modalIsOpen={modalIsOpen}>
      <ModalContent>
        <ModalCloseButton type="button" onClick={toggleModalFunction} />

        <ContentWrapper>
          <ModalTitle>Recuperar Senha</ModalTitle>
          <ModalText>
            Informe o email cadastrado na plataforma para recuperar sua senha.
          </ModalText>

          <form onSubmit={handleSubmit(handleResetPassword)}>
            <Input
              type="email"
              placeholder="Digite seu email"
              error={errors.email}
              {...register('email')}
            />
            <Button
              buttonType="solid"
              variant="primary"
              text="Recuperar"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            />
          </form>
        </ContentWrapper>
      </ModalContent>
    </Container>
  );
};
