import appConfig from 'eslint-config/app.config.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [{ ignores: ['rnw-overrides.d.ts'] }, ...appConfig];

export default config;
