import { ExpoConfig } from "@expo/config-types";

const config: ExpoConfig = {
  name: "Expo Next.js Storybook",
  slug: "expo-nextjs-storybook",
  extra: {
    IS_STORYBOOK: process.env.IS_STORYBOOK,
  },
};

export default config;
