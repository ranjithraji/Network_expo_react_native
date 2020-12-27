import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavigationContainer from '@react-navigation/native';
import Drawer from '../Navigations/DrawerNavigation/DrawerNavigation'
import Store, { GlobalContext } from '../../Service/GlobalContxt';
import StraupStackNavigation from '../Navigations/StackNavigation/StackNavigation';
import Loading from '../Screens/Loading';

const CallingRoot = () => {

    const { State } = React.useContext(GlobalContext);
    console.log(State, 'State');
    return (
        <>
            {State && State.Auth ?
                < Drawer />
                :
                <StraupStackNavigation />
            }
        </>
    )
}

export default CallingRoot

const styles = StyleSheet.create({})
