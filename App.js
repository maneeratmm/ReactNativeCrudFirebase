import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native'; //step 1
import {createStackNavigator} from '@react-navigation/stack'  //step 2

import { StyleSheet, Text, View } from 'react-native';

import AddUserScreen from './screens/AddUserScreen';
import UserScreen from './screens/UserScreen';
import UserDetailScreen from './screens/UserDetailScreen';

const Stack = createStackNavigator(); //step 3

//step 4
function MyStack(){ 
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#0085E6'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
      }}
    >
      <Stack.Screen 
        name = "AddUserScreen"
        component={AddUserScreen}
        options={{title:'Add User'}}
      />
      <Stack.Screen 
        name = "UserScreen"
        component={UserScreen}
        options={{title:'User Screen'}}
      />
      <Stack.Screen 
        name = "UserDetailScreen"
        component={UserDetailScreen}
        options={{title:'User Detail Screen'}}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    //step 5
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
