import React from 'react';

import {
  Container,
  ModalCloseButton,
  ModalContent,
  Title,
  InputContainer,
  Input,
  Textarea,
} from './styles';

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
  User?: {
    fullName: string;
  };
  Category?: {
    title: string;
  };
};

type ModalProps = {
  modalIsOpen: boolean;
  toggleModalFunction: () => void;
  job?: JobParams;
};

export const JobModal: React.FC<ModalProps> = ({
  modalIsOpen,
  toggleModalFunction,
  job,
}) => (
  <Container modalIsOpen={modalIsOpen}>
    <ModalContent>
      <ModalCloseButton type="button" onClick={toggleModalFunction} />
      <Title>Detalhes da Vaga</Title>

      <InputContainer>
        <Input value={job?.title || ''} disabled />
      </InputContainer>

      <Textarea value={job?.description || ''} rows={6} disabled />

      <InputContainer>
        <Input value={job?.location || ''} disabled />
      </InputContainer>

      <InputContainer>
        <Input value={job?.jobModality || ''} disabled />
      </InputContainer>
    </ModalContent>
  </Container>
);
