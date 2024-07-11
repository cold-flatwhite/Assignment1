import React from "react";
import { View, Text, TextInput } from "react-native";

const StartScreen = () => {
  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput />
      <Text>Enter your Email:</Text>
      <TextInput />
    </View>
  );
};

export default StartScreen;
