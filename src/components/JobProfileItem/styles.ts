import styled from 'styled-components';

export const JobContainer = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 1rem 1.2rem;
  border: 1px solid #bbbbbb;
  background-color: #fefefe;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const JobTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #4e4e4e;
`;

export const JobText = styled.p``;
