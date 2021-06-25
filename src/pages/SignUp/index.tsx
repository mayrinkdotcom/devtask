import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Text } from './styles';
import { api } from '../../services/api';

import logoImg from '../../assets/images/logo.svg';

type SignUpFormData = {
  name: string;
  cnpj: string;
  email: string;
  password: string;
};

const devFormSchema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
});

const businessFormSchema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  cnpj: yup.string().required('CNPJ é um campo obrigatório'),
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
});

export const SignUp: React.FC = () => {
  const [type, setType] = useState('');
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(type === 'dev' ? devFormSchema : businessFormSchema),
  });

  const handleSignUp: SubmitHandler<SignUpFormData> = async (values) => {
    const data = {
      fullName: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      if (type === 'dev') {
        await api.post('/dev', data);
      } else {
        await api.post('/enterprise', { ...data, cnpj: values.cnpj });
      }

      toast.success('Conta criada com sucesso.');

      history.push('/');
    } catch (err) {
      const { status } = err.response;

      if (status === 409) {
        toast.error('Email já cadastrado na plataforma.');
        return;
      }

      toast.error('Erro interno de servidor.');
    }
  };

  return (
    <div className="wrapper-lines">
      <Helmet>
        <title>Cadastrar | DevTask</title>
        <meta
          name="description"
          content="Cadastre-se na plataforma para divulgar seu portifólio, vagas e ficar cada vez menos distante do mercado de trabalho."
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
          {type ? (
            <>
              <div className="card-title">Criar conta!</div>

              <form onSubmit={handleSubmit(handleSignUp)}>
                <Input
                  label="Nome"
                  labelFor="name"
                  type="text"
                  placeholder="Digite seu nome"
                  error={errors.name}
                  {...register('name')}
                />

                {type === 'business' && (
                  <Input
                    label="CNPJ"
                    labelFor="cnpj"
                    type="text"
                    placeholder="Digite o CNPJ da empresa"
                    error={errors.cnpj}
                    {...register('cnpj')}
                  />
                )}

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
                />

                <Button
                  buttonType="solid"
                  variant="primary"
                  text="Cadastrar"
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  style={{ marginTop: '0.7rem' }}
                />
              </form>

              <Link to="/login" className="register-acc">
                Já tem uma conta? <span>Faça login</span>
              </Link>
            </>
          ) : (
            <>
              <div className="card-title">Olá!</div>

              <Text>
                Nos ajude a te indetificar para o seu cadastro ser continuado!
              </Text>

              <Button
                buttonType="solid"
                variant="primary"
                text="Desenvolvedor"
                type="button"
                style={{ marginTop: '3rem' }}
                onClick={() => setType('dev')}
              />

              <Button
                buttonType="outline"
                variant="primary"
                text="Contratante"
                type="button"
                style={{ marginTop: '1rem' }}
                onClick={() => setType('business')}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
