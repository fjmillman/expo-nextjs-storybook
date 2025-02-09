import type { ConfigContext, ExpoConfig } from 'expo/config';

const config = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Expo Storybook',
  slug: 'expo Storybook',
  scheme: 'expo-storybook',
  version: '0.1.0',
  orientation: 'portrait',
  icon: '../native/assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: '../native/assets/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#1F104A',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  platforms: ['ios', 'android'],
  ios: {
    bundleIdentifier: 'your.bundle.identifier',
    supportsTablet: true,
    userInterfaceStyle: 'automatic',
    requireFullScreen: true,
  },
  android: {
    package: 'your.bundle.identifier',
    adaptiveIcon: {
      foregroundImage: '../native/assets/icon.png',
      backgroundColor: '#1F104A',
    },
    userInterfaceStyle: 'automatic',
  },
  plugins: [
    'expo-router',
    [
      'expo-screen-orientation',
      {
        initialOrientation: 'DEFAULT',
      },
    ],
  ],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  web: {
    bundler: 'metro',
  },
  newArchEnabled: true,
});

export default config;
