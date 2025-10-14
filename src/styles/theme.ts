export const theme = {
  colors: {
    primary: '#4A5FBF', // Blue from the STAMINA FITNESS logo
    secondary: '#2D1B7A', // Darker purple/blue
    accent: '#FFD700', // Gold/yellow accent
    white: '#FFFFFF',
    dark: '#1A1B3F', // Dark blue background
    lightBlue: '#6B7FE8', // Light blue variation
    yellow: '#F7D716', // Bright yellow from design
    gray: {
      light: '#F5F5F5',
      medium: '#CCCCCC',
      dark: '#666666',
    },
    black: '#000000',
    gradient: {
      primary: 'linear-gradient(135deg, #4A5FBF 0%, #2D1B7A 100%)',
      dark: 'linear-gradient(135deg, #1A1B3F 0%, #2D1B7A 100%)',
      hero: 'linear-gradient(rgba(26, 27, 63, 0.8), rgba(45, 27, 122, 0.8))',
    }
  },
  typography: {
    fontFamily: {
      primary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      secondary: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  }
};

export type Theme = typeof theme;