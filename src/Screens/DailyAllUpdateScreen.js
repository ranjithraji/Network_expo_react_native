import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { getAllEngDailyUpdate, getAllFacDailyUpdate } from '../../Service/ApiService';
import { GlobalContext } from '../../Service/GlobalContxt';
import DailyUpdateScreen from './dailyUpdateScreen';
const userType = ['Network_Admin', 'Network_Engineer', 'Faculty']

const DailyAllUpdateScreen = () => {
    const [dailyupdate, setDailyupdate] = React.useState([]);
    const { State } = React.useContext(GlobalContext)
    React.useEffect(() => {
        if (State.token) {
            getFuc(State.token)
        }
        else {
            State.StateDispatch({ type: 'LOGOUT' })
        }
    }, [])

    const getFuc = async (token) => {
            await getAllFacDailyUpdateFuc(token)
    }

    const getAllFacDailyUpdateFuc = async (token) => {
        let result
        try {
            if (State.userType === userType[2]) {
                result = await getAllFacDailyUpdate(token)
            }
            else if (State.userType === userType[1]) {
                result = await getAllEngDailyUpdate(token)
            }
            if (result.success) {
                console.log(result.dailyUpdate, 'sjasja');
                setDailyupdate(result.dailyUpdate)
            }
            else {
                alert(result.error)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const _renderer = (i) => {
        return (
             State.userType === userType[1] ?
                <DailyUpdateScreen daily={true}
                    data={dailyupdate[i]}
                />
                :
                State.userType === userType[2] &&
                <DailyUpdateScreen
                    data={dailyupdate[i]}
                />
        );
    }
    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: 'white', }}>
            <View style={{ flex: 0.8, padding: 10, marginTop: 20 }}>
                <FlatList
                    data={dailyupdate}
                    keyExtractor={(item) => item._id}
                    renderItem={({ index }) => _renderer(index)}
                />
            </View>
        </View >
    )
}

export default DailyAllUpdateScreen

const styles = StyleSheet.create({})
