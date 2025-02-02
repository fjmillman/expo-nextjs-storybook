import { jest, it, expect } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '.';

it('should respond to click events', async () => {
  const handleOnPress = jest.fn();

  const view = render(<Button label="Hello World!" onPress={handleOnPress} />);

  const button = await view.findByTestId('button');

  fireEvent(button, 'press');

  expect(handleOnPress).toHaveBeenCalled();
});
