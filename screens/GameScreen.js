import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const GameScreen = () => {
    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState(4);
    const [timer, setTimer] = useState(60);  

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
        </View>
    );
}

const styles = StyleSheet.create({
    gameContainer : {
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
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: "#6200ee",
        borderBottomWidth: 1,
        color: "#6200ee",
        marginBottom: 20,
      },
      text: {
        fontSize: 16,
        marginBottom: 10,
      },
})

export default GameScreen;
