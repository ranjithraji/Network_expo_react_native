import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { getOneFacIssues, getOneNetIssues } from "../../Service/ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../../Service/GlobalContxt";
import IssueUser from "../Containers/IssueAction/IssueUser";
import IssueVerifyBtn from "../Containers/IssueAction/IssueVerifyBtn";
import IssueAdmin from "../Containers/IssueAction/IssueAdmin";
import IssueCompleteBtn from "../Containers/IssueAction/IssueCompleteBtn";

const InquiryScreen = ({ route }) => {
  const { id } = route.params;
  const [inquiry, setInquiry] = useState();
  const [someId, setSomeId] = React.useState();

  const { State } = React.useContext(GlobalContext);
  const { userType } = State;

  const getOneInquiry = async () => {
    let response;
    try {
      if (userType === "Faculty") {
        console.log('hello');
        response = await getOneFacIssues(State.token, id);
      }
      if (userType !== "Faculty") {
        response = await getOneNetIssues(State.token, id);
      }
      
      if (response.success === true) {
        setInquiry(response.issues);
      }
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    getOneInquiry();
  }, [someId]);

  return (
    <SafeAreaView style={{ padding: 0 }}>
      <ScrollView style={{ paddingVertical: 10, height: "100%" }}>
        {inquiry && (
          <View style={style.issueCard}>
            <View style={{ paddingVertical: 10 }}>
              <View style={style.rowView}>
                <View style={style.dataHeadRow}>
                  <Text style={style.dataHeadRowText}>Issue Type :</Text>
                </View>
                <View style={style.dataRow}>
                  <Text style={style.dataValueRow}>{inquiry.issueType}</Text>
                </View>
              </View>

              <View style={style.rowView}>
                <View style={style.dataHeadRow}>
                  <Text style={style.dataHeadRowText}>Location :</Text>
                </View>
                <View style={style.dataRow}>
                  <Text style={style.dataValueRow}>{inquiry.location}</Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  marginTop: 40,
                  borderWidth: 1.5,
                  borderColor: "#d2d2d2",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 10,
                  }}
                >
                  <View style={style.dataHeadRow}>
                    <Text style={style.dataHeadRowText}>Assigned by :</Text>
                  </View>
                  <View style={style.dataRow}>
                    <Text style={style.dataValueRow}>
                      {inquiry.assignedBy
                        ? inquiry.assignedBy.userName
                        : "Not Assigned"}
                    </Text>
                  </View>
                </View>

                <View style={style.rowView}>
                  <View style={style.dataHeadRow}>
                    <Text style={style.dataHeadRowText}>Date & Time :</Text>
                  </View>
                  <View style={style.dataRow}>
                    <Text style={style.dataValueRow}>{"rama"}</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    marginTop: 10,
                    marginBottom: 20,
                  }}
                >
                  <View style={{ width: 170, padding: 10 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        letterSpacing: 1,
                      }}
                    >
                      Description :
                    </Text>
                  </View>
                  <View
                    style={{
                      top: 10,
                      height: 160,
                      borderWidth: 1.5,
                      borderColor: "#d2d2d2",
                      borderRadius: 20,
                      padding: 10,
                    }}
                  >
                    <Text>{inquiry.description}</Text>
                  </View>
                </View>
              </View>
              {userType === "Faculty" ? (
                <IssueUser status={inquiry.status} />
              ) : (
                <IssueAdmin />
              )}
              {userType === "Faculty" && inquiry.status === "Complete" && (
                <IssueVerifyBtn />
              )}
              {userType !== "Faculty" && inquiry.status === "In Progress" && <IssueCompleteBtn />}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InquiryScreen;

const style = StyleSheet.create({
  issueCard: {
    padding: 15,
    // borderWidth: 1,

    // height: 300,
    borderRadius: 20,
  },
  tag: {
    paddingHorizontal: 20,
    alignItems: "flex-end",
  },
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
    marginTop: 40,
  },
  dataHeadRow: { width: 120 },
  dataHeadRowText: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  dataValueRow: { fontSize: 12, textAlign: "left", paddingLeft: 20, top: 3 },
});
