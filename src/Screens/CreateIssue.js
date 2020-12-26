import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const CreateIssue = () => {

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View style={{ flexDirection: "row", top: 50 }}>
        <View style={{ width: 170, padding: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Issue Type :</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: 180,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Picker style={styles.pickerStyle} mode="dropdown">
            <Picker.Item label="Mca" value="java" />
          </Picker>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 100 }}>
        <View style={{ width: 170, padding: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Location :</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: 180,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Picker style={styles.pickerStyle} mode="dropdown">
            <Picker.Item label="Mca" value="java" />
          </Picker>
        </View>
      </View>

      <View style={{ flexDirection: "column", marginTop: 80 }}>
        <View style={{ width: 170, padding: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Description :
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            top: 10,
            height: 160,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <TextInput multiline />
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
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
            onPress={() => {}}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Create Issue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateIssue;

const styles = StyleSheet.create({
  pickerStyle: { height: 40, width: 160 },
});
