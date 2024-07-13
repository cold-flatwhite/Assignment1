import React from "react";
import { StyleSheet, Button, View } from "react-native";

const ButtonComponent = ({ title, onPress, color = "blue", disabled = false }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} onPress={onPress} color={color} disabled={disabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 5,
  },
});

export default ButtonComponent;
