import Constants from 'expo-constants';

import Storybook from './.storybook/react-native';
import HomeScreen from './src/screens/HomeScreen';

export default Constants.manifest?.extra?.IS_STORYBOOK ? Storybook : HomeScreen;
