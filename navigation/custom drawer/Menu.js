import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Switch
  
} from "react-native";
import ThemeManager,{useTheme} from "../../constant/Themeswitch";
 import { MaterialIcons } from "@expo/vector-icons";
import { argonTheme } from "../../constant";
import { Block, Text, theme } from "galio-framework";
import DrawerItem from "./DrawerItem";
import  GuestDrawer  from "./GuestDrawerItem";

import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {

  const {Guest_id} = useSelector(state => state.ActiveId_Reducer)
  // const screens = ["Register",  "My Profile", "Video","Minis","Recordings","Followings","Analytics"];
  const screens = ["Busy",  "Create", "Notifications","Settings","Logout"];

  const [isEnabled, setIsEnabled] = useState('light');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const theme = useTheme()

if(Guest_id!=-1){
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >

      <Block style={styles.header}>
     
      </Block>
      {/* <Switch
      style={{marginRight:20}}
      trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        // onValueChange={toggleSwitch}
        // value={isEnabled}
        value={theme.mode === 'dark' }
        onChange={value => theme.setMode(value ? 'dark' : 'light')}
      /> */}


<TouchableOpacity  onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
  <Block row>
<ImageBackground

              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
              }}
              style={{ width: 40, height: 40,marginLeft:10 }}
              resizeMode="cover"
              imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
            >
              <Block style={{ position: "absolute", left: 25, top: 18 }}>
                <MaterialIcons
                  name="check-circle"
                  size={18}
                  color={argonTheme.COLORS.WHITE}
                // onPress={() => navigation.navigate("SearchScreen")}
                />
              </Block>
            </ImageBackground>
            <Block style={{justifyContent:'center',alignContent:'center',marginLeft:10}}>
            <Text style={{color:'white',fontSize:16}}>Rahul Tripathi Tripathi</Text>
            </Block>
            </Block>
            </TouchableOpacity>

      <Block style={{height:45,backgroundColor:'#6a5acd',width:'50%',borderRadius:70,justifyContent:'center',marginLeft:10,marginTop:40}} >
          <DrawerItem   title="Register"  navigation={navigation}
          
             
          
          >
            
          </DrawerItem>
          </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14,marginTop:30, }}>
        <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerItem
                title={item}
                key={index}
                navigation={navigation}
                // focused={state.index === index ? true : false}
              />
            );
          })}
          <DrawerItem title="DESK" navigation={navigation} />
          {/* <DrawerItem title="CHAT" navigation={navigation} /> */}

          {/* <Block
            flex
            style={{ marginTop: 10, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: "white",
                width: width,
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
               
          </Block> */}
         
          {/* <DrawerItem title="Reward" navigation={navigation} />
          <DrawerItem title="Payment" navigation={navigation} /> */}
          {/* <Block
            flex
            style={{ marginTop: 10, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: "white",
                width: width,
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
               
          </Block> */}


          {/* <DrawerItem title="Authenticate" navigation={navigation} /> */}

          {/* <DrawerItem title="About" navigation={navigation} /> */}
          {/* <TouchableOpacity onPress={()=>alert('ather')}> 
           <DrawerItem  title="Informations" navigation={navigation} >

           </DrawerItem>
           </TouchableOpacity>
          <DrawerItem
            title="Terms & conditions"
            navigation={navigation}
          />
          <DrawerItem title="Logout" navigation={navigation} />  */}



        </ScrollView>
      </Block>
    </Block>
  );
}
else{

  return (
  //   <Block
  //   style={styles.container}
  //   forceInset={{ top: "always", horizontal: "never" }}
  // >
  //   <Block style={styles.header}>
  //     <Image resizeMode="contain"
  //       style={styles.logo}
  //       source={require("../../assets/logo-white.png")}
  //     />
  //   </Block>
  //   <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
  //     <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
  //       {screens.map((item, index) => {
  //         return (
  //           <GuestDrawer
  //             title={item}
  //             key={index}
  //             navigation={navigation}
  //             focused={state.index === index ? true : false}
  //           />
  //         );
  //       })}
  //       {/* <GuestDrawer title="DESK" navigation={navigation} /> */}
  //       {/* <GuestDrawer title="CHAT" navigation={navigation} /> */}

  //       <Block
  //         flex
  //         style={{ marginTop: 10, marginVertical: 8, paddingHorizontal: 8 ,}}
  //       >
  //         <Block
  //           style={{
  //             borderColor: "white",
  //             width: width,
  //             borderWidth: StyleSheet.hairlineWidth,
  //           }}
  //         />
             
  //       </Block>
  //       {/* <Block
  //         flex
  //         style={{ marginTop: 16, marginVertical: 10, paddingHorizontal: 7}}
  //       >
      
  //         </Block> */}
  //       <GuestDrawer title="Reward" navigation={navigation} />
  //       <GuestDrawer title="Payment" navigation={navigation} />
  //       <Block
  //         flex
  //         style={{ marginTop: 10, marginVertical: 8, paddingHorizontal: 8 }}
  //       >
  //         <Block
  //           style={{
  //             borderColor: "white",
  //             width: width,
  //             borderWidth: StyleSheet.hairlineWidth,
  //           }}
  //         />
             
  //       </Block>


  //       {/* <GuestDrawer title="Authenticate" navigation={navigation} /> */}

  //       {/* <GuestDrawer title="About" navigation={navigation} /> */}
  //       <GuestDrawer title="Privacy" navigation={navigation} />
  //       <GuestDrawer
  //         title="Terms & conditions"
  //         navigation={navigation}
  //       />
  //       <GuestDrawer title="Login" navigation={navigation} />
  //       <GuestDrawer title="Register" navigation={navigation} /> 
  //     </ScrollView>
  //   </Block>
  // </Block>

  <Block
  style={styles.container}
  forceInset={{ top: "always", horizontal: "never" }}
>

  <Block style={styles.header}>
    <Image resizeMode="contain"
      style={styles.logo}
      source={require("../../assets/logo-white.png")}
    />
  </Block>
  {/* <Switch
  style={{marginRight:20}}
  trackColor={{ false: "#767577", true: "#81b0ff" }}
    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    ios_backgroundColor="#3e3e3e"
    // onValueChange={toggleSwitch}
    // value={isEnabled}
    value={theme.mode === 'dark' }
    onChange={value => theme.setMode(value ? 'dark' : 'light')}
  /> */}


<TouchableOpacity  onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
<Block row>
<ImageBackground

          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
          }}
          style={{ width: 40, height: 40,marginLeft:10 }}
          resizeMode="cover"
          imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
        >
          <Block style={{ position: "absolute", left: 25, top: 18 }}>
            <MaterialIcons
              name="check-circle"
              size={18}
              color={argonTheme.COLORS.WHITE}
            // onPress={() => navigation.navigate("SearchScreen")}
            />
          </Block>
        </ImageBackground>
        <Block style={{justifyContent:'center',alignContent:'center',marginLeft:10}}>
        <Text style={{color:'white',fontSize:16}}>Rahul Tripathi Tripathi</Text>
        </Block>
        </Block>
        </TouchableOpacity>

  <Block style={{height:45,backgroundColor:'#6a5acd',width:'50%',borderRadius:70,justifyContent:'center',marginLeft:10,marginTop:40}} >
      <DrawerItem   title="Register"  navigation={navigation}
      
         
      
      >
        
      </DrawerItem>
      </Block>
  <Block flex style={{ paddingLeft: 8, paddingRight: 14,marginTop:30, }}>
    <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
      {screens.map((item, index) => {
        return (
          <DrawerItem
            title={item}
            key={index}
            navigation={navigation}
            // focused={state.index === index ? true : false}
          />
        );
      })}
      <DrawerItem title="DESK" navigation={navigation} />
      {/* <DrawerItem title="CHAT" navigation={navigation} /> */}

      {/* <Block
        flex
        style={{ marginTop: 10, marginVertical: 8, paddingHorizontal: 8 }}
      >
        <Block
          style={{
            borderColor: "white",
            width: width,
            borderWidth: StyleSheet.hairlineWidth,
          }}
        />
           
      </Block> */}
     
      {/* <DrawerItem title="Reward" navigation={navigation} />
      <DrawerItem title="Payment" navigation={navigation} /> */}
      {/* <Block
        flex
        style={{ marginTop: 10, marginVertical: 8, paddingHorizontal: 8 }}
      >
        <Block
          style={{
            borderColor: "white",
            width: width,
            borderWidth: StyleSheet.hairlineWidth,
          }}
        />
           
      </Block> */}


      {/* <DrawerItem title="Authenticate" navigation={navigation} /> */}

      {/* <DrawerItem title="About" navigation={navigation} /> */}
      {/* <TouchableOpacity onPress={()=>alert('ather')}> 
       <DrawerItem  title="Informations" navigation={navigation} >

       </DrawerItem>
       </TouchableOpacity>
      <DrawerItem
        title="Terms & conditions"
        navigation={navigation}
      />
      <DrawerItem title="Logout" navigation={navigation} />  */}



    </ScrollView>
  </Block>
</Block>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#1a2236",
    // backgroundColor:"red",


  },
  header: {
    width: width*.8,
    height: height  * 0.20,
    justifyContent: "center",
    // backgroundColor:"red"
  },
  logo: { 
    // width: width * 0.3,
     height: height * 0.07,
     alignSelf: "center" ,
     marginLeft:-140
    // position:'absolute',
    // left:0
    },
});

export default CustomDrawerContent;
