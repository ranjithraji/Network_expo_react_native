import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const VerifyScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ padding: 20 }}>
        <View style={styles.inputView}>
          <TextInput placeholder={"Confirm Code"} style={{ width: 200 }} />
        </View>
        <View style={[styles.inputView, { marginTop: 35 }]}>
          <TextInput placeholder={"Password"} style={{ width: 200 }} />
        </View>

        <View style={[styles.inputView, { marginTop: 35 }]}>
          <TextInput placeholder={"Confirm Password"} style={{ width: 200 }} />
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#1E538F",
            width: 120,
            height: 42,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View
        style={{ paddingHorizontal: 40, paddingVertical: 20, marginTop: 40 }}
      >
        <Text>Note :-</Text>
        <Text>* This Signup Page Only for Faculity.</Text>
        <Text>
          * If You are a Network Engineer Please Contact Network Admin.
        </Text>
      </View> */}
    </View>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 0.2,
    paddingHorizontal: 45,
    paddingVertical: 5,
    borderRadius: 5,
    // marginTop:20
  },
});
