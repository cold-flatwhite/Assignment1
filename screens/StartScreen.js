import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";

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

  const handleReset = () => {
    setName("");
    setEmail("");
    setChecked(false);
    setNameError(false);
    setEmailError(false);
  };

  const handleStart = () => {
    if (name && !nameError && email && !emailError && isChecked) {
    } else {
      alert(
        "Please fill out all fields correctly and confirm you are not a robot."
      );
    }
  };

  return (
    <LinearGradient
      colors={["#00c6ff", "#0072ff"]}
      style={styles.gradientStyle}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>Welcome</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Name: </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          onBlur={() => validateName(name)}
          style={styles.input}
        />
        {nameError && <Text>Name Error</Text>}
        <Text>Email address:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          onBlur={() => validateEmail(email)}
          style={styles.input}
        />
        {emailError && <Text>Email Error</Text>}
        <View>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <Text>I am not a Robot</Text>
        </View>

        <View>
          <Button title="Reset" onPress={handleReset} />
          <Button title="Start" onPress={handleStart} disabled={!isChecked} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    position: "absolute",
    top: 50,
    width: "100%",
    alignItems: "center",
  },
  headerStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ee",
  },
  bodyContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#6200ee',
    borderBottomWidth: 1,
    marginBottom: 10,
    color: '#6200ee',
  },
});
export default StartScreen;
