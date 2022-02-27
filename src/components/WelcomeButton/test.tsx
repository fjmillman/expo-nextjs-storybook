import { Button } from 'react-native';
import { create } from 'react-test-renderer';

import WelcomeButton from '.';

describe('Welcome Button', () => {
  it('renders the welcome button', () => {
    const tree = create(<WelcomeButton />);
    const rootElement = tree.root;
    const button = rootElement.findByType(Button);
    expect(button.props.title).toBe('Click here');
  });
});
