import React from 'react';
import styled from 'styled-components';
import { FaDumbbell, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container } from '../common';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['3xl']} 0 ${({ theme }) => theme.spacing.xl};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FooterSection = styled.div``;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gray.dark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const FooterTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const FooterList = styled.ul`
  list-style: none;
`;

const FooterListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.gray.medium};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterBottom = styled.div`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.dark};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray.medium};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const Copyright = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`;

const quickLinks = [
  { href: '#about', label: 'Why Join Us' },
  { href: '#coaches', label: 'Coaches' },
  { href: '#contact', label: 'Contact Us' },
  { href: '#plans', label: 'Pricing' },
];

const services = [
  { href: '#', label: 'Personal Training' },
  { href: '#', label: 'Group Classes' },
  { href: '#', label: 'Nutrition Plans' },
  { href: '#', label: 'Recovery Therapy' },
];

const support = [
  { href: '#contact', label: 'Contact Us' },
  { href: '#', label: 'FAQ' },
  { href: '#', label: 'Membership' },
  { href: '#', label: 'Support' },
];

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterSection>
            <Logo>
              <FaDumbbell />
              <span>S⭐R⭐Y FITNESS</span>
            </Logo>
            <FooterDescription>
              Transform your body and mind with S⭐R⭐Y FITNESS state-of-the-art facilities, 
              expert trainers, and supportive community. Your fitness journey starts here.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterList>
              {quickLinks.map((link) => (
                <FooterListItem key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Services</FooterTitle>
            <FooterList>
              {services.map((service) => (
                <FooterListItem key={service.href}>
                  <FooterLink href={service.href}>{service.label}</FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Support</FooterTitle>
            <FooterList>
              {support.map((item) => (
                <FooterListItem key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2025 S 🌟 R 🌟 Y FITNESS. All rights reserved.
          </Copyright>
          <FooterBottomLinks>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </FooterBottomLinks>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};