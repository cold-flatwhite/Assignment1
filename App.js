import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import StartScreen from "./screens/StartScreen";
import ConfirmScreen from "./screens/ConfirmScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [screen, setScreen] = useState("game");
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
    <LinearGradient
      colors={["#00c6ff", "#0072ff"]}
      style={styles.gradientStyle}
    >
      <View style={styles.container}>
        {(screen === "start" || screen === "confirm") && (
          <StartScreen onStart={handleStart} />
        )}
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width : '100%',
    justifyContent: "center",
    alignItems: "center",
  },
});
