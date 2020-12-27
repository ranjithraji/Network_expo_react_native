import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { completeIssuse } from "../../../Service/ApiService";
import { GlobalContext } from "../../../Service/GlobalContxt";

const IssueCompleteBtn = ({ id }) => {
  const { State } = React.useContext(GlobalContext)
  const navigation = useNavigation()

  const CompleteFuc = async () => {
    let result
    try {
      result = await completeIssuse(State.token, id)
      if (result.success) {
        await alert(result.message)
        await navigation.navigate('MyHome')
      }
      else {
        alert(result.error)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{
      paddingHorizontal: 10, top: 10, justifyContent: "center",
      alignItems: "center",
    }}>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={() => { CompleteFuc() }}
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
