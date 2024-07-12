import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import StartScreen from './screens/StartScreen';
import { useState } from 'react';
import ConfirmScreen from './screens/ConfirmScreen';

export default function App() {
  const [screen, setScreen] = useState("start");

  const handleStart = (name, email) => {
    setScreen("confirm");
  };

  return (
    <View style={styles.container}>
      <StartScreen onStart={handleStart}/>
      {screen === "confirm" && (
        <ConfirmScreen/>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
