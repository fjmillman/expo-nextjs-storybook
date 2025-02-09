import baseConfig from '@/eslint-config/base';
import reactConfig from '@/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
const config = [
  {
    ignores: ['.expo/**', 'expo-plugins/**'],
  },
  ...baseConfig,
  ...reactConfig,
];

export default config;
