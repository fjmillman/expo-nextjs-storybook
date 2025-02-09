import baseConfig from '@/eslint-config/base';
import reactConfig from '@/eslint-config/react';
import webConfig from '@/eslint-config/web';

/** @type {import('typescript-eslint').Config} */
const config = [
  {
    ignores: ['.next/**', '!.storybook/**'],
  },
  ...baseConfig,
  ...reactConfig,
  ...webConfig,
];

export default config;
