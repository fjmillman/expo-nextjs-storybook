import { ComponentMeta, ComponentStory } from '@storybook/react'

import WelcomeButton from '.';

export default {
  component: WelcomeButton,
} as ComponentMeta<typeof WelcomeButton>;;

const Template: ComponentStory<typeof WelcomeButton> = () => <WelcomeButton />;

export const Default = Template.bind({});
