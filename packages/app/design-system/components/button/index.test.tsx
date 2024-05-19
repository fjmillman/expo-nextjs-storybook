import { jest, it, expect } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '.';

it('should respond to click events', async () => {
  const handleOnPress = jest.fn();

  const { findByTestId } = render(
    <Button label="Hello World!" onPress={handleOnPress} />,
  );

  const button = await findByTestId('button');

  fireEvent(button, 'press');

  expect(handleOnPress).toHaveBeenCalled();
});
