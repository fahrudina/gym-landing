import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Header } from './Header';
import { theme } from '../../styles/theme';

describe('Header Component', () => {
  test('renders S⭐R⭐Y text with proper star styling', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    
    // Check that the header renders
    expect(container).toBeInTheDocument();
    
    // Check that stars have the correct styling
    const stars = container.querySelectorAll('.star');
    expect(stars.length).toBeGreaterThan(0);
    
    stars.forEach((star) => {
      const styles = window.getComputedStyle(star);
      expect(styles.fontSize).toBe('0.45em');
      expect(styles.verticalAlign).toBe('middle');
      expect(styles.display).toBe('inline-block');
    });
  });
});
