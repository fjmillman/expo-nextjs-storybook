// This is a dummy tailwind config file used to provide intellisense.
// To configure your global tailwind settings, modify the imported theme object.

import type { Config } from 'tailwindcss';

import theme from './design-system/tailwind/theme';

export default {
  content: ['./**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...theme,
  },
} satisfies Config;
