import type { Config } from 'tailwindcss';

import baseConfig from '@/tailwind-config/base';

export default {
  content: [...baseConfig.content, './**/*.{ts,tsx}'],
  presets: [baseConfig],
} satisfies Config;
