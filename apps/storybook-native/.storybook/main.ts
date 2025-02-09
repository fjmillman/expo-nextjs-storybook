/** @type {import('@storybook/react-native').StorybookConfig}} */
const main = {
  stories: ['../../../packages/ui/**/*.stories.?(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};

export default main;
