import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../../Screens/SignUpScreen';
import LoginScreen from '../../Screens/LoginScreen';


const Stack = createStackNavigator();

const StraupStackNavigation = ({ navigation }) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login"
                component={SignUpScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="RegEducationForm"
                component={LoginScreen}
                options={{
                    title: 'My EducationForm',
                    headerStyle: {
                        backgroundColor:'yellow',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerLeft: () => (<Icons.Button name="bars" color={Color.whiteColor} style={{ backgroundColor: Color.primaryColor }} size={26} onPress={() => navigation.openDrawer()} />)
                }}
            />
        </Stack.Navigator>
    )
}

export default StraupStackNavigation

const styles = StyleSheet.create({})
