// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { GlobalContext } from '../../../Service/GlobalContxt';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
  const state = React.useContext(GlobalContext);


  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 0 }}>
      {/*Top Large Image */}
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1, bcakgroundColor: '#FF9900' }}>
          <View style={{ height: 100, backgroundColor: '#FF9900' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDriection: 'colmn' }}>
                <Text><Icon name={'account'} size={100} /></Text>
              </View>
              <View style={{ flex: 1, flexDriection: 'colmn' ,justifyContent:'center',}}>
                <Text style={{ color: 'black', fontSize: 20 }}>{state && state.State.user && state.State.user.personId}</Text>
              </View>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="LOGOUT"
          onPress={() => state.StateDispatch({ type: "LOGOUT" })}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;