import appConfig from 'eslint-config/app.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  { ignores: ['storybook-static/**', '!.storybook/**'] },
  ...appConfig,
];

export default config;
