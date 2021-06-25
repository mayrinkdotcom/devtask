/* eslint-disable no-unused-vars */
import React from 'react';

import { JobContainer, JobTitle, JobText } from './styles';

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

type JobProps = {
  job: JobParams;
  toogleModal: () => void;
  selectJob: (job: JobParams) => void;
};

export const JobProfileItem: React.FC<JobProps> = ({
  job,
  selectJob,
  toogleModal,
}) => {
  const handleClick = () => {
    selectJob(job);
    toogleModal();
  };

  return (
    <JobContainer onClick={handleClick}>
      <JobTitle>{job.title}</JobTitle>
      <JobText>{job.jobModality}</JobText>
    </JobContainer>
  );
};
