import { readdirSync } from 'fs';

import type { UserConfig } from '@commitlint/types';

const monorepoDirectories = ['./apps', './packages', './tooling'];

let scopes: string[] = [];
for (const directory of monorepoDirectories) {
  const dirNames = readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((dir) => dir.name);

  scopes = [...scopes, ...dirNames];
}

const config: UserConfig = {
  extends: ['@commitlint/config-conventional', 'monorepo'],
  rules: {
    'scope-enum': [2, 'always', scopes],
    'scope-empty': [0],
  },
};

export default config;
