import nextJest from 'next/jest';

import type { Config } from '@jest/types';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config.InitialOptions = {
  displayName: 'Next.js Tests',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: ['src/**/*.ts?(x)', '!src/**/stories.ts?(x)'],
  coverageReporters: ['json', 'text', 'lcov'],
  passWithNoTests: true,
};

export default createJestConfig(config);
