/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useCallback } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';

import { useAuth } from '../../contexts/auth';

import './styles.css';

import { Modal } from '../../components/Modal';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
});

export const SignIn: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (signInCredentials) => {
      try {
        await signIn(signInCredentials);
      } catch (err) {
        const { status } = err.response;

        if (status === 404 || status === 401) {
          toast.error('Falha ao realizar o login (credenciais inválidas).');
          return;
        }

        toast.error('Erro interno de servidor.');
      }
    },
    [signIn],
  );

  const handleForgotPassword = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="wrapper-lines">
      <Helmet>
        <title>Entrar | DevTask</title>
        <meta
          name="description"
          content="Faça login na plataforma e comece a usá-la para divulgar seus trabalhos ou suas vagas."
        />
      </Helmet>

      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logoImg} alt="DevTask" />
          </Link>
        </div>
      </header>

      <div className="card-container">
        <div className="card">
          <div className="card-title">Login</div>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              label="Email"
              labelFor="email"
              type="email"
              placeholder="Digite seu email"
              error={errors.email}
              {...register('email')}
            />

            <Input
              label="Senha"
              labelFor="password"
              type="password"
              placeholder="Digite sua senha"
              error={errors.password}
              {...register('password')}
              passwordInput
              style={{ marginBottom: '0.4rem' }}
            />

            <div
              className="forgot-pass"
              role="button"
              onClick={handleForgotPassword}
            >
              Esqueci minha senha
            </div>

            <Button
              buttonType="solid"
              variant="primary"
              text="Entrar"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              style={{ marginTop: '0.7rem' }}
            />
          </form>
          <Link to="/register" className="register-acc">
            Ainda não tem uma conta? <span>Cadastre-se</span>
          </Link>
        </div>
      </div>

      <Modal
        modalIsOpen={showModal}
        toggleModalFunction={handleForgotPassword}
      />
    </div>
  );
};
