import { expect, fn, userEvent, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    onPress: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click button', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Expect button to have been clicked', async () => {
      await expect(args.onPress).toHaveBeenCalled();
    });
  },
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
