import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Login, Profile } from "../../Service/ApiService";
import Button from "../Components/Button/Button";
import AsyncStorage from "@react-native-community/async-storage";
import { GlobalContext } from "../../Service/GlobalContxt";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = React.useContext(GlobalContext);

  const getToken = async () => {
    const value =await  AsyncStorage.getItem("token");
    if (value !== null) {
      try {
        const response = await Profile(value);
        console.log(response, "RESPONSE");
        if (response.success === true) {
          await state.StateDispatch({
            type: "LOGIN",
            payload: { user: response.user, token: value },
          });
        }
        else {
          await state.StateDispatch({ type: 'LOGOUT' })
        }
      } catch (e) {
        alert(e);
      }
    }
  };

  React.useEffect(() => {
    getToken();
  }, []);

  const login = async () => {
    if (email == '' || password == '') {
      alert('Please Enter your email ID & password')
    }
    else {
      try {
        const response = await Login({ email: email, password: password });
        console.log(response);
        if (response.success) {
          if (response.success) {
            await AsyncStorage.setItem("token", response.token);
            await getToken();
          }
        }
        else {
          alert(response.error)
          await state.StateDispatch({ type: 'LOGOUT' })

        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ padding: 20 }}>
        <View style={styles.inputView}>
          <TextInput
            placeholder={"Person Id / Email"}
            style={{ width: Dimensions.get('window').width / 1.8, fontSize: 18 }}
            value={email}
            onChangeText={txt => {
              setEmail(txt);
            }}
          />
        </View>
        <View style={[styles.inputView, { marginTop: 45 }]}>
          <TextInput
            secureTextEntry={true}
            placeholder={"Password"}
            style={{ width: Dimensions.get('window').width / 1.8, fontSize: 18 }}
            value={password}
            onChangeText={txt => {
              setPassword(txt);
            }}
          />
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
