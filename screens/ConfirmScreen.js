import React from "react";
import { StyleSheet, View, Modal, Text, Button } from "react-native";

const Confirm = () => {
  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <View>
            <Text>Confirm Your Details</Text>
            <Text>Name</Text>
            <Text>Email</Text>
            <View>
              <Button title="Edit"  />
              <Button title="Confirm"  />
            </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default Confirm;
