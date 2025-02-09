import expoPlugin from 'eslint-plugin-expo';

/** @type {Awaited<import('typescript-eslint').Config>} */
const config = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      expo: expoPlugin,
    },
    rules: {
      ...expoPlugin.configs.recommended.rules,
    },
  },
];

export default config;
