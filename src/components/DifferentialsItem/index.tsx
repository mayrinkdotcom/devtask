/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';

import { Container, Icon, IconImage, Title, Content } from './styles';

type DifferentialItemData = {
  differential: {
    id: number;
    iconName: string;
    title: string;
    content: string;
  };
};

export const DifferentialsItem: React.FC<DifferentialItemData> = ({
  differential: { iconName, title, content },
}) => {
  const image = require(`../../assets/icons/${iconName}.svg`);

  return (
    <Container>
      <Icon>
        <IconImage src={image.default} />
      </Icon>

      <Title>{title}</Title>

      <Content>{content}</Content>
    </Container>
  );
};
