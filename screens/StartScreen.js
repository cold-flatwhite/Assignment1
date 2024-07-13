import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import Card from "../components/Card";
import Input from "../components/Input";
import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";
import styleHelper from "../styles/styleHelper";

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
    email.length == 0 ? setEmailError((current) => {return true}) : validateEmail(email);
    name.length == 0 ? setNameError((current) => {return true}) : validateName(name);
    console.log(emailError);
    console.log(nameError);
    if (name && !nameError && email && !emailError) {
      onStart(name, email);
    }
  };

  return (
    <View style={styles.startContainer}>
      <View style={styles.headerContainer}>
        <TextComponent style={styles.headerStyle}>Welcome</TextComponent>
      </View>
      <Card>
        <TextComponent style={styles.label}>Name: </TextComponent>
        <Input value={name} onChangeText={setName} onBlur={validateName} />
        <TextComponent style={styles.errorStyle}>
          {nameError ? "Please enter a valid name" : ""}
        </TextComponent>
        <TextComponent style={styles.label}>Email address:</TextComponent>
        <Input value={email} onChangeText={setEmail} onBlur={validateEmail} />
        <TextComponent style={styles.errorStyle}>
          {emailError ? "Please enter a valid email" : ""}
        </TextComponent>
        <View style={styles.checkboxContainer}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <TextComponent> I am not a Robot</TextComponent>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonComponent title="Reset" color={"red"} onPress={handleReset} />
          <ButtonComponent title="Start" onPress={handleStart} disabled={!isChecked} />
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
    paddingTop: styleHelper.spacing.large,
    height: 80,
    justifyContent: "center",
    marginBottom: styleHelper.spacing.large,
  },
  headerStyle: {
    fontSize: styleHelper.fonts.large,
    fontWeight: "bold",
    color: styleHelper.colors.primary,
    lineHeight: styleHelper.fonts.large,
  },
  input: {
    height: 40,
    borderColor: styleHelper.colors.primary,
    borderBottomWidth: styleHelper.border.width,
    color: styleHelper.colors.primary,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: styleHelper.spacing.medium,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  errorStyle: {
    marginBottom: 50,
    color: styleHelper.colors.error,
  },
  label: {
    alignSelf: "flex-start",
  },
});
export default StartScreen;
