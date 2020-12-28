import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StatusBar from "../../Components/StatusBar/StatusBar";
const IssueUser = ({ status, data }) => {
  console.log(data, 'inprogress');
  return (
    <React.Fragment>
      <View
        style={{
          flexDirection: "column",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <View style={{ width: 180, padding: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Issue assigned To :
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            borderColor: "#d2d2d2",
            borderRadius: 20,
            top: 10,
            height: 50,

            padding: 10,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {data.assignedBy && data.assignedBy.userName
              ? data.assignedBy.userName
              : "Not Assigned"}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          // marginBottom: 20,
        }}
      >
        <View style={{ width: 180, padding: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Issue status :
          </Text>
        </View>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <StatusBar status={status} />
        </View>
      </View>
    </React.Fragment>
  );
};

export default IssueUser;

const styles = StyleSheet.create({});
