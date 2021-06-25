import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;
`;

export const Card = styled.main`
  width: 100%;
  max-width: 640px;

  margin-top: 12rem;

  background: var(--white);
  box-shadow: 10px 40px 50px -20px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 4rem;

  form {
    width: 100%;
  }

  @media (max-width: 640px) {
    padding: 2.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  margin-top: -1rem;
`;

export const SignInContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const SignInButton = styled(Link)`
  text-decoration: underline;
  font-weight: 500;
`;

export const FooterSection = styled.div`
  margin-top: -4rem;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;
