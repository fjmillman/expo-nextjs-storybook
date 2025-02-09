import type { Config } from 'tailwindcss';

import base from './base';

const config = {
  content: base.content,
  presets: [base],
  theme: {},
} satisfies Config;

export default config;
