import React, { useCallback } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Wrapper,
  Container,
  Card,
  Title,
  FooterSection,
  FooterContainer,
} from './styles';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

const resetPasswordFormSchema = yup.object().shape({
  password: yup.string().required('Senha é um campo obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirmar senha é um campo obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});

export const ResetPassword: React.FC = () => {
  const history = useHistory();

  const { search } = useLocation();
  const { token, email } = queryString.parse(search);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(resetPasswordFormSchema),
  });

  const handleChangePassword = useCallback(async (values) => {
    try {
      await api.patch(
        '/user/reset-password',
        { password: values.password, confirmPass: values.confirmPassword },
        {
          params: {
            token,
            email,
          },
        },
      );

      toast.success('Senha alterada com sucesso.');

      history.push('/login');
    } catch (err) {
      const { status } = err.response;

      if (status === 401 || status === 404) {
        toast.error(
          'Falha ao redefinir a senha de usuário. (email inválido ou token já expirado)',
        );
        return;
      }

      toast.error('Erro interno de servidor.');
    }
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Helmet>
          <title>Recuperar Senha | DevTask</title>
          <meta
            name="description"
            content="Recupere sua senha de forma simples e fácil."
          />
        </Helmet>

        <Card>
          <Title>Recuperar a Senha</Title>

          <form onSubmit={handleSubmit(handleChangePassword)}>
            <Input
              label="Nova senha"
              labelFor="password"
              type="password"
              placeholder="Digite a nova senha"
              error={errors.password}
              {...register('password')}
              passwordInput
            />

            <Input
              label="Confirmar senha"
              labelFor="confirmPassword"
              type="confirmPassword"
              placeholder="Repita a nova senha"
              error={errors.confirmPassword}
              {...register('confirmPassword')}
              passwordInput
            />

            <Button
              buttonType="solid"
              variant="primary"
              text="Redefinir"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              style={{ marginTop: '1.5rem' }}
            />
          </form>
        </Card>
      </Container>

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>
    </Wrapper>
  );
};
