import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { verifyIssuse } from "../../../Service/ApiService";
import { GlobalContext } from "../../../Service/GlobalContxt";

const IssueVerifyBtn = ({ id }) => {
  const { State } = React.useContext(GlobalContext)
  const navigation = useNavigation()

  const verifyFuc = async () => {
    let result
    try {
      result = await verifyIssuse(State.token, id)
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
    <View style={{ paddingHorizontal: 10, flexDirection: "row", top: 20 }}>
      <View>
        <Text>*Your Issue Has Been Fixed.</Text>
        <Text>Please Confirm to Verify</Text>
      </View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={() => { verifyFuc() }}
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
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IssueVerifyBtn;

const styles = StyleSheet.create({});
