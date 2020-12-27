import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const IssueVerifyBtn = () => {
  return (
    <View style={{ paddingHorizontal: 10, flexDirection: "row" , top:20}}>
      <View>
        <Text>*Your Issue Has Been Fixed.</Text>
        <Text>Please Confirm to Verify</Text>
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
    </View>
  );
};

export default IssueVerifyBtn;

const styles = StyleSheet.create({});
