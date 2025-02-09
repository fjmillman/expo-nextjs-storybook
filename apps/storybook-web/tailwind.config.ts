import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import webConfig from '@/tailwind-config/web';

export default {
  content: [...webConfig.content, '../../packages/ui/**/*.{ts,tsx}'],
  presets: [webConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
