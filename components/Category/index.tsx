/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  handleClick: () => void;
  name: string;
};

export const Category = ({ handleClick, name }: Props) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        paddingVertical: 12,
        paddingHorizontal: 16,
      }}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};
