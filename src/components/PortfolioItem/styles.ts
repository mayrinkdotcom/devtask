import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';

export const Container = styled(Link)`
  width: 100%;
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  border: 1px solid #bbbbbb;
  background-color: #fefefe;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const ProfileImage = styled.div`
  font-size: 0;
  width: 70px;
  height: 70px;
  background-color: #d6d6d6;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 390px) {
    width: 60px;
    height: 60px;
  }
`;

export const NoPhoto = styled(BiUser)`
  font-size: 2.2rem;
  color: #777777;
`;

export const Details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Name = styled.h2`
  font-weight: 600;
  margin-bottom: -0.2rem;

  @media (max-width: 390px) {
    font-size: 1.3rem;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;

  @media (max-width: 390px) {
    font-size: 1rem;
  }
`;

export const Bio = styled.p`
  margin-top: 1rem;
  line-height: 1.4rem;
`;
