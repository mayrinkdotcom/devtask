/* eslint-disable no-unused-vars */
import React from 'react';

import {
  Container,
  Details,
  BusinessLink,
  BusinessLogo,
  DetailContainer,
  Title,
  Description,
  JobLink,
  JobIcon,
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
  User: {
    fullName: string;
  };
  Category: {
    title: string;
  };
};

type JobProps = {
  job: JobParams;
  toogleModal: () => void;
  selectJob: (job: JobParams) => void;
};

export const JobItem: React.FC<JobProps> = ({
  job,
  toogleModal,
  selectJob,
}) => {
  const handleClick = () => {
    selectJob(job);
    toogleModal();
  };

  return (
    <>
      <Container>
        <Details>
          <BusinessLink to={`/business/profile/${job.userId}`}>
            <BusinessLogo />
          </BusinessLink>

          <DetailContainer>
            <Title>{job.title}</Title>
            <Description>{job.jobModality}</Description>
          </DetailContainer>
        </Details>

        <JobLink onClick={handleClick}>
          <JobIcon />
        </JobLink>
      </Container>
    </>
  );
};
