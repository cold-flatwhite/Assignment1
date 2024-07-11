import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const StartScreen = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);


  const validateName = (name) => {
    if (name.length > 1 && !/\d/.test(name)) {
        setNameError(false);
    } else {
        setNameError(true);
    }
  }
  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput value={name} onChangeText={setName} onBlur={() => validateName(name)}/>
      {nameError && <Text>Name Error</Text>}
      <Text>Enter your Email:</Text>
      <TextInput />
    </View>
  );
};

export default StartScreen;
