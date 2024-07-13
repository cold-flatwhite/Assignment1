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
import Input from "../components/Input";
import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";

const GameScreen = ({onRestart}) => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(4);
  const [timer, setTimer] = useState(300);
  const [showGuessResult, setShowGuessResult] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState("");
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
  };

  const handleUseHint = () => {
    const msg =
      randomNumber <= 50 ? "Number is between 1 and 50" : "Number is between 51 and 100";
    setHintMessage(msg);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={onRestart} />
      </View>

      {!showSuccess && !showGuessResult && !gameOverMessage && (
        <Card>
          <TextComponent>Guess A Number between 1 & 100</TextComponent>
          <Input
            value={guess}
            onChangeText={setGuess}
            keyboardType="numeric"
            style={styles.input}
          />
          {hintMessage && <TextComponent style={styles.hintTextStyle}>{hintMessage}</TextComponent>}
          <TextComponent style={styles.leftTextStyle}>Attempts left: {attempts}</TextComponent>
          <TextComponent style={styles.leftTextStyle}>Time left: {timer}s</TextComponent>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              title="Use a Hint"
              onPress={handleUseHint}
              disabled={hintMessage}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent title="Submit Guess" onPress={handleSubmitGuess} />
          </View>
        </Card>
      )}

      {!gameOver && showSuccess && (
        <Card>
          <TextComponent style={styles.containerText}>You guessed correct!</TextComponent>
          <TextComponent style={styles.containerText}>
            Attempts used: {4 - attempts}
          </TextComponent>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/id/${randomNumber}/100/100`,
            }}
          />
          <ButtonComponent title="New Game" onPress={handleRestart} />
        </Card>
      )}

      {!gameOver && showGuessResult && (
        <Card>
          <TextComponent style={styles.containerText}>You did not guess correct!</TextComponent>
          <ButtonComponent title="Try Again" onPress={handleGuessAgain} />
          <ButtonComponent
            title="End the Game"
            onPress={() => handleGameOver("Game ended by user.")}
          />
        </Card>
      )}

      {gameOver && (
        <Card>
          <TextComponent style={styles.containerText}>The game is over!</TextComponent>
          <Image
            style={styles.image}
            source={require("../assets/sad_smiley.png")}
          />
          {gameOverMessage && (
            <TextComponent style={styles.containerText}>{gameOverMessage}</TextComponent>
          )}
          <ButtonComponent title="New Game" onPress={handleRestart} />
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
  input: {
    height: 40,
    width: 40,
    borderColor: "#6200ee",
    borderBottomWidth: 1,
    color: "#6200ee",
    marginBottom: 10,
  },
  hintTextStyle : {
    color : "grey",
    fontSize : 15,
    marginBottom : 10,
  },
  leftTextStyle: {
    fontSize: 13,
    marginBottom: 10,
    color: "grey",
  },

  containerText: {
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default GameScreen;
