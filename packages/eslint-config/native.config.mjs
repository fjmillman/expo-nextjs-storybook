import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

import baseConfig from './base.config.mjs';

const compat = new FlatCompat({
  baseDirectory: dirname(pathToFileURL(import.meta.url).pathname),
});

/** @type {import('eslint').Linter.Config[]} */
const config = [...baseConfig, ...compat.extends('expo')];

export default config;
