import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputText = ({onchangeHandler,placeHolder,width, margin }) => {
    return (
        <View style={[styles.container, {width:width, margin:margin}]}>
           <TextInput 
           placeholder={placeHolder}
           onChange={(e)=>onchangeHandler(e)}
           />
        </View>
    )
}

export default InputText;

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        height:40,
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
