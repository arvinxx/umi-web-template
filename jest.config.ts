import { configUmiAlias, createConfig } from '@umijs/max/test';

const base = createConfig({
  target: 'browser',
});

export default async () =>
  configUmiAlias({
    ...base,
    setupFilesAfterEnv: ['./tests/jest-setup.ts'],
    // if you require some es-module npm package, please uncomment below line and insert your package name
    // transformIgnorePatterns: ['node_modules/(?!.*(lodash-es|your-es-pkg-name)/)']
  });
