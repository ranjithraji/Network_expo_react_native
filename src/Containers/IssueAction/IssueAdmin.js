import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const IssueAdmin = () => {
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
            Assign Issue To :
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
          <Text style={{ textAlign: "center" }}>Mr. Manitanace</Text>
        </View>
      </View>
      <View style={style.rowView}>
        <View style={style.dataHeadRow}>
          <Text style={style.dataHeadRowText}>Reporting At:</Text>
        </View>
        <View style={style.dataRow}>
          <Text style={style.dataValueRow}>{"rama"}</Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          top: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              Assign
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default IssueAdmin;

const style = StyleSheet.create({
  dataRow: {
    width: 170,
    height: 25,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#d2d2d2",
    borderRadius: 5,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  dataHeadRow: { width: 120 },
  dataHeadRowText: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  dataValueRow: { fontSize: 12, textAlign: "left", paddingLeft: 20, top: 3 },
});
