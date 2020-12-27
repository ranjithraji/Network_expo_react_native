import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View, TouchableOpacity, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const CustomDatePicker = (props) => {

    return (
        <View animation={'zoomInRight'} duration={1000} delay={100} >
            <TouchableOpacity onPress={props.showOverlay} style={[styles.boxShadow,styles.inputContainerStyle]}>
                {props.dateString ? (
                    <Text style={styles.textStyle}>{props.dateString}</Text>
                ) : (
                        <Text style={styles.placeholderStyle}>{props.placeholder}</Text>
                    )}
            </TouchableOpacity>
            <>
                {props.show &&
                    <DateTimePicker
                        value={props.date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={props.onChange}
                        style={{ backgroundColor: 'white' }}
                    />
                }
            </>

        </View>
    );
}

export default CustomDatePicker

const styles = StyleSheet.create({
    overlayStyle: {
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
    },
    headerStyle: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#000',
        borderBottomWidth: 1,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputContainerStyle: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 1,
        color: 'black',
        width: Dimensions.get('window').width/2,
        height: 40,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "#d2d2d2",
        borderRadius: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#000',
        marginHorizontal: 10,
    },
    textStyle: {
        fontSize: 16,
        marginHorizontal: 10,
        color: 'black'
    }
})