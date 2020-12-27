import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const IssueCompleteBtn = () => {
  return (
    <View style={{ paddingHorizontal: 10 , top:10, justifyContent: "center",
    alignItems: "center",}}>
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
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IssueCompleteBtn;

const styles = StyleSheet.create({});
