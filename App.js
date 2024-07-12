import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import { useState } from "react";
import ConfirmScreen from "./screens/ConfirmScreen";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  const handleStart = (name, email) => {
    setUserInfo({ name, email });
    setScreen("confirm");
  };

  const handleEdit = () => setScreen("start");
  const handleConfirm = () => {
    console.log("confirm")
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
