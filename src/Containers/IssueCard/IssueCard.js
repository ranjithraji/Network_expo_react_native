import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Button from "../../Components/Button/Button";
import moment from 'moment'
const IssueCard = ({ issue , navigation}) => {
  const data=issue
  // const {issueType, location, assignedBy, reportingAt} = data;
  return (
    <View style={style.issueCard} key={data._id}>
      <View style={style.tag}>
        <Text>{moment(data.createdAt).startOf('hour').fromNow()}</Text>
        <View style={{ marginTop: 20 }}>
          <StatusBar status={data.status || "In Progress"} />
        </View>
      </View>
      <View style={{ paddingVertical: 10 }}>
        <View style={style.rowView}>
          <View style={style.dataHeadRow}>
            <Text style={style.dataHeadRowText}>Issue Type :</Text>
          </View>
          <View style={style.dataRow}>
            <Text style={style.dataValueRow}>{data.issueId.issueType || "nn"}</Text>
          </View>
        </View>
        <View style={style.rowView}>
          <View style={style.dataHeadRow}>
            <Text style={style.dataHeadRowText}>Location :</Text>
          </View>
          <View style={style.dataRow}>
            <Text style={style.dataValueRow}>{data.issueId.location || "loc"}</Text>
          </View>
        </View>
        <View style={style.rowView}>
          <View style={style.dataHeadRow}>
            <Text style={style.dataHeadRowText}>Assigned by :</Text>
          </View>
          <View style={style.dataRow}>
            <Text style={style.dataValueRow}>{data.issueId && data.issueId.assignedBy && data.issueId.assignedBy.userName || "ham"}</Text>
          </View>
        </View>
        {/* <View style={style.rowView}>
                    <View style={style.dataHeadRow}>
                        <Text style={style.dataHeadRowText}>Reporting at :</Text>
                    </View>
                    <View style={style.dataRow}>
                        <Text style={style.dataValueRow}>MCA</Text>
                    </View>
                </View> */}
      </View>
      <View style={style.tag}>
        <Button title={"view >>"} greenText  pressFunction={()=> navigation.navigate("IssuesDetails", { id:data.issueId._id })}/>
      </View>
    </View>
  );
};
export default IssueCard;
const style = StyleSheet.create({
  issueCard: {
    padding: 15,
    borderWidth: 1,
    margin: 30,
    height: 350,
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
