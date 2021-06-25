import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { BsX } from 'react-icons/bs';

export const Nav = styled.nav<{ scrolled: boolean }>`
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.scrolled ? '#ffffff' : 'transparent')};
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;

  -webkit-transition: all 0.1s ease-in;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 62px;
  margin-right: 2rem;
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  color: var(--placeholder);
  margin-right: 2.5rem;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuButton = styled.button`
  @media (min-width: 990px) {
    display: none;
  }

  font-size: 0;
  border: none;
  background-color: transparent;
`;

export const MenuIcon = styled(FiMenu)`
  font-size: 1.8rem;
  color: var(--dark-purple);
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background-color: var(--modal-background);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;
`;

export const Sidebar = styled.aside`
  @media (min-width: 990px) {
    display: none;
  }

  width: 340px;
  background-color: #fefefe;
  height: 100vh;
  position: fixed;

  right: 0;
  z-index: 99999999;

  @media (max-width: 540px) {
    width: 70%;
  }
`;

export const SidebarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  padding: 2rem;
  padding-top: 4rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const SidebarCloseButton = styled(BsX)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SidebarLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--placeholder);
  margin-bottom: 0.5rem;
`;

export const SmallContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const LoginButton = styled(Link)`
  width: 140px;
  height: 48px;
  border-radius: 30px;
  background-color: var(--yellow);

  color: var(--white);
  border: none;

  font-size: 1.1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 1px solid var(--dark-yellow);
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const SignOutButton = styled.button`
  width: 140px;
  height: 48px;
  border-radius: 30px;
  background-color: var(--yellow);

  color: var(--white);
  border: none;

  font-size: 1.1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 1px solid var(--dark-yellow);
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const SidebarLoginButton = styled(Link)`
  width: 140px;
  height: 48px;
  border-radius: 30px;
  background-color: var(--yellow);

  color: var(--white);
  border: none;

  font-size: 1.1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 1px solid var(--dark-yellow);
  }
`;

export const SidebarSignOutButton = styled.button`
  width: 140px;
  height: 48px;
  border-radius: 1rem;
  border-radius: 30px;
  background-color: var(--yellow);

  color: var(--white);
  border: none;

  font-size: 1.1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 1px solid var(--caramel-800);
  }
`;
