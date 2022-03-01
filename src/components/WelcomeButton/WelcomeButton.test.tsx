import { create } from 'react-test-renderer';

import WelcomeButton from '.';
import Button from '../Button';

it('renders the welcome button', () => {
  const tree = create(<WelcomeButton />);
  const rootElement = tree.root;
  const button = rootElement.findByType(Button);
  expect(button.props.label).toContain('Click here');
});
