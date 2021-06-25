import React from 'react';

import { Container, Details, Title, Category, Description } from './styles';

type Work = {
  id: number;
  devId: number;
  title: string;
  description: string;
  User: {
    id: number;
    fullName: string;
  };
  Category: {
    id: number;
    title: string;
  };
};

type WorkItemProps = {
  work: Work;
};

export const WorkItem: React.FC<WorkItemProps> = ({ work, children }) => (
  <Container>
    {children}
    <Details>
      <Title>{work.title}</Title>
      <Category>{work.Category.title}</Category>
    </Details>

    <Description>{work.description}</Description>
  </Container>
);
