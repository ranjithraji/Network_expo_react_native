import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { getAllDepartMent } from "../../Service/ApiService";

const CreateDailyUpdate = () => {
  const [getDepartment, setGetDepartMent] = useState([])
  const [dailyData, setdailyData] = React.useState({
    department: "",
    description: "",
  });

  React.useEffect(() => {
    getAllDepartMentFuc();
  }, [])

  const getAllDepartMentFuc = async (req, res) => {

    let result
    try {
      result = await getAllDepartMent();
      if (result.success) {
        setGetDepartMent(result.department)
      }

    } catch (error) {
      console.log(error);
    }

  }

  const onSubmit = async () => {
    console.log(dailyData, "dailyAbout");
    //   let response
    //   try {

    //   } catch (error) {
    //       throw

    //   }
  };
  return (
    <View style={{ flex: 1, padding: 35 }}>
      <View style={{ flexDirection: "column", marginTop: 50 }}>
        <View style={{ padding: 10 }}>
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
              setdailyData({ ...dailyData, description: txt })
            }
          />
        </View>
      </View>
      <View style={{ flexDirection: "column", top: 50 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Select Department :
          </Text>
        </View>
        <View
          style={{
            // padding: 10,
            borderWidth: 1,
            top: 10,
            left: 20,
            width: 300,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Picker
            style={styles.pickerStyle}
            mode="dropdown"
            selectedValue={dailyData.department}
            onValueChange={data =>
              setdailyData({ ...dailyData, department: data })
            }
          >
            {getDepartment && getDepartment.lenght !== 0 && getDepartment.map(data => {
              return <Picker.Item label={data.name} value={data.name} />
            })}
          </Picker>
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
                width: 200,
                height: 42,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => onSubmit()}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Create Daily Updates
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateDailyUpdate;

const styles = StyleSheet.create({
  pickerStyle: { height: 40, width: "100%" },
  inputView: {
    borderWidth: 0.2,
    paddingHorizontal: 45,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
