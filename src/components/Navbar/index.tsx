import React, { useCallback, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Nav,
  NavContainer,
  NavLeft,
  NavRight,
  Logo,
  NavLink,
  MenuButton,
  MenuIcon,
  Sidebar,
  SidebarContainer,
  SidebarCloseButton,
  SidebarLink,
  SmallContainer,
  SidebarLoginButton,
  SidebarSignOutButton,
  LoginButton,
  SignOutButton,
  SidebarWrapper,
} from './styles';

import { useAuth } from '../../contexts/auth';

import devtaskLogo from '../../assets/images/logo-devtask2.svg';

type NavbarProps = {
  solid?: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({ solid = false }) => {
  const { signOut, user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toogleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleChangeBackgroundColor = () => {
    if (window.scrollY <= 0) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();

      window.location.reload();

      toast.success('Logout realizado com sucesso.');
    } catch (err) {
      toast.error('Falha ao realizar logout.');
    }
  }, [signOut]);

  useEffect(() => {
    window.addEventListener('scroll', handleChangeBackgroundColor);

    return () => {
      window.removeEventListener('scroll', handleChangeBackgroundColor);
    };
  }, []);

  return (
    <>
      <Nav scrolled={scrolled || solid}>
        <NavContainer>
          <NavLeft>
            <Link to="/">
              <Logo src={devtaskLogo} alt="DevTask" />
            </Link>

            <NavLink to="/portfolio">Portifólio</NavLink>
            <NavLink to="/jobs">Vagas</NavLink>
          </NavLeft>

          <NavRight>
            {user ? (
              <>
                <NavLink to={`/${user?.role}/profile/${user?.id}`}>
                  Meu perfil
                </NavLink>
                <SignOutButton onClick={handleSignOut}>Sair</SignOutButton>
              </>
            ) : (
              <>
                <NavLink to="/register">Criar conta</NavLink>
                <LoginButton to="/login">Entrar</LoginButton>
              </>
            )}

            <MenuButton type="button" onClick={toogleSideBar}>
              <MenuIcon />
            </MenuButton>
          </NavRight>
        </NavContainer>
      </Nav>

      {showSidebar && (
        <SidebarWrapper>
          <Sidebar>
            <SidebarContainer>
              <SidebarCloseButton onClick={toogleSideBar} />

              <SidebarLink to="/about">Sobre nós</SidebarLink>
              <SidebarLink to="/portfolio">Portifólio</SidebarLink>
              <SidebarLink to="/jobs">Vagas</SidebarLink>

              <SmallContainer>
                {user ? (
                  <>
                    <SidebarLink to={`/${user?.role}/profile/${user?.id}`}>
                      Meu perfil
                    </SidebarLink>
                    <SidebarSignOutButton onClick={handleSignOut}>
                      Sair
                    </SidebarSignOutButton>
                  </>
                ) : (
                  <>
                    <SidebarLink to="/register">Criar conta</SidebarLink>
                    <SidebarLoginButton to="/login">Entrar</SidebarLoginButton>
                  </>
                )}
              </SmallContainer>
            </SidebarContainer>
          </Sidebar>
        </SidebarWrapper>
      )}
    </>
  );
};
