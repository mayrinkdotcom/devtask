import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: var(--blue-100);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconImage = styled.img`
  pointer-events: none;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 1rem;
`;

export const Content = styled.p`
  font-size: 1.1rem;
  margin-top: 0.4rem;
  text-align: center;
  line-height: 24px;
  max-width: 254px;
`;
