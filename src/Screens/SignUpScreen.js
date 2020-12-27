import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SignUp } from "../../Service/ApiService";
import AsyncStorage from "@react-native-community/async-storage";

const SignUpScreen = ({navigation}) => {
  const [personId, setPersonId] = React.useState("");
  const [email, setEmail] = React.useState("");

  const register = async () => {
    console.log("object");

    try {
      const response = await SignUp({ personId: personId, email: email });
      console.log(response, { personId: personId, email: email });
      if (response) {
        if (response.success) {
          await AsyncStorage.setItem("token", response.token);
          await navigation.navigate('Verify')
        }
        else{
          alert(response.error)
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
            placeholder={"Person Id"}
            value={personId}
            style={{ width: 200 }}
            onChangeText={txt => {
              setPersonId(txt);
            }}
          />
        </View>
        <View style={[styles.inputView, { marginTop: 25 }]}>
          <TextInput
            placeholder={"Email"}
            value={email}
            style={{ width: 200 }}
            onChangeText={txt => {
              setEmail(txt);
            }}
          />
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={register}
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
            Register
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ paddingHorizontal: 40, paddingVertical: 20, marginTop: 40 }}
      >
        <Text>Note :-</Text>
        <Text>* This Signup Page Only for Faculity.</Text>
        <Text>
          * If You are a Network Engineer Please Contact Network Admin.
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 0.2,
    paddingHorizontal: 45,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
