import AsyncStorage from '@react-native-async-storage/async-storage';

import { view } from '../../.storybook/storybook.requires';

import '../native/src/styles.css';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  onDeviceUI: false,
  enableWebsockets: false,
  shouldPersistSelection: true,
});

export default StorybookUIRoot;
