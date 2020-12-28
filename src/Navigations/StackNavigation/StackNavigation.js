import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../../Screens/SignUpScreen';
import LoginScreen from '../../Screens/LoginScreen';
import VerifyScreen from '../../Screens/VerifyScreen'
import { NavigationContainer } from '@react-navigation/native';
import Issues from '../../Screens/Issues'


const Stack = createStackNavigator();

const StraupStackNavigation = ({ navigation }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="SignUp"
                    component={SignUpScreen}
                    options={{
                        headerShown: false
                    }}
                />
                 <Stack.Screen name="Verify"
                    component={VerifyScreen}
                    options={{
                        headerShown: false
                    }}
                />
                
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StraupStackNavigation

const styles = StyleSheet.create({})
