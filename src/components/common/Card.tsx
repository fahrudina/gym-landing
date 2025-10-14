import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
  border?: boolean;
  hover?: boolean;
  className?: string;
}

const StyledCard = styled(motion.div)<CardProps>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;
  
  ${({ padding, theme }) => {
    switch (padding) {
      case 'sm':
        return `padding: ${theme.spacing.md};`;
      case 'lg':
        return `padding: ${theme.spacing['2xl']};`;
      default:
        return `padding: ${theme.spacing.xl};`;
    }
  }}

  ${({ shadow, theme }) => shadow && `
    box-shadow: ${theme.shadows.md};
  `}

  ${({ border, theme }) => border && `
    border: 1px solid ${theme.colors.gray.light};
  `}

  ${({ hover, theme }) => hover && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.xl};
    }
  `}
`;

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  shadow = true,
  border = false,
  hover = false,
  className,
  ...props
}) => {
  return (
    <StyledCard
      padding={padding}
      shadow={shadow}
      border={border}
      hover={hover}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </StyledCard>
  );
};