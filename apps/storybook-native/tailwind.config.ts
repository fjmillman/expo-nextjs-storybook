import type { Config } from 'tailwindcss';

import nativeConfig from '@/tailwind-config/native';

export default {
  content: [...nativeConfig.content, '../../packages/ui/**/*.{ts,tsx}'],
  presets: [nativeConfig],
} satisfies Config;
