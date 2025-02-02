import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import { resolve } from 'node:path';
import turboConfig from 'eslint-config-turbo/flat';
import tseslint from 'typescript-eslint';
import testingLibrary from 'eslint-plugin-testing-library';

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.Config[]} */
const config = tseslint.config(
  { ignores: ['node_modules/**', '.turbo/**', 'coverage/**', '.storybook/**'] },
  eslintConfigPrettier,
  ...turboConfig,
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
      parser: tseslint.parser,
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    ...testingLibrary.configs['flat/react'],
    rules: {
      'testing-library/render-result-naming-convention': 'off',
    },
  },
);

export default config;
