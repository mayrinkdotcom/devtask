/* eslint-disable operator-linebreak */
import React, { useCallback, useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Helmet } from 'react-helmet-async';

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import {
  Wrapper,
  Container,
  BackgroundImage,
  HeaderContainer,
  ProfileContainer,
  ProfileImage,
  NoPhoto,
  ProfileDetails,
  NameContainer,
  Name,
  EditInfoButton,
  EditIcon,
  TabsContainer,
  TabItem,
  TabContent,
  InputContainer,
  Input,
  Mail,
  Textarea,
  DataContainer,
  RowData,
  DataTitle,
  BigText,
  DataText,
  Select,
  SaveContainer,
  FooterSection,
  FooterContainer,
  ErrorContainer,
  ErrorMessage,
  SocialMediaLogo,
  TrashIcon,
  JobProfileContainer,
  JobWrapper,
  ContentContainer,
} from './styles';
import { Button } from '../../components/Button';
import { JobProfileItem } from '../../components/JobProfileItem';

import { api } from '../../services/api';
import { useAuth } from '../../contexts/auth';

import websiteIcon from '../../assets/icons/web.svg';
import { JobModal } from '../../components/JobModal';

type BusinessFormData = {
  fullName: string;
  bio: string;
  contact: string;
  website: string;
};

type CategoriesData = {
  id: number;
  title: string;
};

type JobFormData = {
  jobTitle: string;
  jobDescription: string;
  jobType: string;
  location: string;
  category: string;
  isRemote: boolean;
};

type ParamsProps = {
  id: string;
};

type JobParams = {
  id: number;
  userId: number;
  enterpriseId: number;
  categoryId: number;
  title: string;
  description: string;
  location: string;
  isRemote: boolean;
  jobModality: string;
};

type BusinessData = {
  id: number;
  userId: number;
  cnpj: string;
  bio: string;
  contact: string;
  website: string;
  User: {
    firstName: string;
    id: number;
    fullName: string;
    email: string;
  };
  Jobs: JobParams[];
};

// type JobProps = {};

const businessFormSchema = yup.object().shape({});

const jobFormSchema = yup.object().shape({});

