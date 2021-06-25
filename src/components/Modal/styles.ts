import styled from 'styled-components';
import { BsX } from 'react-icons/bs';

export const Container = styled.div<{ modalIsOpen: boolean }>`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background-color: var(--modal-background);
  opacity: ${(props) => (props.modalIsOpen ? 1 : 0)};
  visibility: ${(props) => (props.modalIsOpen ? 'visible' : 'hidden')};
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 740px) {
    padding: 1rem 1rem;
  }

  z-index: 100;
`;

export const ModalCloseButton = styled(BsX)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalContent = styled.section`
  position: relative;
  max-width: 548px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  padding: 2.8rem;

  @media (max-width: 880px) {
    padding: 2rem;
  }

  @media (max-width: 740px) {
    padding: 1.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  form {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const ModalTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 1.5rem;
`;

export const ModalText = styled.p`
  margin-top: -1rem;
`;
