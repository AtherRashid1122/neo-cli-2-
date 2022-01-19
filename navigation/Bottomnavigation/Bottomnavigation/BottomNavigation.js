
import React,{useState,useRef} from 'react'
import {Text,View,Button,FlatList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



// import HomeScreen from './HomeScreen';


import homeScreen from '../../../screens/home/homeScreen';
import SearchScreen from '../../../screens/search/searchScreen';
import WebSeriesScreen from '../../../screens/webSeries/webSeriesScreen';
import CategoryScreen from '../../../screens/category/categoryScreen';
import AccountScreen from '../../../screens/account/accountScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();





const AccountScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      options={{headerShown:false}}
        name="AccountScreen"
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
};


const CategoryScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      options={{headerShown:false}}
        name="CategoryScreen"
        component={CategoryScreen}
      />
    </Stack.Navigator>
  );
};


const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
       options={{headerShown:false}}
          name="homeScreen"
          component={homeScreen}
        />
      </Stack.Navigator>
    );
  };


  
  const SearchScreenStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
        options={{headerShown:false}}
          name="SearchScreen"
          component={SearchScreen}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const WebStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
        options={{headerShown:false}}
          name="WebSeriesScreen"
          component={WebSeriesScreen}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };



  const INITIAL_ROUTE_NAME = 'Home';

  


const BottomNavigation=()=>{

  return(
    <Tab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      activeColor={'red'}
      inactiveColor="white"
      backBehavior="initialRoute"
      labeled={false}
     height={700}
      tabBarOptions={{
        activeTintColor: 'red',
      }}
      barStyle={{backgroundColor: 'black',height:60}}>
      <Tab.Screen
        barStyle={{ backgroundColor: 'black' }}

        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity style={{height:30,width:60,backgroundColor:'red',borderRadius:50,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Entypo name="home" color={'white'} size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreenStack}

        options={{
        
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (

            <FontAwesome5 name="coins" color={color} size={23} />
          ),
        }}

      />




<Tab.Screen
        name="Category"
        component={SearchScreenStack}

        options={{
        
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="pluscircle" color={color} size={24} />
          ),
        }}

      />


<Tab.Screen
        name="Web"
        component={WebStack}

        options={{
        
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Octicons name="search" color={color} size={25} />
          ),
        }}

      />

<Tab.Screen
        name="Account"
        component={AccountScreenStack}

        options={{
        
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Entypo style={{marginTop:-5}} name="menu" color={color} size={32} />
          ),
        }}

      />


     
    </Tab.Navigator>

  )


}

export default BottomNavigation