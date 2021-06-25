import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  border: 1px solid #bbbbbb;
  background-color: #fefefe;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 1rem;
`;

export const Details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 600;
  margin-bottom: -0.2rem;
`;

export const Category = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
`;

export const Description = styled.p`
  margin-top: 1rem;
  line-height: 1.4rem;
`;
