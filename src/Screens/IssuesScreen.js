import React from "react";
import { StyleSheet, Text, View, RefreshControl,SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Issues from "../Containers/Issues/Issues";
import IssueDate from "../data/issueData.json";
import API from "../../Service/ApiService";
import { GlobalContext } from "../../Service/GlobalContxt";
import { getAllFacIssues, getAllNetEngIssues } from "../../Service/ApiService";

const IssuesScreen = ({ navigation }) => {
  const [AllIssues, setAllIssues] = React.useState();
  const [someId, setSomeId] = React.useState();
  const { State, StateDispatch } = React.useContext(GlobalContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const token = State.token;

  const fetchData = async () => {
    console.log("resact");
    let response;
    try {
      if (State.userType === "Faculty") {
        response = await getAllFacIssues(token);
      } else {
        response = await getAllNetEngIssues(token);
      }

      if (response.success === true) {
        alert(response.message);
        setAllIssues(response.issues);
      } else {
        alert(response.error);
      }
    } catch (error) {
      throw error;
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [someId]);
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // console.log(AllIssues, "AllIssues");
  return (
    <SafeAreaView style={{ padding: 5, flex: 1, backgroundColor: 'white', }}>
      <ScrollView
      refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
      >
        {AllIssues &&
          AllIssues.map((x, i) => (
            <View
              key={i}
              style={{ paddingVertical: 10, paddingHorizontal: 20 }}
            >
              <Issues data={x} key={i} navigation={navigation} />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default IssuesScreen;

const styles = StyleSheet.create({});
