import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Modal,
  View,
  Dimensions,
  Platform,
  ActivityIndicator,
  Image,
} from "react-native";
import { Block, Text, theme, Accordion } from "galio-framework";
import Icon from "../../component/Icon";
import argonTheme from "../../constant/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { ActiveId_Action } from "../../redux/reducers/App_Realated/AppActon";
import { GenrateCodeAuth } from "../../redux/reducers/ap-user/ap_user_actions";
// import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
const { width, height } = Dimensions.get("window");
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../constant/styles";
import{ MaterialCommunityIcons,AntDesign,Ionicons} from '@expo/vector-icons'
// import AdsCheck from "../../components/AdsReward";
import {
  GetCoins_action,
  Reward_Eligible_action,
} from "../../redux/reducers/Ads/AdsAction";

import {
  faShieldAlt,
  faClipboard,
  faVideo,
  faPlay,
  faRecordVinyl,
  faUser,
  faFileMedicalAlt,
  faChartPie,
  faMoneyCheckAlt,
  faUserCheck,
  faSignOutAlt,
  faCoins,
  faTape,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons";

function DrawerItem({ title, focused, navigation }) {


  const [toggle,settoggle]=useState(false)
  const renderIcon = () => {
    switch (title) {
      case "Busy":
        return (
          // <Icon
          //   name="trending-up"
          //   family="FontAwesome5"
          //   size={14}
          //   color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          //   // color={argonTheme.COLORS.PRIMARY}
          // />
          <Block style={{ backgroundColor:'red',borderRadius:100 ,height:20,width:20,marginRight:5}}>
                
          </Block>
        );
      case "Create":
        return (
          // <FontAwesomeIcon
          //   icon={faPlay}
          //   size={14}
          //   color={focused ? "white" : argonTheme.COLORS.INFO}
          // />
          <MaterialIcons style={{marginRight:5}} name="add-circle-outline" size={24} color="white" />

        );

      case "Notifications":
        return (
          // <FontAwesomeIcon
          //   icon={faTape}
          //   size={14}
          //   color={focused ? "white" : argonTheme.COLORS.INPUT_SUCCESS}
          // />
          <Block row style={{marginRight:6}} >

          <MaterialCommunityIcons  name="bell" size={24} color="white" />
          <Block style={{marginLeft:-10, backgroundColor:'red',borderRadius:100 ,height:10,width:10}}>
                
                   </Block>
          </Block>
        );

      case "Settings":
        return (
          // <FontAwesomeIcon
          //   icon={faUser}
          //   size={14}
          //   color={focused ? "white" : argonTheme.COLORS.INFO}
          // />
          <AntDesign style={{marginRight:3}} name="setting" size={22} color="white" />
 
        );
      case "Logout":
        return (
          // <FontAwesomeIcon
          //   icon={faFileMedicalAlt}
          //   size={14}
          //   color={focused ? "white" : argonTheme.COLORS.DRIBBBLE}
          // />
          <AntDesign name="logout" size={20} color="white" />
        );
      // case "Information":
      //   return (
      //     <Block row>
      //     <FontAwesomeIcon
      //       icon={faChartPie}
      //       size={14}
      //       color={focused ? "white" : "#ff8c00"}
      //     />
      //      {/* <FontAwesomeIcon
      //       icon={faChartPie}
      //       size={14}
      //       color={focused ? "white" : "#ff8c00"}
      //     /> */}

      //     </Block>

          
      //   );
      // case "Followings":
      //   return (
      //     <FontAwesomeIcon
      //       icon={faVoteYea}
      //       size={14}
      //       color={focused ? "white" : argonTheme.COLORS.BUTTON_COLOR}
      //     />
      //   );
      // case "Payment":
      //   return (
      //     <FontAwesomeIcon
      //       icon={faMoneyCheckAlt}
      //       size={14}
      //       color={focused ? "white" : "red"}
      //     />
      //   );
      // case "Reward":
      //   return (
      //     <FontAwesomeIcon
      //       icon={faCoins}
      //       size={14}
      //       color={focused ? "white" : "#FFD700"}
      //     />
      //   );
      // case "Authenticate":
      //   return (
      //     <FontAwesomeIcon
      //       icon={faVideo}
      //       size={14}
      //       color={focused ? "white" : argonTheme.COLORS.PRIMARY}
      //     />
      //   );
      // case "About":
      //   return (
      //     <FontAwesomeIcon
      //       icon={faVideo}
      //       size={14}
      //       color={focused ? "white" : argonTheme.COLORS.PRIMARY}
      //     />
      //   );
      // case "Privacy":
      //   return (
      //     <FontAwesomeIcon
      //       icon={faShieldAlt}
      //       size={14}
      //       color={focused ? "white" : argonTheme.COLORS.INFO}
      //     />
      //   );
      // case "Terms & conditions":
      //   return (
      //     <FontAwesomeIcon
      //       icon={faClipboard}
      //       size={14}
      //       color={focused ? "white" : argonTheme.COLORS.HYPER_LINK}
      //     />
      //   );
      // case "Logout":
      //   return (
      //     <FontAwesomeIcon
      //       icon={faSignOutAlt}
      //       size={14}
      //       color={focused ? "white" : "green"}
      //     />
      //   );

        case "Registerr":
          return (
            
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size={14}
              color={focused ? "white" : "green"}
            />
          );
      default:
        return null;
    }
  };

  const dispatch = useDispatch();
  const childRef = useRef();
  const [show, setshow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { token_is } = useSelector((state) => state.Blog_For_Each_Item);

  const containerStyles = [
    styles.defaultStyle,
    focused ? [styles.activeStyle, styles.shadow] : null,
  ];
  const containerStyles2 = [
    styles.defaultStyle2,
    focused ? [styles.activeStyle, styles.shadow] : null,
  ];
  const containerStyles3 = [
    // styles.defaultStyle3,
    focused ? [styles.activeStyle, styles.shadow] : null,
  ];

  // token function for logout.

  const delet_token = async (title) => {
    try {
      await AsyncStorage.removeItem("@user_token");
      await AsyncStorage.removeItem("@user_type")

        .then(() => {
          navigation.navigate("Login");
          console.log("token removed and logout done");
        })
        .catch((e) => {
          console.log(e, "error in removing token");
        });
    } catch (exception) {
      console.log(exception, "error in removing token=exception");
      return false;
    }
  };

  const auth = async () => {
    var bodyFormData = new FormData();
    bodyFormData.append("action", "generate");
    bodyFormData.append("token", token_is);
    await dispatch(GenrateCodeAuth(bodyFormData));
  };
  const { GenratedCode, aplogin_loading } = useSelector(
    (state) => state.ap_user
  );
  let val = String(GenratedCode && GenratedCode.code);
  const elig = async () => {
    var EligibleData = new FormData();
    EligibleData.append("action", "check");
    EligibleData.append("property", "ads");
    EligibleData.append("token", token_is);

    await dispatch(Reward_Eligible_action(EligibleData, navigation));
  };

  const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      onComplete={() => {
        auth();
      }}
      isPlaying
      strokeWidth={2}
      duration={30}
      colors={argonTheme.COLORS.INFO}
      size={width * 0.12}
    >
      {({ remainingTime, animatedColor }) => (
        <Text
          style={{
            fontFamily: "open-sans-regular",
            textAlign: "center",
          }}
          color="black"
          // color={"black"}
          size={16}
        >
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer>
  );

  if (
    title == "BLOGS" ||
    title == "LifeStyle" ||
    title == "Health" ||
    title == "Entertainment" ||
    title == "Tech" ||
    title == "Educational" ||
    title == "Miscellaneous"
  ) {
    if (title == "BLOGS") {
      return (
        <Block>
          <TouchableOpacity
            style={{ height: 60 }}
            onPress={() => {
              if (title == "Logout") {
                {
                  delet_token();
                }
              } else if (title == "BLOGS") {
                setshow(!show);
              } else if (title == "About") {
                navigation.navigate("About");
              } else {
                {
                  navigation.navigate(title);
                }
              }
            }}
          >
            <Block flex row style={containerStyles}>
              <Block middle flex={0.1} style={{ marginRight: 5 }}>
                {renderIcon()}
              </Block>
              <Block row center flex={0.9}>
                <Text
                  style={{ fontFamily: "open-sans-regular" }}
                  size={15}
                  bold={focused ? true : false}
                  color={focused ? "white" : "white"}
                >
                  {title}
                
                </Text>
              </Block>
            </Block>
          </TouchableOpacity>
          {show ? (
            <>
              <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => {
                  let a = 1;
                  dispatch(ActiveId_Action("Health"));
                  navigation.navigate("BlogsCateScrn", {
                    title: "Health",
                    tabId: a,
                  });
                }}
              >
                <Block flex row style={containerStyles2}>
                  <Block middle flex={0.1} style={{ marginRight: 5 }}>
                    <Icon
                      name="heart"
                      family="AntDesign"
                      size={14}
                      color={focused ? "white" : argonTheme.COLORS.BUTTON_COLOR}
                    />
                  </Block>
                  <Block row center flex={0.9}>
                    <Text
                      style={{ fontFamily: "open-sans-regular" }}
                      size={13}
                      bold={focused ? true : false}
                      color={focused ? "white" : "white"}
                    >
                      Health
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => {
                  let a = 2;
                  dispatch(ActiveId_Action("Sports"));
                  navigation.navigate("BlogsCateScrn", {
                    title: "Entertainment",
                    tabId: a,
                  });
                }}
              >
                <Block flex row style={containerStyles2}>
                  <Block middle flex={0.1} style={{ marginRight: 5 }}>
                    <Icon
                      name="connected-tv"
                      family="MaterialIcons"
                      size={14}
                      color={
                        focused ? "white" : argonTheme.COLORS.INPUT_SUCCESS
                      }
                    />
                  </Block>
                  <Block row center flex={0.9}>
                    <Text
                      style={{ fontFamily: "open-sans-regular" }}
                      size={13}
                      bold={focused ? true : false}
                      color={focused ? "white" : "white"}
                    >
                      Sports
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => {
                  let a = 3;
                  dispatch(ActiveId_Action("Tech"));
                  navigation.navigate("BlogsCateScrn", {
                    title: "Tech",
                    tabId: a,
                  });
                }}
              >
                <Block flex row style={containerStyles2}>
                  <Block middle flex={0.1} style={{ marginRight: 5 }}>
                    <Icon
                      name="spaceship"
                      family="ArgonExtra"
                      size={14}
                      color={focused ? "white" : argonTheme.COLORS.DRIBBBLE}
                    />
                  </Block>
                  <Block row center flex={0.9}>
                    <Text
                      style={{ fontFamily: "open-sans-regular" }}
                      size={13}
                      bold={focused ? true : false}
                      color={focused ? "white" : "white"}
                    >
                      Tech
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => {
                  let a = 5;
                  dispatch(ActiveId_Action("Lifestyle"));
                  navigation.navigate("BlogsCateScrn", {
                    title: "LifeStyle",
                    tabId: a,
                  });
                }}
              >
                <Block flex row style={containerStyles2}>
                  <Block middle flex={0.1} style={{ marginRight: 5 }}>
                    <Icon
                      name="breakfast-dining"
                      family="MaterialIcons"
                      size={14}
                      color={focused ? "white" : argonTheme.COLORS.INFO}
                    />
                  </Block>
                  <Block row center flex={0.9}>
                    <Text
                      style={{ fontFamily: "open-sans-regular" }}
                      size={13}
                      bold={focused ? true : false}
                      color={focused ? "white" : "white"}
                    >
                      LifeStyle
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => {
                  let a = null;
                  dispatch(ActiveId_Action("Entertainment"));
                  navigation.navigate("BlogsCateScrn", {
                    title: "Entertainment",
                    tabId: a,
                  });
                }}
              >
                <Block flex row style={containerStyles2}>
                  <Block middle flex={0.1} style={{ marginRight: 5 }}>
                    <Icon
                      name="connected-tv"
                      family="MaterialIcons"
                      size={14}
                      color={
                        focused ? "white" : argonTheme.COLORS.INPUT_SUCCESS
                      }
                    />
                  </Block>
                  <Block row center flex={0.9}>
                    <Text
                      style={{ fontFamily: "open-sans-regular" }}
                      size={13}
                      bold={focused ? true : false}
                      color={focused ? "white" : "white"}
                    >
                      Entertainment
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
              */}

              {/* <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => {
                  let a = null;
                  dispatch(ActiveId_Action("Educational"));
                  navigation.navigate("BlogsCateScrn", {
                    title: "Educational",
                    tabId: a,
                  });
                }}
              >
                <Block flex row style={containerStyles2}>
                  <Block middle flex={0.1} style={{ marginRight: 5 }}>
                    <Icon
                      name="graduation-cap"
                      family="Entypo"
                      size={14}
                      color={focused ? "white" : argonTheme.COLORS.PRIMARY}
                    />
                  </Block>
                  <Block row center flex={0.9}>
                    <Text
                      style={{ fontFamily: "open-sans-regular" }}
                      size={13}
                      bold={focused ? true : false}
                      color={focused ? "white" : "white"}
                    >
                      Educational
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
               */}
            </>
          ) : null}
        </Block>
      );
    } else if (
      title == "LifeStyle" ||
      title == "Health" ||
      title == "Entertainment" ||
      title == "Tech" ||
      title == "Educational" ||
      title == "Miscellaneous"
    ) {
      return null;
    }
  } else if (title == "DESK" || title == "CHAT" || title == "Payment") {
    return (
      <Block >
        <Block flex row style={[containerStyles3,{marginTop:15}]}>
          <Block middle flex={0.1} >
            {renderIcon()}
          </Block>
          <Block row center flex={0.9} style={{marginLeft:-14}}>

          <Ionicons name="information-circle-outline" size={25} color="white" />
            <Text
              style={{ fontFamily: "open-sans-regular" ,marginLeft:16}}
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "white"}
            >
              {/* {title} */}
              Information
            </Text>
            {/* <TouchableOpacity  
            onPress={()=>settoggle(!toggle)}
            
            style={{
                backgroundColor: "rgb(94,175,252)",
                paddingHorizontal: 5,
                paddingBottom: 2,
                      
                paddingVertical: 0.5,
                borderRadius: 10,
                // marginLeft: 10,
              position:'absolute',
              right:0
              }}>
            <Block
          
            >
           <FontAwesomeIcon
            icon={faChartPie}
            size={14}
            color={focused ? "white" : "#ff8c00"}
          />
            </Block>
            </TouchableOpacity> */}


<TouchableOpacity
              onPress={() => {
                settoggle(!toggle);
              }}
              style={{ flexDirection: "row", alignItems: "center",marginLeft:40 }}
            >
              {toggle == false ? (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color={Colors.whiteColor}
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color={Colors.whiteColor}
                />
              )}

            </TouchableOpacity>
          </Block>
       
        </Block>

    {  toggle?  <Block style={{justifyContent:'center',marginLeft:40}}>
     <Block row style={{marginTop:20,alignItems:'center'}}>
<View style={{height:10,width:10,backgroundColor:'white',borderRadius:100,}}>

</View>
<Text style={{color:'white',marginLeft:20}}>
  Terms & Conditions
</Text>
     </Block>

     <Block row style={{marginTop:20,alignItems:'center'}}>
<View style={{height:10,width:10,backgroundColor:'white',borderRadius:100,}}>

</View>
<Text  style={{color:'white',marginLeft:20}}>
  Privacy Policy
</Text>
     </Block>

     <Block row style={{marginTop:20,alignItems:'center'}}>
<View style={{height:10,width:10,backgroundColor:'white',borderRadius:100,}}>

</View>
<Text style={{color:'white',marginLeft:20}}>
  FAQ
</Text>
     </Block>

     <Block row style={{marginTop:20,alignItems:'center',marginBottom:40}}>
<View style={{height:10,width:10,backgroundColor:'white',borderRadius:100,}}>

</View>
<Text style={{color:'white',marginLeft:20}}>
  App Information
</Text>
     </Block>
     </Block>:null}
      </Block>
    );
  } else if (title == "Authenticate") {
    return (
      <>
        <TouchableOpacity
          style={{
            height: 70,
            // backgroundColor:"red",
            borderBottomWidth: 0.3,
            borderBottomLeftRadius: 10,
            borderBottomColor: "rgb(233,233,233,233)",
            marginBottom: 15,
            paddingBottom: 15,
          }}
          onPress={() => {
            auth();
            setModalVisible(true);
          }}
        >
          <Block flex row style={containerStyles}>
            <Block middle flex={0.1} style={{ marginRight: 5 }}>
              {renderIcon()}
            </Block>
            <Block row center flex={0.9}>
              <Text
                style={{ fontFamily: "open-sans-regular" }}
                size={15}
                bold={focused ? true : false}
                color={focused ? "white" : "white"}
              >
                {title}
               
              </Text>
            </Block>
          </Block>
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
              auth();
            }}
          >
            <View style={styles.centeredView}>
              {aplogin_loading == false ? (
                <View style={styles.modalView}>
                  <Block row style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        fontFamily: "open-sans-bold",
                        fontWeight: "bold",
                        marginLeft: Platform.OS === "ios" ? width * 0.12 : null,
                      }}
                      size={17}
                      color={"rgb(141,139,140)"}
                    >
                      Your Authentication Code
                    </Text>

                    <Block
                      style={{
                        marginLeft:
                          Platform.OS === "ios" ? width * 0.05 : width * 0.03,
                      }}
                    >
                      <UrgeWithPleasureComponent />
                    </Block>
                  </Block>

                  <Block
                    row
                    // style={{  marginT }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        paddingHorizontal: width * 0.034,

                        paddingVertical: height * 0.01,
                        borderRadius: 10,
                        marginHorizontal: 5,
                      }}
                    >
                      <Text
                        style={styles.txt}
                        size={25}
                        color={"rgb(141,139,140)"}
                      >
                        {val.charAt(0)}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "white",
                        paddingHorizontal: width * 0.034,
                        paddingVertical: height * 0.01,
                        borderRadius: 10,
                        marginHorizontal: 5,
                      }}
                    >
                      <Text
                        style={styles.txt}
                        size={25}
                        color={"rgb(141,139,140)"}
                      >
                        {val.charAt(1)}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "white",
                        paddingHorizontal: width * 0.034,

                        paddingVertical: height * 0.01,
                        borderRadius: 10,
                        marginHorizontal: 5,
                      }}
                    >
                      <Text
                        style={styles.txt}
                        size={25}
                        color={"rgb(141,139,140)"}
                      >
                        {val.charAt(2)}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "white",
                        paddingHorizontal: width * 0.034,

                        paddingVertical: height * 0.01,
                        borderRadius: 10,
                        marginHorizontal: 5,
                      }}
                    >
                      <Text
                        style={styles.txt}
                        size={25}
                        color={"rgb(141,139,140)"}
                      >
                        {String(val).charAt(3)}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "white",
                        paddingHorizontal: width * 0.034,

                        paddingVertical: height * 0.01,
                        borderRadius: 10,
                        marginHorizontal: 5,
                      }}
                    >
                      <Text
                        style={styles.txt}
                        size={25}
                        color={"rgb(141,139,140)"}
                      >
                        {val.charAt(4)}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "white",
                        paddingHorizontal: width * 0.034,

                        paddingVertical: height * 0.01,
                        borderRadius: 10,
                        marginHorizontal: 5,
                      }}
                    >
                      <Text
                        style={styles.txt}
                        size={25}
                        color={"rgb(141,139,140)"}
                      >
                        {val.charAt(5)}
                      </Text>
                    </View>
                  </Block>

                  <Text
                    style={{ fontFamily: "open-sans-regular" }}
                    size={14}
                    color={"rgb(141,139,140)"}
                  >
                    Put this code in website to complete login.
                  </Text>
                </View>
              ) : (
                <Block style={styles.modalView}>
                  <ActivityIndicator color="white" />
                </Block>
              )}
            </View>
          </Modal>
        </View>
      </>
    );
  } else if (title == "Reward")
    return (
      <TouchableOpacity
        onPress={() => {
          elig();
        }}
      >
        <Block row style={{ height: 60 }}>
          <Block flex row style={containerStyles}>
            <Block middle flex={0.1} style={{ marginRight: 9, marginLeft: 3 }}>
              {renderIcon()}
            </Block>
            <Text
              style={{ fontFamily: "open-sans-regular" }}
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "white"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  else {
    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() => {
          if (title == "Logout") {
            {
              delet_token();
            }
          } else if (title == "MY PROFILE") {
            dispatch(ActiveId_Action(""));

            navigation.navigate("MY PROFILE", {
              screen: "Profile",
              params: { from: "other" },
            });
          } else {
            {
              dispatch(ActiveId_Action(""));
              navigation.navigate(title);
            }
          }
        }}
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              style={{ fontFamily: "open-sans-regular",marginLeft:10 }}
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "white"}
            >
              {title}
              {/* ather */}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 2,
    // backgroundColor:"yellow"
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  defaultStyle2: {
    paddingVertical: 16,
    // paddingHorizontal: 16,
    paddingLeft: 40,
    marginBottom: 2,
    // backgroundColor:"yellow"
  },
  defaultStyle3: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    // paddingLeft:40,
    marginBottom: 2,
    // backgroundColor:"blue"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    // backgroundColor: "red",
  },
  modalView: {
    width: width * 0.9,
    height: height * 0.3,
    // margin: 20,
    backgroundColor: "rgb(226,226,226)",
    borderRadius: 15,
    alignSelf: "center",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  txt: {
    fontFamily: "open-sans-regular",
    fontWeight: "bold",
  },
  imgmain: { width: width * 0.032, height: height * 0.017, borderColor: 30 },
});

export default DrawerItem;
