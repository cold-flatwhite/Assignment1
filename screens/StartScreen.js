import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import Input from "../components/Input";

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
    <LinearGradient
      colors={["#00c6ff", "#0072ff"]}
      style={styles.gradientStyle}
    >
      <Text style={styles.headerStyle}>Welcome</Text>

      <Card>
        <Text style={styles.textColor}>Name: </Text>
        <Input value={name} onChangeText={setName} onBlur={validateName} />
        <Text style={styles.errorStyle}>
          {nameError ? "Please enter a valid name" : ""}
        </Text>
        <Text style={styles.textColor}>Email address:</Text>
        <Input value={email} onChangeText={setEmail} onBlur={validateEmail} />
        <Text style={styles.errorStyle}>
          {emailError ? "Please enter a valid email" : ""}
        </Text>
        <View style={styles.checkboxContainer}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <Text style={styles.textColor}> I am not a Robot</Text>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  container: {
    paddingTop: 50,
    width: "100%",
    alignItems: "center",
  },
  headerStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ee",
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
  textColor: {
    color: "#6200ee",
  },
  errorStyle: {
    marginBottom: 50,
  },
});
export default StartScreen;
