import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../common';

const HeroSection = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.gradient.hero}, url('/gym-hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradient.hero};
    z-index: 1;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 100px 20px 40px;
    min-height: auto;
    background-attachment: scroll;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
    text-align: center;
  }
`;

const TextContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  opacity: 0.9;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const LearnMoreButton = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    transform: translateY(-2px);
  }
`;

const HeroLogo = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const LogoContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }
`;

const SraryLogo = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  
  .logo-main {
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    
    .star {
      font-size: 0.6em;
      display: inline-block;
      vertical-align: middle;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }
  
  .logo-sub {
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.yellow};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;



const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <Container>
        <HeroContent>
          <TextContent>
            <HeroTitle
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Start a better<br />
              shape of you!<br />
              <span className="highlight">Come Join Us!</span>
            </HeroTitle>
            
            <HeroSubtitle
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your body and mind with our comprehensive fitness programs
              designed for both men and women. Join our community of fitness enthusiasts.
            </HeroSubtitle>
            
            <LearnMoreButton
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Learn More
            </LearnMoreButton>
          </TextContent>
          
          <HeroLogo
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <LogoContainer>
              <SraryLogo>
                <div className="logo-main">
                  S<span className="star">⭐</span>R<span className="star">⭐</span>Y
                </div>
                <div className="logo-sub">FITNESS CENTRE</div>
              </SraryLogo>
            </LogoContainer>
          </HeroLogo>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};