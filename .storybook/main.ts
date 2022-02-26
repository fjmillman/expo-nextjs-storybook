import { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  core: {
    builder: 'webpack5',
  },
  features: {
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    babelModeV7: true,
    postcss: false,
  },
  stories: [
    "../src/**/*stories.mdx",
    "../src/**/*stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-react-native-web'
  ],
  framework: "@storybook/react",
}

export default config;
