import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loadingScreen from "../component/loadingScreen";
import appSettingScreen from "../screens/appSetting/appSettingScreen";
import categoryScreen from "../screens/category/categoryScreen";
import MyProfile from "../screens/editProfile/editProfileScreen";
import moreMoviesScreen from "../screens/moreMovies/moreMoviesScreen";
import privacyPolicyScreen from "../screens/privacyPolicy/privacyPolicyScreen";
import showEpisodeScreen from "../screens/showEpisode/showEpisodeScreen";
import webSeriesScreen from "../screens/webSeries/webSeriesScreen";
import SearchScreen from "../screens/search/searchScreen";
import PostVideoDesc from "../screens/home/PostVideoDesc";
import HomeScreen from "../screens/home/homeScreen";
import Header from "../component/Header";
import BottomNavigation from "./Bottomnavigation/Bottomnavigation/BottomNavigation";
export default function HomeStack(){
  const Stack = createNativeStackNavigator();

    return (

        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen"  options={{headerShown:false}}>

          {(props) => <BottomNavigation {...props} />}
          </Stack.Screen>
          <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}} />
          <Stack.Screen name="PostVideoDesc" component={PostVideoDesc} options={{headerShown:false}} />
          <Stack.Screen name="Loading" component={loadingScreen} options={{headerShown:false}} />
          <Stack.Screen name="Category" component={categoryScreen} options={{headerShown:false}}/>
          <Stack.Screen name="MoreMovies" component={moreMoviesScreen}options={{headerShown:false}} />
          <Stack.Screen name="WebSeries" component={webSeriesScreen} options={{headerShown:false,
          header:()=><Header title="" back  />
          
          }}/>
          <Stack.Screen name="ShowEpisode" component={showEpisodeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="My Profile" component={MyProfile} options={{headerShown:false}}/>
          <Stack.Screen name="AppSetting" component={appSettingScreen} options={{headerShown:false}}/>
          <Stack.Screen name="PrivacyPolicy" component={privacyPolicyScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}