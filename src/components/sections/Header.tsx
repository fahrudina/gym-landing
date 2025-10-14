import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa';
import { Container } from '../common';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  
  .brand-text {
    background: ${({ theme }) => theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const NavLinks = styled.ul`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.xl};
    list-style: none;
  }
`;

const NavLink = styled.li`
  a {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  cursor: pointer;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
`;

const MobileNavLink = styled.li`
  a {
    display: block;
    padding: ${({ theme }) => theme.spacing.sm} 0;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const RegisterButton = styled.button`
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#why-join-us', label: 'Why Join Us?' },
  { href: '#plans', label: 'Plans' },
  { href: '#coaches', label: 'Coaches' },
  { href: '#visit-our-gym', label: 'Visit Our Gym' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <Logo>
            <FaDumbbell />
            <span className="brand-text">STAMINA FITNESS</span>
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.href}>
                <a href={item.href}>{item.label}</a>
              </NavLink>
            ))}
            <li>
              <RegisterButton>Register</RegisterButton>
            </li>
          </NavLinks>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </Nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileNavLinks>
                {navItems.map((item) => (
                  <MobileNavLink key={item.href}>
                    <a href={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </a>
                  </MobileNavLink>
                ))}
              </MobileNavLinks>
            </MobileMenu>
          )}
        </AnimatePresence>
      </Container>
    </HeaderWrapper>
  );
};