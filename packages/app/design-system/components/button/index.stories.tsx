import { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const WithText: Story = {
  args: {
    label: 'Hello World!',
  },
};

export const WithEmoji: Story = {
  args: {
    label: '😀 😎 👍 💯',
  },
};
