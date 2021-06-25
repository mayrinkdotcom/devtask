import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArchive } from 'react-icons/fi';
import { BsBuilding } from 'react-icons/bs';

export const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  border: 1px solid #bbbbbb;
  background-color: #fefefe;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-bottom: 1rem;

  @media (max-width: 480px) {
    padding: 1.2rem 1.2rem;
  }

  @media (max-width: 400px) {
    padding: 0.8rem 0.8rem;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const BusinessLink = styled(Link)`
  font-size: 0;
  width: 70px;
  height: 70px;
  background-color: #d6d6d6;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

export const BusinessLogo = styled(BsBuilding)`
  font-size: 2rem;
  color: #777777;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const DetailContainer = styled.div`
  margin-left: 2rem;

  @media (max-width: 480px) {
    margin-left: 1rem;
  }

  @media (max-width: 400px) {
    margin-left: 0.8rem;
  }
`;

export const Title = styled.h2`
  font-weight: 500;

  @media (max-width: 480px) {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: -0.2rem;
  }
`;

export const Description = styled.span``;

export const JobLink = styled.div`
  padding: 1rem;
  background-color: var(--blue-500);
  border-radius: 50%;
  font-size: 0;

  @media (max-width: 480px) {
    padding: 0.8rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const JobIcon = styled(FiArchive)`
  font-size: 1.5rem;
  color: var(--white);

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
