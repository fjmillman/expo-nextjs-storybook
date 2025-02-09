import { expect, it, jest } from '@jest/globals';
import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react-native';

import * as stories from './index.stories';

const { WithText } = composeStories(stories);

it('with text should contain text', async () => {
  const view = render(<WithText />);

  const button = await view.findByText('Hello World!');

  expect(button).not.toBeNull();
});

it('with text should respond to click events', async () => {
  const handleOnPress = jest.fn();

  const view = render(<WithText onPress={handleOnPress} />);

  const button = await view.findByTestId('button');

  fireEvent(button, 'press');

  expect(handleOnPress).toHaveBeenCalled();
});
