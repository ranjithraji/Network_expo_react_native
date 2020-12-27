// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inquiry from '../../Screens/InquiryScreen';
import Issues from '../../Screens/IssuesScreen';
import Notification from '../../Screens/Issues';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';
import HomeScreen from '../../Screens/HomeScreen';
import InquiryScreen from '../../Screens/InquiryScreen';
import { createIssue } from '../../../Service/ApiService';
import NotAssIssueScreen from '../../Screens/NotAssIssueScreen';
import { Ionicons } from '@expo/vector-icons'; 
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

const BellIcon =({nav}) =>{
  const navToNotify =()=>{
    nav.navigate('Notification');
  }
  return (
    <View style={{ flexDirection: 'row' ,paddingEnd:10}}>
      <TouchableOpacity onPress={navToNotify}>
        {/*Donute Button Image */}
        <Ionicons name={'ios-notifications-outline'} size={30} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="MyHome"

      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight:() => (<BellIcon nav={navigation}/>),
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
          headerRight:()=>(<BellIcon nav={navigation}/>),
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
        headerRight:()=>(<BellIcon nav={navigation}/>),
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
          headerRight:()=>(<BellIcon nav={navigation}/>),
        }}
      />
      <Stack.Screen
        name="IssuesDetails"
        component={InquiryScreen}
        options={{
          title: 'Inquiry',
          headerStyle: {
            backgroundColor: '#FF9900',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, //Set Header Title
          headerRight:()=>(<BellIcon nav={navigation}/>),
        }}
      />
      <Stack.Screen
        name="AddIssue"
        component={createIssue}
        options={{
          title: 'Add Inquiry',
          headerStyle: {
            backgroundColor: '#FF9900',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, //Set Header Title
          headerRight:()=>(<BellIcon nav={navigation}/>),
        }}
      />
    </Stack.Navigator>
  );
}

function fourthScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="NotAssIssueScreen"
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
        headerRight:()=>(<BellIcon nav={navigation}/>),
      }}
    >
      <Stack.Screen
        name="IssuesDetails"
        component={InquiryScreen}
        options={{
          title: 'Inquiry',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, //Set Header Title
          headerRight:()=>(<BellIcon nav={navigation}/>),
        }}
      />
      <Stack.Screen
        name="NotAssIssueScreen"
        component={NotAssIssueScreen}
        options={{
          title: 'Not Assiging Issues',
          headerStyle: {
            backgroundColor: '#FF9900',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, //Set Header Title
          headerRight:()=>(<BellIcon nav={navigation}/>),

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
        headerRight:()=>(<BellIcon nav={navigation}/>),

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
        headerRight:()=>(<BellIcon nav={navigation}/>),

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
        <Drawer.Screen
          name="myNotAssigingIssues"
          options={{ drawerLabel: 'Not Assiging Inquriy' }}
          component={fourthScreenStack}
        />
      </Drawer.Navigator>

    </NavigationContainer>

  );
}

export default App;