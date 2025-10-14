import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const FloatingButton = styled(motion.button)<{ shouldBounce: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  
  animation: ${({ shouldBounce }) => shouldBounce ? bounce : 'none'} 0.8s;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }

  .whatsapp-icon {
    color: white;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;

    .whatsapp-icon {
      font-size: 24px;
    }
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: #000000;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-left-color: #000000;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  showTooltip?: boolean;
  tooltipText?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '+6282111701599',
  message = 'Halo! Saya tertarik dengan program di S⭐R⭐Y Fitness Center. Bisakah Anda memberikan informasi lebih lanjut?',
  showTooltip = true,
  tooltipText = 'Chat dengan kami di WhatsApp'
}) => {
  const [shouldBounce, setShouldBounce] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Trigger bounce effect when user scrolls more than 100px from last position
      if (Math.abs(currentScrollY - lastScrollY) > 100) {
        setShouldBounce(true);
        setLastScrollY(currentScrollY);
        
        // Reset bounce animation after it completes
        setTimeout(() => {
          setShouldBounce(false);
        }, 800);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Initial bounce when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldBounce(true);
      setTimeout(() => setShouldBounce(false), 800);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <FloatingButton
        shouldBounce={shouldBounce}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltipState(true)}
        onMouseLeave={() => setShowTooltipState(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat dengan kami di WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
        
        {showTooltip && (
          <Tooltip
            initial={{ opacity: 0, x: 10 }}
            animate={{ 
              opacity: showTooltipState ? 1 : 0,
              x: showTooltipState ? 0 : 10
            }}
            transition={{ duration: 0.2 }}
          >
            {tooltipText}
          </Tooltip>
        )}
      </FloatingButton>
    </>
  );
};