import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import WelcomeButton from '.';

export default {
  title: 'Components/WelcomeButton',
  component: WelcomeButton,
} as ComponentMeta<typeof WelcomeButton>;

const Template: ComponentStory<typeof WelcomeButton> = (args) => (
  <WelcomeButton {...args} />
);

export const WithMessage = Template.bind({});
WithMessage.args = { message: 'Welcome' };
WithMessage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Click here to open');
  await userEvent.click(button);
  await expect(button).toHaveTextContent('Click here to close');
  await expect(canvas.getByText('Welcome')).toBeInTheDocument();
};
