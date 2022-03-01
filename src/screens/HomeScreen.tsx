import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeButton from '../components/WelcomeButton';

const HomeScreen: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to Expo + Next.js + Storybook 👋</Text>
    <WelcomeButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
