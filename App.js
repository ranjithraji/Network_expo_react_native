import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import CreateIssue from "./src/Screens/CreateIssue";
// import InquiryScreen from "./src/Screens/InquiryScreen";
// import IssuesScreen from "./src/Screens/IssuesScreen";
// import LoginScreen from "./src/Screens/LoginScreen";
// import SignUpScreen from "./src/Screens/SignUpScreen";
// import VerifyScreen from "./src/Screens/VerifyScreen";
// import Store from './Service/GlobalContxt';
import Root from './src/MainRoot/Root';
export default function App() {
  return (
    <React.Fragment>  
      {/* <Store> */}
        <Root />
      {/* </Store> */}
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
