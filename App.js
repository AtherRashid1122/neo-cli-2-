import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { GalioProvider } from "galio-framework";
import { Store } from "./redux/Store";
import { argonTheme } from "./constant";
import * as Font from "expo-font";
import App from "./navigation/AppStack";
import { enableScreens } from "react-native-screens";

enableScreens();
import "array-flat-polyfill";
import { View,ActivityIndicator } from "react-native";
import ThemeManager from "./constant/Themeswitch";

export default Index = () => {
  const [isLoadingComplete, setisLoadingComplete] = useState(true);

  const font = async () => {
    await Font.loadAsync({
      "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      Mukta_Light: require("./assets/fonts/Mukta-Light.ttf"),
      Mukta_Medium: require("./assets/fonts/Mukta-Medium.ttf"),
      Mukta_Regular: require("./assets/fonts/Mukta-Regular.ttf"),
    });
    setisLoadingComplete(false);
  };

  useEffect(() => {
    font();
  }, []);

  if (isLoadingComplete == true) {
    try {
      return (
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
          <ActivityIndicator color="red" />
        </View>
      );
    } catch (error) {
      console.log(error, "!isLoadingComplete ");
    }
  } else {
    return (
      <Provider store={Store}>
               

        <NavigationContainer>

          <GalioProvider theme={argonTheme}>
          {/* <ThemeManager> */}
            <App />
            {/* </ThemeManager> */}
          </GalioProvider>

                  </NavigationContainer>
                

      </Provider>
    );
  }
};
