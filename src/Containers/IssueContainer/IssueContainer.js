import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React,{useEffect,useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Socket  from 'socket.io-client';
import IssueCard from '../IssueCard/IssueCard';

const IssueContainer = () => {
    const [Issues, setIssues] = useState([
        {
            _id:'1',
            issueType:'Network Issue',
            AssignedBy:'faculty',
            status:"In Progress",
            location:"location",
            createdAt:"5"
        }
    ]);
   
    const sc = async() =>{
        const con =  await Socket.io.connect("http://192.168.43.207:2000",{reconnection: true});
       con.on("FromAPI", msg =>{
         let res = JSON.parse(msg)
        //  console.log("MSG",res.notifications)
         let foodArr =[];
         for (let  i= 0; i < res.notifications.length; i++) {
             const e = res.notifications[i];
             let d=  {
                 _id:e._id,
                issueType:e.issueId.issueType,
                AssignedBy:e.issueId.assignedBy.userName,
                status:e.status,
                location:e.issueId.location,
                createdAt: moment(e.createdAt, "YYYYMMDD").fromNow(),
             }
             foodArr.push(d);
            
         }
         setIssues(foodArr);
        // setIssues(res.notifications);
        // console.log([...Issues]);
       })
       con.on("connect", () => {

    });
    const getApiAndEmit =async() =>{
        con.emit("getNotified", {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNGU5MGVhNzdlZTkzOTYwZGE1ZWMyIiwiaWF0IjoxNjA4OTY0MzM0LCJleHAiOjE2MDkxNjQzMzR9.QivNLURRCk5Y5OhOTMpyA4V8E15D0tZdoJURgwMqOJI"});
    }
   let interval = setInterval(() => getApiAndEmit(), 5000);

       }
    useEffect(() => {
        sc();
    }, [])

   useEffect(() => {
       
   }, [])
    const _renderer = (i) =>{
        return  (<IssueCard 
            notifications={true}
            data={Issues[i]}
            />);
    }
    return (
        <View style={styles}>
            <FlatList 
            data={Issues}
            keyExtractor={(item) => item._id}
            renderItem={({index}) => _renderer(index)}
            />
        </View>
    )
}

export default IssueContainer;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
