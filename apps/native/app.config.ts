import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'Expo',
  slug: 'expo',
  version: '1.0.0',
  orientation: 'default',
  scheme: 'expo',
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
  web: {
    bundler: 'metro',
  },
  newArchEnabled: true,
};

export default config;
