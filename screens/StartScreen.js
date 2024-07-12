import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import Input from "../components/Input";
import TextComponent from "../components/TextComponent";

const StartScreen = ({ onStart }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const validateName = () => {
    if (name.length == 0 || (name.length > 1 && !/\d/.test(name))) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length == 0 || emailRegex.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setChecked(false);
    setNameError(false);
    setEmailError(false);
  };

  const handleStart = () => {
    email.length == 0 ? setEmailError(true) : validateEmail(email);
    name.length == 0 ? setNameError(true) : validateName(name);
    if (name && !nameError && email && !emailError) {
      onStart(name, email);
    }
  };

  return (
    <View style={styles.startContainer}>
      <View style = {styles.headerContainer}>
      <TextComponent style={styles.headerStyle}>Welcome</TextComponent>
      </View>
      <Card>
        <TextComponent>Name: </TextComponent>
        <Input value={name} onChangeText={setName} onBlur={validateName} />
        <TextComponent style={styles.errorStyle}>
          {nameError ? "Please enter a valid name" : ""}
        </TextComponent>
        <TextComponent>Email address:</TextComponent>
        <Input value={email} onChangeText={setEmail} onBlur={validateEmail} />
        <TextComponent style={styles.errorStyle}>
          {emailError ? "Please enter a valid email" : ""}
        </TextComponent>
        <View style={styles.checkboxContainer}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <TextComponent> I am not a Robot</TextComponent>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Reset" color={"red"} onPress={handleReset} />
          <Button
            title="Start"
            color={"red"}
            onPress={handleStart}
            disabled={!isChecked}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    height: 80, 
    justifyContent: "center", 
    marginBottom : 40,
  },
  headerStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ee",
    lineHeight : 24,
  },
  input: {
    height: 40,
    borderColor: "#6200ee",
    borderBottomWidth: 1,
    color: "#6200ee",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    left: "10%",
    width: "80%",
  },
  errorStyle: {
    marginBottom: 50,
    color : 'black',
  },
});
export default StartScreen;
