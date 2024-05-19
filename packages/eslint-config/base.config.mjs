import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import * as parser from '@typescript-eslint/parser';
import globals from 'globals';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

const compat = new FlatCompat({
  baseDirectory: dirname(pathToFileURL(import.meta.url).pathname),
});

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  { ignores: ['node_modules/**', '.turbo/**', 'coverage/**', '.storybook/**'] },
  eslintConfigPrettier,
  ...compat.extends('turbo'),
  {
    files: ['*.config.js', 'tailwind.config.ts'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    languageOptions: {
      globals: {
        React: true,
        JSX: true,
      },
      parserOptions: {
        project,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import/order': [
        'warn',
        {
          pathGroups: [
            {
              pattern: '@/**',
              group: 'external',
              position: 'after',
            },
          ],
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'index', 'sibling'],
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project,
        },
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
    },
  },
];

export default config;
