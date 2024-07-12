import React from "react";
import { StyleSheet, View, Modal, Text, Button } from "react-native";
import Card from "../components/Card";

const Confirm = ({ visible, name, email, onEdit, onConfirm }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.centeredView}>
        <Card>
          <Text style={styles.textStyle}>
            Hello {name} {"\n"}
            Here is the email that you entered: {"\n"}
            {email} {"\n"} {"\n"}
            If it is not correct, please go back and enter again.
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Edit" color={"red"} onPress={onEdit} />
            <Button title="Continue" onPress={onConfirm} />
          </View>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  confirmContainer: {
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
  textStyle: {
    fontSize: 16,
    color: "purple",
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
