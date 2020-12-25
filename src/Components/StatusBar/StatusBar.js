import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatusBar = ({ status }) => {
  const bgColor =
    status === "In Progress"
      ? "#F7BC13"
      : status === "Not Assigned"
      ? "#F12E2E"
      : status === "Completed"
      ? "#80E220"
      : status === "Verify"
      ? "#1E538F"
      : "white";
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.innerText}>{status}</Text>
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  innerText: {
    color: "#FFFFFF",
  },
});
