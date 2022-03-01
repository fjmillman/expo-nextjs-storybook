import { Config } from '@jest/types';

const untranspiledModulePatterns = [
  '(jest-)?@?react-native',
  'react-clone-referenced-element',
  '@react-native-community',
  'expo(nent)?',
  '@expo(nent)?/.*',
  'react-navigation',
  '@react-navigation/.*',
  '@unimodules/.*',
  'unimodules',
  'sentry-expo',
  'native-base',
  'react-native-svg',
];

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    `node_modules/(?!${untranspiledModulePatterns.join('|')})`,
  ],
  setupFilesAfterEnv: ['<rootDir>/src/__mocks__/globalMock.js'],
  testMatch: ['src/**/?(*.)+test.ts?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts?(x)',
    '!src/**/?(*.)+_document.ts',
    '!src/**/?(*.)+stories.tsx',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
};

export default config;
