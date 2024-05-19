/* eslint-env node */
const { generate } = require('@storybook/react-native/scripts/generate');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

generate({
  configPath: path.resolve(__dirname, './.storybook'),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push('mjs');

module.exports = withNativeWind(config, {
  projectRoot: __dirname,
  inlineRem: false,
  input: '../native/app/global.css',
  configPath: './tailwind.config.ts',
});
