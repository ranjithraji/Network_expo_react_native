import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import StatusBar from "../Components/StatusBar/StatusBar";
import { getOneFacIssues } from "../../Service/ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InquiryScreen = () => {
  const [inquiry, setInquiry] = useState();
  const [someId, setSomeId] = React.useState();

  const token =AsyncStorage.getItem('token')

  const getOneInquiry = async () => {
    let response;
    try {
      response = await getOneFacIssues(token, "5fe6de99814a23125fd893d0");
      // console.log(response, "response");
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
      <ScrollView
        style={{ paddingVertical: 10, borderWidth: 1, height: "100%" }}
      >
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
                  borderRadius: 10,
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
                      {inquiry.assignedBy ? inquiry.assignedBy.userName : "Not Assigned"}
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
                      borderWidth: 1,
                      top: 10,
                      height: 160,
                      borderRadius: 10,
                      padding: 10,
                    }}
                  >
                    <Text>{inquiry.description}</Text>
                  </View>
                </View>
              </View>

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
                    borderWidth: 1,
                    top: 10,
                    height: 50,
                    borderRadius: 10,
                    padding: 10,
                  }}
                >
                  <Text style={{ textAlign: "center" }}>Mr. Manitanace</Text>
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
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <StatusBar status={inquiry.status} />
                </View>
              </View>
            </View>

            <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
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
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    Verify
                  </Text>
                </TouchableOpacity>
              </View>
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
  dataRow: { width: 170, height: 25, borderRadius: 5, borderWidth: 1 },
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
