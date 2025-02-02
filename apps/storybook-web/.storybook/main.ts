/** @type {import('@storybook/nextjs').StorybookConfig}} */
const config = {
  framework: '@storybook/nextjs',
  stories: ['../../../packages/app/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'dripsy',
          '@dripsy/core',
          'moti',
          '@motify/components',
          '@motify/core',
          '@motify/skeleton',
          'react-native-reanimated',
          'expo-linear-gradient',
        ],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  docs: {
    autodocs: true,
  },
};

export default config;
