import React from "react";
import { StyleSheet, View, Modal, Text, Button } from "react-native";
import Card from "../components/Card";
import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";

const Confirm = ({ visible, name, email, onEdit, onConfirm }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.confirmContainer}>
        <Card>
          <TextComponent style={styles.textStyle}>
            Hello {name} {"\n"}
            Here is the email that you entered: {"\n"}
            {email} {"\n"} {"\n"}
            If it is not correct, please go back and enter again.
          </TextComponent>
          <View style={styles.buttonContainer}>
            <ButtonComponent title="Edit" color={"red"} onPress={onEdit} />
            <ButtonComponent title="Continue" onPress={onConfirm} />
          </View>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  confirmContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  textStyle: {
    marginBottom: 10,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 20,
  },
});

export default Confirm;
