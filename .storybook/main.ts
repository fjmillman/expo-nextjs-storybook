import { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  core: {
    builder: 'webpack5',
  },
  features: {
    babelModeV7: true,
    interactionsDebugger: true,
    postcss: false,
  },
  stories: [
    "../src/**/*stories.mdx",
    "../src/**/*stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web'
  ],
  framework: "@storybook/react",
}

export default config;
