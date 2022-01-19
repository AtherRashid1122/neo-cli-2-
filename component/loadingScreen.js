
import React, { useEffect, useState } from "react";
import { View, } from "react-native";
import * as Font from "expo-font";
import { ActivityIndicator } from "react-native-paper";
import { enableScreens } from 'react-native-screens';
enableScreens();
import 'array-flat-polyfill'
export default function LoadingScreen ({navigation}) {
    
    const [isLoadingComplete, setisLoadingComplete] = useState(false);
    const [fontLoaded, setfontLoaded] = useState(false);


const _handleLoadingError = error => {
    console.warn(error);
    console.log("_handleLoadingError")
  };
const _handleFinishLoading = () => {
    if(fontLoaded) {
    console.log("_handleFinishLoading")
      setisLoadingComplete(true );
    }
  };

  const font=async() => {
    console.log("object1")
    await Font.loadAsync({
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    });
    setfontLoaded(false)



  }
  useEffect( () => {
    font();
    setfontLoaded(true);
  }, [])
      if(!isLoadingComplete) {
        try {
         console.log("try")
          return (
            <ActivityIndicator color="red"/>
            );
        } catch (error) {
          console.log(error,"!isLoadingComplete ")
        }
        
      } else {
  console.log("app.js nav to screen")
    }
    
  
  
  }

