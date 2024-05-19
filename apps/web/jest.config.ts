import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config.InitialOptions = {
  displayName: 'Next.js Tests',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: ['app/**/*.ts?(x)', 'app/**/stories.ts?(x)'],
  coverageReporters: ['json', 'text', 'lcov'],
  passWithNoTests: true,
};

export default createJestConfig(config);