export const BusinessProfile: React.FC = () => {
  const { id } = useParams<ParamsProps>();
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobParams>();
  const [business, setBusiness] = useState<BusinessData>();
  const [categories, setCategories] = useState<CategoriesData[]>([]);

  const [error, setError] = useState('');

  const { user: storedUser } = useAuth();

  const [toogleState, setToogleState] = useState(1);
  const [editing, setEditing] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<BusinessFormData>({
    resolver: yupResolver(businessFormSchema),
  });

  const {
    register: registerJob,
    handleSubmit: handleSubmitJob,
    reset,
    formState: { isSubmitting: isSubmittingJob },
  } = useForm<JobFormData>({
    resolver: yupResolver(jobFormSchema),
  });

  const loadCategories = async () => {
    try {
      const response = await api.get('/category');

      setCategories(response.data.data);
    } catch (err) {
      toast.error('Falha ao buscar as categorias cadastradas.');
    }
  };

  const loadBusinessData = async () => {
    try {
      const response = await api.get(`/enterprise/${id}`);

      if (response.data.length === 0) {
        setError('Não foi possível encontrar essa empresa.');
        toast.error('Empresa não encontrada.');
      } else {
        setError('');

        const currentBusiness = response.data[0];
        currentBusiness.Jobs.reverse();
        setBusiness(currentBusiness);

        setValue(
          'fullName',
          currentBusiness ? currentBusiness.User.fullName : '',
        );

        setValue('bio', currentBusiness ? currentBusiness.bio : '');
        setValue('website', currentBusiness ? currentBusiness.website : '');
        setValue('contact', currentBusiness ? currentBusiness.contact : '');
      }
    } catch (err) {
      setError('Não foi possível encontrar essa empresa.');
      toast.error('Falha ao buscar os dados dessa empresa.');
    }
  };

  useEffect(() => {
    loadBusinessData();
    loadCategories();
  }, []);

  const handleChangeData = useCallback(async (values) => {
    const data = {
      bio: values.bio ? values.bio : '',
      contact: values.contact ? values.contact : '',
      website: values.website ? values.website : '',
    };

    try {
      await api.put('/enterprise', data);

      setEditing(false);

      toast.success('Dados atualizados com sucesso.');

      loadBusinessData();
    } catch (err) {
      toast.error('Falha ao atualizar os dados. Tente novamente.');
    }
  }, []);

  const handlePublishJob = useCallback(async (values) => {
    if (
      !values.jobTitle ||
      !values.jobDescription ||
      !values.jobType ||
      !values.category ||
      values.category === 'default' ||
      !values.location
    ) {
      toast.error('Preencha todas as informações antes de publicar uma vaga.');
      return;
    }

    const data = {
      title: values.jobTitle,
      description: values.jobDescription,
      jobModality: values.jobType,
      location: values.location,
      isRemote: values.isRemote === 'true',
      categoryId: Number(values.category),
    };

    try {
      await api.post('/job', data);

      toast.success('Vaga publicada com sucesso.');

      reset();

      loadBusinessData();
    } catch (err) {
      toast.error('Falha ao publicar a vaga.');
    }
  }, []);

  const deleteJob = async (jobId: number) => {
    try {
      await api.delete(`/job/${jobId}`);

      toast.success('Vaga deletada com sucesso.');

      loadBusinessData();
    } catch (err) {
      toast.error('Falha ao deletar essa vaga.');
    }
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectJob = (job: JobParams) => {
    setSelectedJob(job);
  };

  return (
    <Wrapper>
      <Navbar solid />

      <Helmet>
        <title>Perfil | DevTask</title>
        <meta
          name="description"
          content="Perfil de uma empresa. Entre e conheça sobre essa empresa e suas vagas, uma delas pode ser do seu interesse."
        />
      </Helmet>

      {error ? (
        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      ) : (
        <>
          <BackgroundImage>
            <Container>
              <HeaderContainer>
                <ProfileContainer>
                  <ProfileImage>
                    <NoPhoto />
                  </ProfileImage>
                  <ProfileDetails>
                    <NameContainer>
                      <Name>{business?.User.fullName}</Name>
                      {!editing && (
                        <>
                          {storedUser?.id === Number(id) && (
                            <EditInfoButton
                              type="button"
                              onClick={() => setEditing(true)}
                            >
                              <EditIcon />
                            </EditInfoButton>
                          )}
                        </>
                      )}
                    </NameContainer>
                  </ProfileDetails>
                </ProfileContainer>

                <TabsContainer>
                  <TabItem
                    active={toogleState === 1}
                    onClick={() => setToogleState(1)}
                  >
                    Sobre
                  </TabItem>
                  {storedUser?.id === Number(id) && (
                    <TabItem
                      active={toogleState === 2}
                      onClick={() => setToogleState(2)}
                    >
                      Publicar vaga
                    </TabItem>
                  )}
                  <TabItem
                    active={toogleState === 3}
                    onClick={() => setToogleState(3)}
                  >
                    Vagas publicadas
                  </TabItem>
                </TabsContainer>
              </HeaderContainer>
            </Container>
          </BackgroundImage>

          <ContentContainer>
            <TabContent active={toogleState === 1}>
              {editing ? (
                <form>
                  <Textarea
                    placeholder="Escreva algo sobre a empresa"
                    disabled={!editing}
                    rows={6}
                    {...register('bio')}
                  />

                  <InputContainer>
                    <Mail />
                    <Input
                      type="email"
                      placeholder="Contato"
                      disabled={!editing}
                      {...register('contact')}
                    />
                  </InputContainer>

                  <InputContainer>
                    <SocialMediaLogo src={websiteIcon} alt="Website" />
                    <Input
                      type="text"
                      placeholder="Website"
                      disabled={!editing}
                      {...register('website')}
                    />
                  </InputContainer>
                </form>
              ) : (
                <DataContainer>
                  <DataTitle>SOBRE</DataTitle>
                  <BigText style={{ marginBottom: '1.5rem' }}>
                    {business?.bio ? business?.bio : 'Sem dados cadastrados'}
                  </BigText>

                  <RowData>
                    <Mail />{' '}
                    <DataText>
                      {business?.contact ? business?.contact : 'Sem dados'}
                    </DataText>
                  </RowData>

                  <RowData>
                    <SocialMediaLogo src={websiteIcon} alt="Website" />{' '}
                    <DataText>
                      {business?.website ? business?.website : 'Sem dados'}
                    </DataText>
                  </RowData>
                </DataContainer>
              )}
            </TabContent>

            <TabContent active={toogleState === 2}>
              <form>
                <InputContainer>
                  <Input
                    type="text"
                    placeholder="Título da vaga"
                    {...registerJob('jobTitle')}
                  />
                </InputContainer>

                <Textarea
                  placeholder="Descreva a vaga aqui"
                  rows={6}
                  {...registerJob('jobDescription')}
                />

                <InputContainer>
                  <Input
                    type="text"
                    placeholder="Tipo da vaga"
                    {...registerJob('jobType')}
                  />
                </InputContainer>

                <InputContainer>
                  <Input
                    type="text"
                    placeholder="Local"
                    {...registerJob('location')}
                  />
                </InputContainer>

                <Select defaultValue="default" {...registerJob('category')}>
                  <option value="default" hidden>
                    Escolha uma opção
                  </option>
                  {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.title}
                    </option>
                  ))}
                </Select>

                <input
                  type="checkbox"
                  id="isRemote"
                  value="true"
                  {...registerJob('isRemote')}
                  style={{ marginBottom: '1rem' }}
                />
                <label
                  htmlFor="isRemote"
                  id="isRemote"
                  style={{ marginLeft: '0.2rem' }}
                >
                  {' '}
                  Emprego remoto?
                </label>

                <Button
                  text="Publicar"
                  type="submit"
                  buttonType="solid"
                  variant="caramel"
                  isLoading={isSubmittingJob}
                  disabled={isSubmittingJob}
                  onClick={handleSubmitJob(handlePublishJob)}
                />
              </form>
            </TabContent>

            <TabContent active={toogleState === 3}>
              <JobProfileContainer>
                {business?.Jobs.map((job) => (
                  <JobWrapper key={job.id}>
                    <JobProfileItem
                      job={job}
                      toogleModal={handleShowModal}
                      selectJob={handleSelectJob}
                    />
                    {storedUser?.id === Number(id) && (
                      <TrashIcon onClick={() => deleteJob(job.id)} />
                    )}
                  </JobWrapper>
                ))}
                {business?.Jobs.length === 0 && (
                  <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }} />
                )}
              </JobProfileContainer>
            </TabContent>

            {editing && toogleState !== 2 && toogleState !== 3 && (
              <SaveContainer>
                <Button
                  buttonType="outline"
                  variant="primary"
                  text="Cancelar"
                  type="button"
                  style={{ width: '200px' }}
                  onClick={() => {
                    loadBusinessData();
                    setEditing(false);
                  }}
                />
                <Button
                  buttonType="solid"
                  variant="primary"
                  text="Salvar"
                  type="submit"
                  onClick={handleSubmit(handleChangeData)}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  style={{ width: '200px', marginLeft: '1rem' }}
                />
              </SaveContainer>
            )}
          </ContentContainer>
        </>
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
