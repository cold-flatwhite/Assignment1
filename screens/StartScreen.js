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

  const validateName = () => {
    if (name.length == 0  || (name.length > 1 && !/\d/.test(name))) {
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
    if (name && !nameError && email && !emailError && isChecked) {
    } else {
      email.length == 0? setEmailError(true) : validateEmail(email),
      name.length == 0 ? setNameError(true) : validateName(name)
    }
  };

  return (
    <LinearGradient
      colors={["#00c6ff", "#0072ff"]}
      style={styles.gradientStyle}
    >
    <View style={styles.container}>
    <Text style={styles.headerStyle}>Welcome</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.textColor}>Name: </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          onBlur={() => validateName(name)}
          style={styles.input}
        />
        <Text style = {styles.errorStyle}>{nameError ? "Please enter a valid name" : ""}</Text>
        <Text style={styles.textColor}>Email address:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          onBlur={() => validateEmail(email)}
          style={styles.input}
        />
        <Text style = {styles.errorStyle}>{emailError ? "Please enter a valid email" : ""}</Text>
        <View style = {styles.checkboxContainer}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <Text style={styles.textColor}> I am not a Robot</Text>
        </View>

        <View style = {styles.buttonContainer}>
          <Button title="Reset" color={'red'} onPress={handleReset} />
          <Button title="Start" color={'red'} onPress={handleStart} disabled={!isChecked} />
        </View>
    </View>
    </View>
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
    top : 40,
  },
  input: {
    height: 40,
    borderColor: '#6200ee',
    borderBottomWidth: 1,
    color: '#6200ee',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left : '10%',
    width: '80%',
  },
  textColor : {
    color: '#6200ee',
  },
  errorStyle : {
    marginBottom : 50
  }
});
export default StartScreen;
