import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalContext } from "../../../Service/GlobalContxt";
import CustomDatePicker from "../../Components/DatePicker/DatePicker";
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { assignIssuse } from "../../../Service/ApiService";

const IssueAdmin = ({ id }) => {
  const [dateDue, setDateDue] = React.useState(new Date());
  const [dateStringDue, setDateStringDue] = React.useState('');
  const { State } = React.useContext(GlobalContext);
  const [showForm, setShowForm] = useState(false);
  const navigation = useNavigation()
  const [showDue, setShowDue] = useState(false);


  const onChangeDue = (event, selectedDate) => {
    setShowDue(false)
    console.log(selectedDate, 'hh')
    setDateStringDue(moment(selectedDate).format('DD/MM/YYYY') || moment(new Date()).format('DD/MM/YYYY'));
    setDateDue(selectedDate || new Date());
  }
  const showOverlayDue = () => {
    setShowDue(true)
  }
  const assignFuc = async () => {
    if (dateStringDue === '') {
      alert('Please select the reporting date')
    }
    else {
      let result
      try {
        result = await assignIssuse(State.token, { "reportingAt": dateStringDue }, id)
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
  }

  return (
    <React.Fragment>
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
            Assign Issue To :
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            borderColor: "#d2d2d2",
            borderRadius: 20,
            top: 10,
            height: 45,
            padding: 8,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18 }}>{State && State.user && State.user.userName}</Text>
        </View>
      </View>
      <View style={style.rowView}>
        <View style={style.dataHeadRow}>
          <Text style={style.dataHeadRowText}>Reporting At:</Text>
        </View>
        <View >
          <CustomDatePicker onChange={(event, selectedDate) => onChangeDue(event, selectedDate)} dateString={dateStringDue} date={dateDue} show={showDue} showOverlay={() => showOverlayDue()} placeholder={'Reporting Date eg: 641605'} />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          top: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => { assignFuc() }}
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
              Assign
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default IssueAdmin;

const style = StyleSheet.create({
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
    marginTop: 20,
  },
  dataHeadRow: { width: 120 },
  dataHeadRowText: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  boxShadow: {
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.66,
    elevation: 3,
    borderRadius: 10,
  },
  dataValueRow: { fontSize: 12, textAlign: "left", paddingLeft: 20, top: 3 },
});
