import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Container, Button } from '../common';

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.gradient.dark};
  color: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing['4xl']};
  }
`;

const ContactInfo = styled.div``;

const SectionTitle = styled(motion.h2)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

const SectionDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray.medium};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const ContactValue = styled.p`
  color: ${({ theme }) => theme.colors.gray.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const ContactForm = styled(motion.form)`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ClearButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.medium};
  }
`;



const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'staminagym@gym.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+911-848-500-5555',
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

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <ContactSection id="contact">
      <Container>
        <ContactContent>
          <ContactInfo>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              VISIT<br />OUR GYM
            </SectionTitle>
            
            <SectionDescription
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Address: 1278 ST. GENERAL<br />
              MATHA VILLAS AG.<br />
              6125 PATALIPUTRA CITY
            </SectionDescription>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactList>
                {contactItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ContactItem>
                      <ContactIcon>
                        {item.icon}
                      </ContactIcon>
                      <ContactDetails>
                        <ContactLabel>{item.label}</ContactLabel>
                        <ContactValue>
                          {item.value.split('\\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.value.split('\\n').length - 1 && <br />}
                            </span>
                          ))}
                        </ContactValue>
                      </ContactDetails>
                    </ContactItem>
                  </motion.div>
                ))}
              </ContactList>
            </motion.div>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormTitle>REGISTER</FormTitle>
            
            <FormGroup>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <FormInput
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <FormInput
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
            </FormGroup>
            
            <Button type="submit" fullWidth size="lg">
              Submit
            </Button>
            
            <ClearButton type="button" fullWidth size="lg" variant="outline">
              Clear Entries
            </ClearButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};