import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'Expo Storybook',
  slug: 'expo Storybook',
  version: '1.0.0',
  orientation: 'default',
  scheme: 'expo-storybook',
  userInterfaceStyle: 'automatic',
  assetBundlePatterns: ['**/*'],
  platforms: ['ios', 'android'],
  ios: {
    supportsTablet: true,
    userInterfaceStyle: 'automatic',
    requireFullScreen: true,
  },
  android: {
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
};

export default config;
