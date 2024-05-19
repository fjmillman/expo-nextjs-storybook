import theme from 'app/design-system/tailwind/theme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    ...theme,
  },
  plugins: [],
} satisfies Config;
