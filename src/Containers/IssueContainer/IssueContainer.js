import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Socket from "socket.io-client";
import IssueCard from "../IssueCard/IssueCard";
import { GlobalContext } from "../../../Service/GlobalContxt";
import { useNavigation } from "@react-navigation/native";
const IssueContainer = () => {
  const { State } = React.useContext(GlobalContext);
  const nav = useNavigation();
  const [Issues, setIssues] = useState([
    {
      _id: "1",
      issueType: "Network Issue",
      AssignedBy: "faculty",
      status: "In Progress",
      location: "location",
      createdAt: "5",
    },
  ]);
  const sc = async () => {
    const con = await Socket.io.connect("http://192.168.43.207:2000", {
      reconnection: true,
    });
    con.on("FromAPI", msg => {
      let res = JSON.parse(msg);
       console.log("MSG",res.notifications)
     try {
      let foodArr = [];
      for (let i = 0; i < res.notifications.length; i++) {
        const e = res.notifications[i];
      
        let d = {
          _id: e._id,
          issueType: e.issueId.issueType,
          AssignedBy: e.issueId.assignedBy.userName,
          status: e.status,
          location: e.issueId.location,
          createdAt: moment(e.createdAt, "YYYYMMDD").fromNow(),
        };
        foodArr.push(d);
      }
      setIssues(foodArr)
     
     } catch (error) {
       setIssues([]);
     }
    
      // setIssues(res.notifications);
      // console.log([...Issues]);
    });
    con.on("connect", () => {});
    const getApiAndEmit = async () => {
      con.emit("getNotified", {
        token: State.token,
      });
    };
    let interval = setInterval(() => getApiAndEmit(), 5000);
  };
  useEffect(() => {
    sc();
  }, []);
  useEffect(() => {}, []);
  const _renderer = i => {
   if (Issues)  { return <IssueCard notifications={true} data={Issues[i]}  pressFunction={pressFunction}/>};
  };
  const pressFunction = (id) =>{
    nav.navigate('IssuesDetails',{id:id})
  }
  return (
    <View style={styles}>
      <FlatList
        data={Issues}
        keyExtractor={item => item._id}
        renderItem={({ index }) => _renderer(index)}
      />
    </View>
  );
};
export default IssueContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
