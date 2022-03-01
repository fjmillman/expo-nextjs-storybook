import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithText = Template.bind({});
WithText.args = { label: 'Hello World!', onPress: action('press') };

export const WithEmoji = Template.bind({});
WithEmoji.args = { ...WithText.args, label: '😀 😎 👍 💯' };
