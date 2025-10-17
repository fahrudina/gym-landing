import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../common';

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.gray.light};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
    text-align: center;
  }
`;

const AboutText = styled.div``;

const AboutTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const AboutDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 400px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
    order: -1;
  }
`;

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutContent>
          <AboutText>
            <AboutTitle
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              ABOUT<br />
              <span style={{ color: '#4A5FBF', fontWeight: 'bold' }}>
                S<span style={{ fontSize: '0.45em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>R<span style={{ fontSize: '0.45em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>Y GYM<br />
                FOR MAN & WOMAN
              </span>
            </AboutTitle>
            
            <AboutDescription
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              S<span style={{ fontSize: '0.45em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>R<span style={{ fontSize: '0.45em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>Y Gym Fitness Center provides premium training 
              and conditioning for members who want to improve and 
              transform their body with programs depend on the body 
              template of each person program and training!
            </AboutDescription>
          </AboutText>
          
          <AboutImage
            variants={animationVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Gym Equipment
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};