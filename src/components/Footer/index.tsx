import React from 'react';

import {
  FooterWrapper,
  FooterItemWrapper,
  FooterImage,
  FooterContent,
  FooterTitle,
  FooterLink,
  FooterText,
} from './styles';

import devtaskLogo from '../../assets/images/logo-devtask2.svg';

export const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterItemWrapper>
      <FooterImage src={devtaskLogo} />

      <FooterContent>
        Projeto desenvolvido por alunos de Engenharia de Software na Puc Minas
      </FooterContent>
    </FooterItemWrapper>

    <FooterItemWrapper>
      <FooterTitle>Feature</FooterTitle>

      <FooterLink to="/">Home</FooterLink>
      <FooterLink to="/portfolio">Portifólio</FooterLink>
      <FooterLink to="/jobs">Vagas</FooterLink>
      <FooterLink to="/register">Criar conta</FooterLink>
      <FooterLink to="/login">Entrar</FooterLink>
    </FooterItemWrapper>

    <FooterItemWrapper>
      <FooterTitle>Contato</FooterTitle>

      <FooterText>contato@devtask.com</FooterText>
      <FooterText>+55 0000-0000</FooterText>
    </FooterItemWrapper>

    <FooterItemWrapper>
      <FooterTitle>Alunos</FooterTitle>

      <FooterText>Ana Clara Fonseca Campos</FooterText>
      <FooterText>João Pedro Mayrink</FooterText>
    </FooterItemWrapper>
  </FooterWrapper>
);
