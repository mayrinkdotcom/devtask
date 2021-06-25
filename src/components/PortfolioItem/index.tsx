import React from 'react';

import {
  Container,
  DetailContainer,
  ProfileImage,
  NoPhoto,
  Details,
  Name,
  Title,
  Bio,
} from './styles';

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

type PorfolioItemProps = {
  project: ProjectData;
};

export const PortfolioItem: React.FC<PorfolioItemProps> = ({ project }) => (
  <Container to={`/dev/profile/${project.User.id}`}>
    <DetailContainer>
      <ProfileImage>
        <NoPhoto />
      </ProfileImage>

      <Details>
        <Name>{project.title ? project.title : 'Sem dados'}</Name>
        <Title>
          {project.Category.title ? project.Category.title : 'Sem dados'}
        </Title>
      </Details>
    </DetailContainer>

    <Bio>
      {project.User.fullName ? project.User.fullName : 'Sem dados para exibir'}
    </Bio>
  </Container>
);
