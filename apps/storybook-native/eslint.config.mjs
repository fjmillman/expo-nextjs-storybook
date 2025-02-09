import baseConfig from '@/eslint-config/base';
import reactConfig from '@/eslint-config/react';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['.expo/**', '!.storybook/**', '.storybook/storybook.requires.ts'],
  },
  ...baseConfig,
  ...reactConfig,
];

export default config;
