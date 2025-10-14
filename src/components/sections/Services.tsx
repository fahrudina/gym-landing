import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaHeart, FaClock } from 'react-icons/fa';
import { Container, Card } from '../common';
import { GymService } from '../../types';

const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.secondary};
`;



const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ServiceCard = styled(Card)`
  text-align: center;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ServiceIcon = styled.div`
  width: 120px;
  height: 120px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.white};
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray.dark};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const services: GymService[] = [
  {
    id: '1',
    title: '24/7',
    description: 'Chat',
    icon: 'FaClock',
  },
  {
    id: '2',
    title: '1on1',
    description: 'Coaching',
    icon: 'FaUsers',
  },
  {
    id: '3',
    title: 'High',
    description: 'Safety',
    icon: 'FaHeart',
  },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaDumbbell':
      return <FaDumbbell />;
    case 'FaUsers':
      return <FaUsers />;
    case 'FaHeart':
      return <FaHeart />;
    case 'FaClock':
      return <FaClock />;
    default:
      return <FaDumbbell />;
  }
};

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

export const Services: React.FC = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What we offer:
          </SectionTitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesGrid>
            {services.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
                <ServiceCard hover>
                  <ServiceIcon>
                    {getIcon(service.icon)}
                  </ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              </motion.div>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </ServicesSection>
  );
};