import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getAllLocations, createIssue } from "../../Service/ApiService";
import { GlobalContext } from "../../Service/GlobalContxt";

const CreateIssue = () => {
  const [location, setLocations] = React.useState();
  const { State, StateDispatch } = React.useContext(GlobalContext)

  const token = State.token

  const [issueData, setIssueData] = React.useState({
    issueType: "",
    location: "",
    description: "",
  });
  const [someId, setSomeId] = React.useState();
  const issTypes = [
    "No internet",
    "Slow Internet",
    "System maintenance",
    "Software Installation",
  ];

  const getAllLocationData = async () => {
    let response;
    try {
      response = await getAllLocations();
      if (response.success === true) {
        setLocations(response.Location);
        // getAllDeparts();
      }
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    getAllLocationData();
  }, [someId]);

  const token =State.token;
  const onSubmit = async () => {
    let response;
    try {
      response = await createIssue(token, issueData);
      if (response.success === true) {
        alert(response.message)
        console.log("sucess", response);
      }
      else{
        alert(response.error)
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <React.Fragment>
      {location && (
        <View style={{ flex: 1, padding: 15 }}>
          <View style={{ flexDirection: "row", top: 50 }}>
            <View style={{ width: 170, padding: 10 }}>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Issue Type :
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                width: 180,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Picker
                style={styles.pickerStyle}
                mode="dropdown"
                selectedValue={issueData.issueType}
                onValueChange={val =>
                  setIssueData({ ...issueData, issueType: val })
                }
              >
                {issTypes &&
                  issTypes.map((x, i) => <Picker.Item label={x} value={x} />)}
              </Picker>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 100 }}>
            <View style={{ width: 170, padding: 10 }}>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Location :
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                width: 180,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Picker
                style={styles.pickerStyle}
                mode="dropdown"
                selectedValue={issueData.location}
                onValueChange={val =>
                  setIssueData({ ...issueData, location: val })
                }
              >
                {location &&
                  location.map((x, i) => (
                    <Picker.Item label={x.name} value={x.name} />
                  ))}
              </Picker>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginTop: 50 }}>
            <View style={{ width: 170, padding: 10 }}>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
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
              <TextInput
                multiline
                onChangeText={txt =>
                  setIssueData({ ...issueData, description: txt })
                }
              />
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
          >
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
                onPress={() => onSubmit()}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  Create Issue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </React.Fragment>
  );
};

export default CreateIssue;

const styles = StyleSheet.create({
  pickerStyle: { height: 40, width: 160 },
});
