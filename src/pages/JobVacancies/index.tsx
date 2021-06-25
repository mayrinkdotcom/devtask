import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import { toast } from 'react-toastify';
import {
  Wrapper,
  Container,
  Header,
  Title,
  FooterSection,
  FooterContainer,
  ErrorContainer,
  ErrorMessage,
} from './styles';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { JobItem } from '../../components/JobItem';
import { api } from '../../services/api';
import { JobModal } from '../../components/JobModal';

type Jobs = {
  id: number;
  userId: number;
  enterpriseId: number;
  categoryId: number;
  title: string;
  description: string;
  location: string;
  isRemote: boolean;
  jobModality: string;
  User: {
    fullName: string;
  };
  Category: {
    title: string;
  };
};

export const JobVacancies: React.FC = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [selectedJob, setSelectedJob] = useState<Jobs>();
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const loadJobs = async () => {
    try {
      const response = await api.get('/job');

      if (response.data.data) {
        setError('');
        setJobs(response.data.data);
      } else {
        setError('Nenhuma vaga foi cadastrada no sistema.');
      }
    } catch (err) {
      setError('Falha ao carregar as vagas cadastradas no sistema.');
      toast.error('Falha ao carregar as vagas cadastradas.');
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectJob = (job: Jobs) => {
    setSelectedJob(job);
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Portifólio | DevTask</title>
        <meta
          name="description"
          content="Conheça as vagas ofertadas pelas empresas cadastradas. Encontre aquela que faz mais sentido com o seu contexto e entre em contato com a empresa."
        />
      </Helmet>
      <Navbar />

      <Header>
        <Title>
          Vagas para
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
          {jobs.map((job) => (
            <JobItem
              key={job.id}
              job={job}
              toogleModal={handleShowModal}
              selectJob={handleSelectJob}
            />
          ))}
        </Container>
      )}

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>

      <JobModal
        modalIsOpen={showModal}
        toggleModalFunction={handleShowModal}
        job={selectedJob}
      />
    </Wrapper>
  );
};
