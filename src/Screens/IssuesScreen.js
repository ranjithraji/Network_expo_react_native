import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Issues from "../Containers/Issues/Issues";
import IssueDate from "../data/issueData.json";
import API from "../../Service/ApiService";
import { getAllFacIssues } from "../../Service/ApiService";

const IssuesScreen = () => {
  const [AllIssues, setAllIssues] = React.useState();
  const [someId, setSomeId] = React.useState();

  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNmRjNWU4N2E2MTI2NGRjODViZTY1IiwiaWF0IjoxNjA4OTY1NjcxLCJleHAiOjE2MDkxNjU2NzF9.iCvGvGYOxbjpPOpDlMvzpuUzOqw14_ffRmoWkVDVZ5Q";

  const fetchData = async () => {
    console.log("resact");
    let response;
    try {
      response = await getAllFacIssues(token);
      if (response.success === true) {
        setAllIssues(response.issues);
      }
    } catch (error) {
      throw error;
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [someId]);

  console.log(AllIssues, "AllIssues");
  return (
    <SafeAreaView style={{ padding: 5 }}>
      <ScrollView>
        {AllIssues &&
          AllIssues.map((x, i) => (
            <View
              key={i}
              style={{ paddingVertical: 10, paddingHorizontal: 20 }}
            >
              <Issues data={x} key={i} />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default IssuesScreen;

const styles = StyleSheet.create({});
