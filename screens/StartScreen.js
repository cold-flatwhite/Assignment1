import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Checkbox from 'expo-checkbox';

const StartScreen = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const validateName = (name) => {
    if (name.length > 1 && !/\d/.test(name)) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(!emailRegex.test(email));

    if (emailRegex.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        onBlur={() => validateName(name)}
      />
      {nameError && <Text>Name Error</Text>}
      <Text>Enter your Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        onBlur={() => validateEmail(email)}
      />
      {emailError && <Text>Email Error</Text>}
      <Checkbox value={isChecked} onValueChange={setChecked} />
      </View>
  );
};

export default StartScreen;
