import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import ResetPassword from "../screens/auth/ResetPassword";
import privacyPolicyScreen from "../screens/privacyPolicy/privacyPolicyScreen";


//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
//redux component
import { useDispatch, useSelector } from "react-redux";
import { Token_action, userId_action } from "../redux/reducers/blog/Blog_For_Each_Item_action";
import { ActivityIndicator } from "react-native";
import ProfileBuilder from "../screens/auth/ProfileBuilder";
import ProfileBuildSecond from "../screens/auth/profileB2";
import ReferMe from "../constant/ReferMe";
import GoogleLocation from "../constant/Location";
import MyDrawer from "./drawerStack";
const Stack = createNativeStackNavigator();

function App() {
  const [user_token, setuser_token] = useState(null);
  const [user_type, setuser_type] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const dispatch = useDispatch();
  const { Guest_id } = useSelector((state) => state.ActiveId_Reducer);

  useEffect(() => {
    try {
      get_user_token();
      get_user_type();
      get_user_id();
    } catch (error) {
      console.log(error, "Error in useEffect in AppStack");
    }
  }, [Guest_id]);

  const get_user_type = async () => {
    try {
      const value = await AsyncStorage.getItem("@user_type");
      if (value !== null) {
        await setuser_type(value);
        await dispatch(GuestId_Action(value));
        setisLoading(false);
      } else {
        setisLoading(false);
      }
    } catch (e) {
      return null;
    }
  };
  const get_user_token = async () => {
    try {
      const value = await AsyncStorage.getItem("@user_token");
      if (value !== null) {
        await dispatch(Token_action(value));
        setuser_token(value);
        setisLoading(false);
      } else {
        setisLoading(false);
      }
    } catch (e) {
      console.log(e, "error in getting token At appStack");
    }
  };
  console.log(user_token, user_type);

  const get_user_id = async () => {
    try {
      const value = await AsyncStorage.getItem("@user_id");
      if (value !== null) {
        await dispatch(userId_action(value));
        setisLoading(false);
      } else {
        setisLoading(false);
      }
    } catch (e) {
      console.log(e, "error in getting token");
    }
  };


  if (isLoading == true) {
    return <ActivityIndicator color="red" />;
  }
  if (user_token == null) {
    return (
      <Stack.Navigator initialRouteName="Login">
             {/* <Stack.Screen
          name="Loading"
          component={loadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={splashScreen}
          options={{ headerShown: false }}
        /> */}
           <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBuilder"
          component={ProfileBuilder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBuildSecond"
          component={ProfileBuildSecond}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ReferMe" component={ReferMe} />
        <Stack.Screen
          name="GoogleLocation"
          component={GoogleLocation}
          options={{ headerShown: false }}
        />
   
        <Stack.Screen
          name="PrivacyPolicy"
          component={privacyPolicyScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    );
  } else {
    if (user_type == "-1") {
      return (
        <Stack.Navigator initialRouteName="MyDrawer">
            <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{ headerShown: false }}
          /> 
            {/* <Stack.Screen
          name="Loading"
          component={loadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={splashScreen}
          options={{ headerShown: false }}
        /> */}
           <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBuilder"
          component={ProfileBuilder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBuildSecond"
          component={ProfileBuildSecond}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ReferMe" component={ReferMe} />
        <Stack.Screen
          name="GoogleLocation"
          component={GoogleLocation}
          options={{ headerShown: false }}
        />
   
        <Stack.Screen
          name="PrivacyPolicy"
          component={privacyPolicyScreen}
          options={{ headerShown: false }}
        />
         
            </Stack.Navigator>
      );
    } else if (user_type == "1") {
      return (
        <Stack.Navigator 
          initialRouteName="MyDrawer"
          screenOptions={{
            headerStyle: { backgroundColor: "#1a2236" },
            headerTintColor: "white",
            headerTitle: "",
          }}
        >
           <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{ headerShown: false }}
          />
            {/* <Stack.Screen
          name="Loading"
          component={loadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={splashScreen}
          options={{ headerShown: false }}
        /> */}
           <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBuilder"
          component={ProfileBuilder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBuildSecond"
          component={ProfileBuildSecond}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ReferMe" component={ReferMe} />
        <Stack.Screen
          name="GoogleLocation"
          component={GoogleLocation}
          options={{ headerShown: false }}
        />
   
        <Stack.Screen
          name="PrivacyPolicy"
          component={privacyPolicyScreen}
          options={{ headerShown: false }}
        />
        
        </Stack.Navigator>
      );
    } else if (user_type == "0") {
      return (
        <Stack.Navigator initialRouteName="ProfileBuilder">
           {/* <Stack.Screen
          name="Loading"
          component={loadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={splashScreen}
          options={{ headerShown: false }}
        /> */}
           <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBuilder"
          component={ProfileBuilder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBuildSecond"
          component={ProfileBuildSecond}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ReferMe" component={ReferMe} />
        <Stack.Screen
          name="GoogleLocation"
          component={GoogleLocation}
          options={{ headerShown: false }}
        />
   
        <Stack.Screen
          name="PrivacyPolicy"
          component={privacyPolicyScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    } else {
      return null;
    }
  }
}

export default App;
