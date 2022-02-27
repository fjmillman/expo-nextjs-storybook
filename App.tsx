import Constants from "expo-constants";
import { FC } from "react";

import Storybook from "./.storybook/react-native";
import HomeScreen from "./src/screens/HomeScreen";

const App: FC = () =>
  Constants.manifest?.extra?.IS_STORYBOOK ? <Storybook /> : <HomeScreen />;

export default App;
