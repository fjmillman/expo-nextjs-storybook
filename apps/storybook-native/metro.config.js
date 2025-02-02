/* eslint-env node */
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('mjs');

module.exports = withStorybook(
  withNativeWind(config, {
    projectRoot: __dirname,
    inlineRem: false,
    input: '../native/app/global.css',
    configPath: './tailwind.config.ts',
  }),
  {
    enabled: true,
    configPath: path.resolve(__dirname, './.storybook'),
  },
);
