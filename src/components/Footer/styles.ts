import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  padding: 2.5rem 0;
  margin-top: 10rem;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }
`;

export const FooterItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 840px) {
    align-items: center;
  }
`;

export const FooterTitle = styled.h3`
  font-weight: 600;
  color: var(--blue-800);
  margin-bottom: 1rem;
  margin-top: 1.4rem;

  @media (max-width: 840px) {
    align-items: center;
  }
`;

export const FooterLink = styled(Link)`
  margin-bottom: 0.2rem;
  color: #575757;
`;

export const FooterContent = styled.p`
  max-width: 200px;
  color: #575757;
  margin-bottom: 4rem;

  @media (max-width: 840px) {
    width: 400px;
    text-align: center;
  }
`;

export const FooterText = styled.p`
  margin-bottom: 0.2rem;
  color: #575757;
`;

export const FooterImage = styled.img``;

export const FooterCopyright = styled.span`
  justify-self: flex-end;
`;

export const SocialMediaLink = styled.a`
  margin-bottom: 0.4rem;
  color: #575757;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 0.8rem;
  }
`;
