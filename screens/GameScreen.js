import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import Card from "../components/Card";


const GameScreen = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(4);
  const [timer, setTimer] = useState(300);
  const [showGuessResult, setShowGuessResult] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [hintUsed, setHintUsed] = useState(false);
  const [hintMessage, setHintMessage] = useState("");

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(timerInterval);
          setGameOver(true);
          setGameOverMessage("You are out of time");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [randomNumber]);

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
    setShowGuessResult(false);
    setShowSuccess(false);
    setGameOver(false);
    setGameOverMessage("");
    setHintMessage("");
    setHintUsed(false);
  };

  const handleUseHint = () => {
    const msg =
      randomNumber <= 50 ? "Number is 50 or less" : "Number is more than 50";
    setHintUsed(true);
    setHintMessage(msg);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={handleRestart} />
      </View>

      {!showSuccess && !showGuessResult && !gameOverMessage && !hintUsed && (
        <Card>
          <Text style={styles.header}>Guess A Number between 1 & 100</Text>
          <TextInput
            value={guess}
            onChangeText={setGuess}
            keyboardType="numeric"
            style={styles.input}
          />
          <Text style={styles.leftTextStyle}>Attempts left: {attempts}</Text>
          <Text style={styles.leftTextStyle}>Time left: {timer}s</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Use a Hint"
              onPress={handleUseHint}
              disabled={hintMessage}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Submit Guess" onPress={handleSubmitGuess} />
          </View>
        </Card>
      )}

      {!gameOver && showSuccess && (
        <Card>
          <Text style={styles.containerText}>You guessed correct!</Text>
          <Text style={styles.containerText}>
            Attempts used: {4 - attempts}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/id/${randomNumber}/100/100`,
            }}
          />
          <Button title="New Game" onPress={handleRestart} />
        </Card>
      )}

      {!gameOver && showGuessResult && (
        <Card>
          <Text style={styles.containerText}>You did not guess correct!</Text>
          <Button title="Try Again" onPress={handleGuessAgain} />
          <Button
            title="End the Game"
            onPress={() => handleGameOver("Game ended by user.")}
          />
        </Card>
      )}

      {gameOver && (
        <Card>
          <Text style={styles.containerText}>The game is over!</Text>
          <Image
            style={styles.image}
            source={require("../assets/sad_smiley.png")}
          />
          {gameOverMessage && (
            <Text style={styles.containerText}>{gameOverMessage}</Text>
          )}
        </Card>
      )}

      {hintUsed && (
        <Card>
          <Text style={styles.containerText}>{hintMessage}</Text>
          <Button title="Continue" onPress={() => setHintUsed(false)} />
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
  },
  buttonContainer: {
    marginBottom: 5,
  },
  header: {
    fontSize: 15,
    color: "purple",
  },
  input: {
    height: 40,
    width: 40,
    borderColor: "#6200ee",
    borderBottomWidth: 1,
    color: "#6200ee",
    marginBottom: 10,
  },
  leftTextStyle: {
    fontSize: 13,
    marginBottom: 10,
    color: "grey",
  },

  containerText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "purple",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default GameScreen;
