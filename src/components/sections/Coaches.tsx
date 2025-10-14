import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Card } from '../common';

const CoachesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  }
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const CoachesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 400px;
  margin: 0 auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 900px;
  }
`;

const CoachCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: #E8E8F0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const CoachImage = styled.div`
  width: 120px;
  height: 120px;
  background: ${({ theme }) => theme.colors.gray.medium};
  border-radius: 50%;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100px;
    height: 100px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const CoachName = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const coaches = [
  {
    id: '1',
    name: 'Coach John',
    image: 'coach-1.jpg',
  },
  {
    id: '2',
    name: 'Coach Marcel',
    image: 'coach-2.jpg',
  },
  {
    id: '3',
    name: 'Coach Angel',
    image: 'coach-3.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Coaches: React.FC = () => {
  return (
    <CoachesSection id="coaches">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          COACHES
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CoachesGrid>
            {coaches.map((coach) => (
              <motion.div key={coach.id} variants={cardVariants}>
                <CoachCard>
                  <CoachImage>
                    Photo
                  </CoachImage>
                  <CoachName>{coach.name}</CoachName>
                </CoachCard>
              </motion.div>
            ))}
          </CoachesGrid>
        </motion.div>
      </Container>
    </CoachesSection>
  );
};