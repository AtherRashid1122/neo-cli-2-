import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home/homeScreen";
import AccountScreen from "../screens/account/accountScreen";
import CustomDrawerContent from "./custom drawer/Menu";
import { Dimensions } from "react-native";
const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get("window");
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import Header from "../component/Header";

function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      style={{ flex: 1 }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#1a2236",
          width: width * 0.8,
          activeTintcolor: "white",
        },
        drawerActiveBackgroundColor: "white",
        drawerActiveTintColor: "#1a2236",
        drawerInactiveBackgroundColor: "transparent",
        drawerInactiveTintColor: "white",
        headerTintColor: "white",
      
        headerStyle: { backgroundColor: "#1a2236" },
        headerTitleStyle: { color: "white" },
        headerTitleAlign: "left",
        drawerType: "front",
        headerShown:false,
        drawerItemStyle: {
          overflow: "hidden",
        },
        drawerLabelStyle: {
          fontSize: 18,
        //   marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Trending"
    >
      <Drawer.Screen
        name="Trending"
        component={HomeStack}
        options={{
          headerShown:false,
        }}
        
      />
      <Drawer.Screen name="MY PROFILE" component={AccountScreen}  />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
