import { Config } from 'tailwindcss';

const theme = {
  extend: {
    colors: {
      transparent: 'transparent',
      text: '#212529',
      primary: '#FD0425',
      secondary: '#F83660',
      accent: '#E3ACBA',
      success: '#28a745',
      error: '#dc3545',
      light: '#E7EAEE',
      neutral: '#B8C5CD',
      dark: '#2D2327',
    },
  },
} satisfies Config['theme'];

export default theme;
