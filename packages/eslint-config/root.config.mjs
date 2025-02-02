import js from '@eslint/js';
import globals from 'globals';
import { flatConfigs } from 'eslint-plugin-import';

import baseConfig from './base.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  js.configs.recommended,
  flatConfigs.recommended,
  ...baseConfig,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];

export default config;
