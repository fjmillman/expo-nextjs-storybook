import { render, fireEvent } from '@testing-library/react-native';
import { TouchableHighlight } from 'react-native';

import Button from '.';

it('should respond to click events', () => {
  const handleOnPress = jest.fn();

  const { container } = render(
    <Button label="Hello World!" onPress={handleOnPress} />
  );

  fireEvent.press(container.findByType(TouchableHighlight));

  expect(handleOnPress).toHaveBeenCalled();
});
