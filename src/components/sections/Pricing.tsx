import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Card } from '../common';
import { MembershipPlan } from '../../types';

const PricingSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.gradient.dark};
  
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
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;



const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
    max-width: 500px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
`;

const PricingCard = styled(Card)<{ popular?: boolean }>`
  position: relative;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 100px;
    padding: ${({ theme }) => theme.spacing.md};
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;



const PlanName = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const PlanPrice = styled.div`
  margin-bottom: 0;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1;
  opacity: 0.9;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;



const plans: MembershipPlan[] = [
  {
    id: '1',
    name: 'Annual',
    price: 0,
    duration: 'Membership',
    features: [],
  },
  {
    id: '2',
    name: '7',
    price: 0,
    duration: 'Days Weekly Rate',
    features: [],
  },
  {
    id: '3',
    name: '1',
    price: 0,
    duration: 'Month Monthly Rate',
    features: [],
  },
  {
    id: '4',
    name: '6',
    price: 0,
    duration: 'Months Biannual Rate',
    features: [],
  },
  {
    id: '5',
    name: '1',
    price: 0,
    duration: 'Year Annual Rate',
    features: [],
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

export const Pricing: React.FC = () => {
  return (
    <PricingSection id="pricing">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            JOIN OUR MEMBERSHIP<br />
            Our Plan:
          </SectionTitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <PricingGrid>
            {plans.map((plan) => (
              <motion.div key={plan.id} variants={cardVariants}>
                <PricingCard>
                  <PlanName>{plan.name}</PlanName>
                  <PlanPrice>
                    <Price>{plan.duration}</Price>
                  </PlanPrice>
                </PricingCard>
              </motion.div>
            ))}
          </PricingGrid>
        </motion.div>
      </Container>
    </PricingSection>
  );
};