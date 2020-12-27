import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
import { GlobalContext } from '../../Service/GlobalContxt'

const dailyUpdateScreen = (props) => {

    const { data } = props
    const userType = ['Network_Admin', 'Network_Engineer', 'Faculty']
    const { State, daily } = React.useContext(GlobalContext)

    return (
        <View style={{ flex: 0.8, backgroundColor: 'white', flexDirection: 'row', margin: 5 }}>
            <View key={data._id} style={{ flex: 1, backgroundColor: 'white', ...styles.boxShadow, margin: 3, marginTop: 10, padding: 20, flexDirection: 'column' }}>
                {!daily ?
                    <>
                        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 }}>{data.description}</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20 }}>
                                <Text style={{ textAlign: 'right', fontSize: 18, color: 'rgba(0, 0, 0, 0.52)' }}>{moment(data.createdAt).startOf('hour').fromNow()}</Text>
                            </View>
                        </View>
                    </>
                    :
                    (State && State.userType === userType[1]) && daily ?
                        <>
                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 1.2, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold' }}>{'Department :'}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'center' }}>{data.department}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 1.2, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold' }}>{'Create Daily Update by :'}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'center' }}>{data.createdBy.userName}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 1.2, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold' }}>{'Date :'}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'center' }}>{moment(data.createdAt).startOf('hour').fromNow()}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 1.2, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold' }}>{'Description :'}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 1.2, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'left' }}>{data.description}</Text>
                                </View>
                            </View>
                        </> : null
                }
            </View>
        </View>
    )
}

export default dailyUpdateScreen

const styles = StyleSheet.create({
    boxShadow: {
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.66,
        elevation: 8,
        borderRadius: 10,
    },
})
