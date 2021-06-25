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

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border-radius: 16px;
  outline: none;
  padding: 0.8rem 1rem;
  margin-bottom: 0.4rem;

  border: 1px solid #bbbbbb;
  background-color: #fefefe;

  &:hover {
    border-color: #858585;
  }

  &:focus {
    border-color: var(--caramel-400);
  }
`;

export const Select = styled.select`
  width: 100%;
  outline: none;
  background-color: #fefefe;
  border: 1.5px solid #bbbbbb;
  border-radius: 16px;
  padding: 12px 10px;
  margin-bottom: 0.8rem;
`;
