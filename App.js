import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Issues from './src/Screens/Issues';
import Store from "./Service/GlobalContxt";
export default function App() {
  return (
    <React.Fragment>
      <Store>
        <Issues />
      </Store>
    </React.Fragment>
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
