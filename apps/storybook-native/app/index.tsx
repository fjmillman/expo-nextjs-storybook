import AsyncStorage from '@react-native-async-storage/async-storage';

import { view } from '../.storybook/storybook.requires';

import '../../native/app/global.css';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;
