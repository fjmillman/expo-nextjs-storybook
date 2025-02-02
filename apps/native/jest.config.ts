import type { Config } from 'jest';

const config = {
  displayName: 'Expo Tests',
  preset: 'jest-expo',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  collectCoverageFrom: ['app/**/*.ts?(x)}', 'app/**/stories.ts?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|escape-string-regexp|expo-router|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@sentry/.*)',
  ],
  coverageReporters: ['json', 'text', 'lcov'],
  passWithNoTests: true,
} satisfies Config;

export default config;
