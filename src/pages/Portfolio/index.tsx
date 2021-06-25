import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import { toast } from 'react-toastify';
import {
  Wrapper,
  Container,
  Header,
  Title,
  ErrorContainer,
  ErrorMessage,
  FooterSection,
  FooterContainer,
} from './styles';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { api } from '../../services/api';
import { PortfolioItem } from '../../components/PortfolioItem';

type ProjectData = {
  id: number;
  devId: number;
  title: string;
  description: string;
  User: {
    fullName: string;
    id: number;
  };
  Category: {
    title: string;
    id: number;
  };
};

export const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  const [error, setError] = useState('');

  const loadProject = async () => {
    try {
      const response = await api.get('/project');

      if (response.data.data) {
        setError('');
        setProjects(response.data.data);
      } else {
        setError('Nenhum portifólio foi cadastrado no sistema.');
      }
    } catch (err) {
      setError('Não foi possível carregar o portifólio dos desenvolvedores.');
      toast.error('Falha ao carregar os desenvolvedores.');
    }
  };

  useEffect(() => {
    loadProject();
  }, []);

  return (
    <Wrapper>
      <Helmet>
        <title>Portifólio | DevTask</title>
        <meta
          name="description"
          content="Conheça o portifólio dos desenvolvedores cadastrados. Encontre aquele com a realidade mais adequada a da sua empresa e entre em contato com ele."
        />
      </Helmet>
      <Navbar />

      <Header>
        <Title>
          Projetos dos
          <br />
          desenvolvedores
        </Title>
      </Header>

      {error ? (
        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      ) : (
        <Container>
          {projects.map((project) => (
            <PortfolioItem project={project} key={project.id} />
          ))}
        </Container>
      )}

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>
    </Wrapper>
  );
};
