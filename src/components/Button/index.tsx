import { VFC } from 'react';
import { Text, TouchableHighlight } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

const Button: VFC<Props> = ({ label, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <Text>{label}</Text>
  </TouchableHighlight>
);

export default Button;
