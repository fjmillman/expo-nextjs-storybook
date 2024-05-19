import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';

import Button from '.';
import meta, {
  WithText as nativeWithText,
  WithEmoji as nativeWithEmoji,
} from './index.stories';

const webMeta: Meta<typeof Button> = {
  ...meta,
  args: {
    ...meta.args,
    onPress: fn(),
  },
};

export default webMeta;
type Story = StoryObj<typeof Button>;

export const WithText: Story = {
  ...nativeWithText,
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

export const WithEmoji: Story = nativeWithEmoji;
