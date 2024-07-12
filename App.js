import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import StartScreen from "./screens/StartScreen";
import ConfirmScreen from "./screens/ConfirmScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  const handleStart = (name, email) => {
    setUserInfo({ name, email });
    setScreen("confirm");
  };

  const handleEdit = () => {
    setScreen("start");
  };

  const handleConfirm = () => {
    setScreen("game");
  };

  return (
    <View style={styles.container}>
      <StartScreen onStart={handleStart} />
      {screen === "confirm" && (
        <ConfirmScreen
          visible={screen === "confirm"}
          name={userInfo.name}
          email={userInfo.email}
          onEdit={handleEdit}
          onConfirm={handleConfirm}
        />
      )}
      {screen === "game" && <GameScreen/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
