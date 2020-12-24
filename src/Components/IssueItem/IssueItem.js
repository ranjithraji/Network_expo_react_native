import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'
import StatusBar from '../StatusBar/StatusBar'

const IssueItem = ({hrs, status, }) => {
    const changeHandler = (e) =>{

    }
    return (
        <View style={[styles.container]}>
            <View >
                <View style={styles.innerContainers}>
                <Text style={{alignSelf:'flex-end'}}>{hrs} Hours ago</Text>
                </View>
                <View style={styles.innerContainers}>
                <View style={{alignSelf:'flex-end'}}><StatusBar status={status} /></View>
                </View>
                <View style={styles.innerContainers}>
                <View><Text style={styles.label}>IssueType:</Text></View>
               <InputText 
                onchangeHandler={(e)=>changeHandler(e)}
                width={"50%"}
                />
                </View>
                <View style={styles.innerContainers}>
                <View><Text style={styles.label}>Location:</Text></View>
               <InputText 
                onchangeHandler={(e)=>changeHandler(e)}
                width={"50%"}
                />
                </View>
                <View style={styles.innerContainers}>
                <View><Text style={styles.label}>Assigned by:</Text></View>
               <InputText 
                onchangeHandler={(e)=>changeHandler(e)}
                width={"50%"}
                />
                </View>
                <View style={styles.innerContainers}>
                    <Button 
                    type={white}
                    title={'View >>>'}
                    greenText
                    pressFunction={()=>{}}
                    />
                </View>

            </View>
        </View>
    )
}

export default IssueItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        
    },
    innerContainers:{
        flex:1,
        flexDirection:'row',
        marginVertical:10,  
    },
    label:{
        fontWeight:'bold'
    }


})
