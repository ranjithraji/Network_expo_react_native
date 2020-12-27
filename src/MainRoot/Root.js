import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavigationContainer from '@react-navigation/native';
import Drawer from '../Navigations/DrawerNavigation/DrawerNavigation'
import Store, { GlobalContext } from '../../Service/GlobalContxt';
import StraupStackNavigation from '../Navigations/StackNavigation/StackNavigation';
import CallingRoot from './CallingRoot'

const MainScreen = ({ children }) => {

    return (
        <Store>
            <CallingRoot />
        </Store>
    )
}

export default MainScreen

const styles = StyleSheet.create({})
