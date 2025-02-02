import js from '@eslint/js';
import globals from 'globals';
import { flatConfigs } from 'eslint-plugin-import';
import sb from 'eslint-plugin-storybook';

import baseConfig from './base.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  js.configs.recommended,
  flatConfigs.recommended,
  ...baseConfig,
  ...sb.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
];

export default config;
