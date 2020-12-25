import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Issues from "../Containers/Issues/Issues";
import IssueDate from "../data/issueData.json";

const IssuesScreen = () => {
  return (
    <SafeAreaView style={{ padding: 5 }}>
      <ScrollView>
        {IssueDate &&
          IssueDate.map((x, i) => (
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
              <Issues data={x} key={i} />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default IssuesScreen;

const styles = StyleSheet.create({});
