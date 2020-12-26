import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Login } from "../../Service/ApiService";
import Button from "../Components/Button/Button";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    console.log("object")
    try{
      const response = await Login({email: email, password: password});
      if(response){
        if(response.success){

        }
      }
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ padding: 20 }}>
        <View style={styles.inputView}>
          <TextInput placeholder={"Person Id / Email"} style={{ width: 200 }} value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </View>
        <View style={[styles.inputView, { marginTop: 45 }]}>
          <TextInput placeholder={"Password"} style={{ width: 200 }} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </View>
      </View>

      <View
        style={{
          padding: 10,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ padding: 5 }}>
          <Button title={"User"} type={"orange"} />
        </View>
        <View style={{ padding: 5 }}>
          <Button title={"Network Engineers"} type={"white"} width={130} />
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <TouchableOpacity
        onPress={login}
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
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 0.2,
    paddingHorizontal: 45,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
