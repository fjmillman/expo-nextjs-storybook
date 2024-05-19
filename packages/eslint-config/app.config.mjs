import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import { dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

import baseConfig from './base.config.mjs';

const compat = new FlatCompat({
  baseDirectory: dirname(pathToFileURL(import.meta.url).pathname),
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  js.configs.recommended,
  ...compat.extends('plugin:import/recommended'),
  ...baseConfig,
  ...compat.extends('plugin:storybook/recommended'),
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
];

export default config;
