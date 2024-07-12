import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert,Modal, Image } from "react-native";

const GameScreen = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(4);
  const [timer, setTimer] = useState(300);
  const [showGuessResult, setShowGuessResult] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const handleSubmitGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      Alert.alert("Invalid Guess", "Please enter a number between 1 and 100.");
      return;
    }
    console.log(randomNumber);
    if (numGuess === randomNumber) {
        setShowSuccess(true);
    } 
  };

  const handleGameOver = (message) => {
    Alert.alert("Game Over", message, [{ text: "Restart", onPress: onRestart }]);
  };

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.header}>Guess A Number between 1 & 100</Text>
      <TextInput
        value={guess}
        onChangeText={setGuess}
        keyboardType="numeric"
        style={styles.input}
      />
      <Text style={styles.text}>Attempts left: {attempts}</Text>
      <Text style={styles.text}>Time left: {timer}s</Text>
      <View style={styles.buttonContainer}>
        <Button title="Use a Hint" />
        <Button title="Submit Guess" onPress={handleSubmitGuess} />
      </View>
      {showSuccess && (
        <Modal visible={showSuccess} transparent={true} animationType="slide">
          <View>
            <View>
              <Text>Congratulations! You guessed the number.</Text>
              <Text>Attempts used: {4 - attempts}</Text>
              <Image
                style={styles.image}
                source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }}
              />
              <Button title="New Game"/>
            </View>
          </View>
        </Modal>
      )}
    </View>
    
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  header: {
    fontSize: 15,
    color: "purple",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 40,
    borderColor: "#6200ee",
    borderBottomWidth: 1,
    color: "#6200ee",
    marginBottom: 20,
  },
  text: {
    fontSize: 13,
    marginBottom: 10,
    color: "grey",
  },
  buttonContainer: {
    justifyContent: "space-between",
    width: "100%",
  },
});

export default GameScreen;
