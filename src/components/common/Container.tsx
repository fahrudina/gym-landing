import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  center?: boolean;
  children: React.ReactNode;
}

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  
  ${({ maxWidth }) => {
    switch (maxWidth) {
      case 'sm':
        return 'max-width: 640px;';
      case 'md':
        return 'max-width: 768px;';
      case 'lg':
        return 'max-width: 1024px;';
      case 'xl':
        return 'max-width: 1280px;';
      case 'full':
        return 'max-width: 100%;';
      default:
        return 'max-width: 1200px;';
    }
  }}

  ${({ padding, theme }) => padding && `
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      padding-left: ${theme.spacing.xl};
      padding-right: ${theme.spacing.xl};
    }
  `}

  ${({ center }) => center && `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Container: React.FC<ContainerProps> = ({
  maxWidth = 'lg',
  padding = true,
  center = false,
  children,
  ...props
}) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      padding={padding}
      center={center}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};