import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import WelcomeButton from ".";

export default {
  title: "Components/Default",
  component: WelcomeButton,
} as ComponentMeta<typeof WelcomeButton>;

export const Default: ComponentStory<typeof WelcomeButton> = () => (
  <WelcomeButton />
);

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText("Click here"));
  await expect(
    canvas.getByText("You're ready to start development!")
  ).toBeInTheDocument();
};
