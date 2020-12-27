import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import HomeScreen from '../../Screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeStack = () => {
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };


    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="MyHome"
            screenOptions={{
                headerLeft: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={toggleDrawer}>
                            {/*Donute Button Image */}
                            <Image
                                source={{
                                    uri:
                                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                                }}
                                style={{ width: 25, height: 25, marginLeft: 5 }}
                            />
                        </TouchableOpacity>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#FF9900',
                },
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }, //Set Header Title
            }}
        >
            <Stack.Screen
                name="MyHome"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#FF9900',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }, //Set Header Title//Set Header Title
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
