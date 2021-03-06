import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Button = ({type, outlined, title,greenText, pressFunction}) => {
const bgColor = type ==='primary'?'#1E538F':
type === 'orange'?'#FD820B':
type === 'white'? '#FFFFFF':'#FFFFFF';

const color = type ==='primary'?'#FFFFFF':
type === 'orange'?'#FFFFFF':
type === 'white'? '#000000':greenText?'#23BB9F':'#FFFFFF';
    return (
        <Pressable
        onPress={()=>pressFunction()}
        style={[styles.buttonContainer, {backgroundColor:bgColor}, outlined?{borderWidth:0.5}:null, type!=='primary'?styles.elevate:null ]}>
            <Text style={[styles.title,{color:color}]} >{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer:{
        height:40,
        padding:10,
        borderRadius:20
    },
    title:{
        fontWeight:'bold',
        fontSize:14
    },
    elevate:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        
    }


})
