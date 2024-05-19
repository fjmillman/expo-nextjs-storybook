import rootConfig from 'eslint-config/root.config.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [{ ignores: ['apps/**', 'packages/**'] }, ...rootConfig];

export default config;
