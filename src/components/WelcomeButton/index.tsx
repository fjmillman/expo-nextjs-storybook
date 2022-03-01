import { VFC, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import Button from '../Button';

type Props = {
  message?: string;
};

const WelcomeButton: VFC<Props> = ({ message = 'Hello World!' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onPress={() => setIsOpen(!isOpen)}
        label={`Click here to ${isOpen ? 'close' : 'open'}`}
      />
      {isOpen && <Text style={styles.text}>{message}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});

export default WelcomeButton;
