import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems : "center",
  },
});

export default Card;
