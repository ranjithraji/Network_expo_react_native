import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Verify } from "../../Service/ApiService";
import AsyncStorage from "@react-native-community/async-storage";

const VerifyScreen = () => {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [code, setCode] = useState(0);
  const [aCode, setACode] = useState("");
  const [err, setErr] = useState("");

  const verify = async () => {
    if (password !== cPassword) {
      setErr("password not same");
    }
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        try {
          const response = await Verify(
            {
              secretCode: code,
              password: password,
            },
            value
          );
          console.log(response);
          if (response) {
            if (response.success) {
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ padding: 20 }}>
        <View style={styles.inputView}>
          <TextInput
            placeholder={"Confirm Code"}
            style={{ width: 200 }}
            textContentType={"oneTimeCode"}
            value={aCode}
            onChangeText={txt => {
              setACode(txt);
              setCode(parseInt(txt));
            }}
          />
        </View>
        <View style={[styles.inputView, { marginTop: 35 }]}>
          <TextInput
            style={{ width: 200 }}
            value={password}
            placeholder={"Password"}
            onChangeText={txt => {
              setPassword(txt);
            }}
          />
        </View>

        <View style={[styles.inputView, { marginTop: 35 }]}>
          <TextInput
            placeholder={"Confirm Password"}
            style={{ width: 200 }}
            value={cPassword}
            onChangeText={txt => {
              setCPassword(txt);
            }}
          />
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={verify}
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

      <View style={{ padding: 20 }}>
        <View style={{ marginTop: 35 }}>
          <Text style={{ color: "red" }}>{err}</Text>
        </View>
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
