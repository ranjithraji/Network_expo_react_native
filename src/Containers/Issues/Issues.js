import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Button from "../../Components/Button/Button";

const Issues = ({ data }) => {
  const { issueType, location, assignedBy, reportingAt, status } = data;
  return (
    <View style={style.issueCard}>
      <View style={style.tag}>
        <View style={{ marginTop: 5 }}>
          <StatusBar status={status} />
        </View>
      </View>

      <View style={{ paddingVertical: 10 }}>
        <View style={style.rowView}>
          <View style={style.dataHeadRow}>
            <Text style={style.dataHeadRowText}>Issue Type :</Text>
          </View>
          <View style={style.dataRow}>
            <Text style={style.dataValueRow}>{issueType}</Text>
          </View>
        </View>

        <View style={style.rowView}>
          <View style={style.dataHeadRow}>
            <Text style={style.dataHeadRowText}>Location :</Text>
          </View>
          <View style={style.dataRow}>
            <Text style={style.dataValueRow}>{location}</Text>
          </View>
        </View>

        <View style={style.rowView}>
          <View style={style.dataHeadRow}>
            <Text style={style.dataHeadRowText}>Assigned by :</Text>
          </View>
          <View style={style.dataRow}>
            <Text style={style.dataValueRow}>{assignedBy}</Text>
          </View>
        </View>

        <View style={style.rowView}>
          <View style={style.dataHeadRow}>
            <Text style={style.dataHeadRowText}>Reporting At :</Text>
          </View>
          <View style={style.dataRow}>
            <Text style={style.dataValueRow}>{reportingAt}</Text>
          </View>
        </View>
      </View>

      <View style={style.tag}>
        <Button title={"view >>"} type={"primary"} width={100} radius={10} />
      </View>
    </View>
  );
};

export default Issues;

const style = StyleSheet.create({
  issueCard: {
    padding: 15,
    borderWidth: 1,

    height: 300,
    borderRadius: 20,
  },
  tag: {
    paddingHorizontal: 20,
    alignItems: "flex-end",
  },
  dataRow: { width: 160, height: 25, borderRadius: 5, borderWidth: 1 },
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
