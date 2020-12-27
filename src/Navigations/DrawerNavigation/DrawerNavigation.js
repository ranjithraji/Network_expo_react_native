// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inquiry from '../../Screens/InquiryScreen';
import Issues from '../../Screens/IssuesScreen';
import Notification from '../../Screens/Issues';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';
import HomeScreen from '../../Screens/HomeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
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
  );
};

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="MyHome"

      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
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
          title: 'My Department',
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

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Inquiry"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
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
        name="Issues"
        component={Issues}
        options={{
          title: 'Your Inquiry',
          headerStyle: {
            backgroundColor: '#FF9900',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Issues"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#FF9900',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, //Set Header Title
      }}>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({ navigation }) => ({
          title: 'Notification',
          headerStyle: {
            backgroundColor: '#FF9900',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, //Set Header Title
        })}
      />
    </Stack.Navigator>
  );
}

function thirdScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Issues"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#FF9900',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, //Set Header Title
      }}>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
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
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#FF9900',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'My Department' }}
          component={HomeStack}
        />
        <Drawer.Screen
          name="Inquiry"
          options={{ drawerLabel: 'My Inquiry' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Notification"
          options={{ drawerLabel: 'Notification' }}
          component={thirdScreen}
        />
        <Drawer.Screen
          name="DailyUpdate"
          options={{ drawerLabel: 'DailyUpdate' }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>

    </NavigationContainer>

  );
}

export default App;