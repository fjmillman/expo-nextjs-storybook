import { ComponentMeta, ComponentStory } from "@storybook/react";

import WelcomeButton from ".";

export default {
  title: "Components/Default",
  component: WelcomeButton,
} as ComponentMeta<typeof WelcomeButton>;

export const Default: ComponentStory<typeof WelcomeButton> = () => (
  <WelcomeButton />
);
