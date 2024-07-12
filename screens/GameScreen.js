import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";

const GameScreen = ({ onRestart }) => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(4);
  const [timer, setTimer] = useState(300);
  const [showGuessResult, setShowGuessResult] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState("");

  const handleSubmitGuess = () => {
    const numGuess = parseInt(guess, 10);
    setGuess("");
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      Alert.alert("Invalid Guess", "Please enter a number between 1 and 100.");
      return;
    }
    console.log(randomNumber);
    if (numGuess === randomNumber) {
      setShowSuccess(true);
    } else {
      setShowGuessResult(true);
      setAttempts((prevAttempts) => {
        const newAttempts = prevAttempts - 1;
        if (newAttempts <= 0) {
            setGameOver(true);
            setGameOverMessage("You are out of attempts");
        }
        return newAttempts;
      });
    }
  };

  const handleGuessAgain = () => {
    setShowGuessResult(false);
    setGuess("");
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleRestart = () => {
    setRandomNumber(generateRandomNumber());
    setGuess("");
    setAttempts(4);
    setTimer(300);
    setShowSuccess(false);
    setGameOver(false);
    setGameOverMessage("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={handleRestart} />
      </View>

      {!showSuccess && !showGuessResult && !gameOverMessage && (
        <View style={styles.conditionalContainer}>
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
        </View>
      )}

      {!gameOver && showSuccess && (
        <View style={styles.conditionalContainer}>
          <Text style={styles.modalText}>You guessed correct!</Text>
          <Text style={styles.modalText}>Attempts used: {4 - attempts}</Text>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/id/${randomNumber}/100/100`,
            }}
          />
          <Button title="New Game" onPress={handleRestart} />
        </View>
      )}

      {!gameOver && showGuessResult && (
        <View style={styles.conditionalContainer}>
          <Text style={styles.modalText}>You did not guess correct!</Text>
          <Button title="Try Again" onPress={handleGuessAgain} />
          <Button
            title="End the Game"
            onPress={() => handleGameOver("Game ended by user.")}
          />
        </View>
      )}

      {gameOverMessage && (
        <View style={styles.conditionalContainer}>
          <Text>The game is over!</Text>
          <Image
            style={styles.image}
            source={require("../assets/sad_smiley.png")}
          />
          {gameOverMessage && <Text style={styles.modalText}>{gameOverMessage}</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  conditionalContainer: {
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
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
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
    alignItems: "left",
    justifyContent: "space-between",
    width: "100%",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default GameScreen;
