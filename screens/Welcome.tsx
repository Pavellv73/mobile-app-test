/* eslint-disable prettier/prettier */
import { Button, Text } from "@rneui/base";
import { Stack } from "react-native-flex-layout";

export const WelcomeScreen = ({ navigation }: any) => {
  return (
    <Stack direction="column">
      <Text>Добро пожаловать</Text>
      <Button onPress={() =>
        navigation.navigate('Main')
      }>Далее</Button>
    </Stack>
  );
};
