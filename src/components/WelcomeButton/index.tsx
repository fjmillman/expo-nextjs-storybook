import { FC, useState } from "react";
import { Button, StyleSheet, Text } from "react-native";

const WelcomeButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)} title="Click here" />
      {isOpen && (
        <Text style={styles.text}>You're ready to start development!</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});

export default WelcomeButton;
