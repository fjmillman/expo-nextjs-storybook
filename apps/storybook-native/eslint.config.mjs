import nativeConfig from 'eslint-config/native.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
const config = [{ ignores: ['.expo/**', '!.storybook/**'] }, ...nativeConfig];

export default config;
