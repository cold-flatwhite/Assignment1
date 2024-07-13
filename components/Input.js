import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, onBlur, style }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      style={{ ...styles.input, ...style }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#6200ee",
    borderBottomWidth: 1,
    color: "#6200ee",
    marginBottom: 10,
    width : '100%',
  },
});

export default Input;
