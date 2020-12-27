import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { getAllDepartMent, getAllFacDailyUpdate, getAllFacIssues } from '../../Service/ApiService'
import { GlobalContext } from '../../Service/GlobalContxt'
import IssueCard from '../Containers/IssueCard/IssueCard';
import moment from 'moment'
import Button from '../Components/Button/Button'
import DailyUpdateScreen from './dailyUpdateScreen';
const userType = ['Network_Admin', 'Network_Engineer', 'Faculty']
const HomeScreen = ({ navigation }) => {
    const [issues, setIssues] = useState([]);
    const [dailyupdate, setDailyupdate] = useState([]);
    const { State } = React.useContext(GlobalContext)
    useEffect(() => {
        if (State.token) {
            getFuc(State.token)
        }
        else {
            State.StateDispatch({ type: 'LOGOUT' })
        }
    }, [])

    const getFuc = async (token) => {
        if (State.userType === userType[2]) {
            await getAllFacDailyUpdateFuc(token)
            await getAllFacIssuesFuc(token)
        }
        else {

        }
    }

    const getAllFacDailyUpdateFuc = async (token) => {
        let result
        try {
            result = await getAllFacDailyUpdate(token)
            if (result.success) {
                setDailyupdate(result.dailyUpdate)
            }
            else {
                alert(result.error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllFacIssuesFuc = async (token) => {
        let result
        try {
            result = await getAllFacIssues(token)
            if (result.success) {
                setIssues(result.issues)
            }
            else {
                alert(result.error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, marginVertical: 10, padding: 10 }}>
                    <View style={{ flex: 0.8, backgroundColor: 'white', padding: 10, marginTop: 20 }}>
                        <View style={{ flex: 1, backgroundColor: 'white', height: 'auto' }}>
                            <View style={{ flex: 0.2, backgroundColor: 'white', flexDirection: 'row', }}>
                                <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold', fontSize: 18 }}>
                                    {"Recent Daily Update"}
                                </Text>
                                <TouchableWithoutFeedback onPress={() => { navigation.navigate('DailyUpdate') }}>
                                    <Text style={{ flex: 1, textAlign: 'right', color: '#1E538F', fontWeight: 'bold', fontSize: 16 }}>
                                        {'View all >>'}
                                    </Text>
                                </TouchableWithoutFeedback>
                            </View>
                            {dailyupdate && dailyupdate.length !== 0 ?
                                <DailyUpdateScreen data={dailyupdate[0]} />
                                :
                                <View style={{ flex: 0.8, backgroundColor: 'white', flexDirection: 'row', marginTop: 10, height: Dimensions.get('window').height / 3 }}>
                                    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center', ...styles.boxShadow }}>
                                        <Text style={{ fontSize: 19, fontWeight: '400' }}>No daily Update</Text>
                                    </View>
                                </View>
                            }
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', padding: 10, marginTop: 20, height: Dimensions.get('window').height / 1.8 }}>
                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <View style={{ flex: issues && issues.length !== 0 ? 1 : 0.2, backgroundColor: 'white', flexDirection: 'row' }}>
                                <Text style={{ flex: 1, textAlign: 'left', fontWeight: 'bold', fontSize: 18 }}>
                                    {"Your recent Inquiry"}
                                </Text>
                                <TouchableWithoutFeedback onPress={() => { navigation.navigate('Inquiry') }}>
                                    <Text style={{ flex: 0.3, textAlign: 'right', color: '#1E538F', fontWeight: 'bold', fontSize: 16 }}>
                                        {'View all >>'}
                                    </Text>
                                </TouchableWithoutFeedback>
                            </View>
                            {issues && issues.length !== 0 ?
                                <IssueCard
                                    data={issues[0]}
                                />
                                :
                                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                                    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center', ...styles.boxShadow }}>
                                        <Text style={{ fontSize: 19, fontWeight: '400' }}>No daily Update</Text>
                                    </View>
                                </View>
                            }
                        </View>
                    </View>
                    <View style={{ flex: 0.3, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginTop: 10, }}>
                        <View style={{ padding: 20 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#1E538F",
                                    width: 160,
                                    height: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 5,
                                }}
                                onPress={() => { State.userType != userType[2] ? navigation.navigate('AddInquiry') : State.userType !== userType[0] && navigation.navigate('AddDailyUpdate') }}
                            >
                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }} > {State.userType !== userType[2] ? 'Add Inquiry' : State.userType !== userType[0] && 'Add DailyUpdates'} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    boxShadow: {
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.66,
        elevation: 3,
        borderRadius: 10,
    },
})
