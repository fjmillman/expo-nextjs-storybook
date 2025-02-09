'use client';

import { Text, TouchableHighlight } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: Props) => (
  <TouchableHighlight onPress={onPress} testID="button" role="button">
    <Text>{label}</Text>
  </TouchableHighlight>
);

export default Button;
