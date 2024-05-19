import nativeConfig from 'eslint-config/native.config.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [{ ignores: ['.expo/**', '!.storybook/**'] }, ...nativeConfig];

export default config;
