import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect,useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Socket  from 'socket.io-client';
import IssueCard from '../IssueCard/IssueCard';

const IssueContainer = () => {
    const [Issues, setIssues] = useState([{}]);
   
    const sc = async() =>{
        const con =  await Socket.io.connect("http://192.168.43.207:2000",{reconnection: true});
       con.on("FromAPI", msg =>{
         let res = JSON.parse(msg)
         console.log("MSG",res)
        setIssues(res);
       })
       con.on("connect", () => {

    });
    const getApiAndEmit =async() =>{
        con.emit("getNotified", {token: await AsyncStorage.getItem('token')});
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
            data={IssueCard[i]}
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
