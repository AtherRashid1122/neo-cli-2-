import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  useWindowDimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button } from "../component";
import argonTheme from "../constant/Theme";
import { Add_Blog_Comment_action } from "../redux/reducers/blog/Blog_For_Each_Item_action";
import { useSelector, useDispatch } from "react-redux";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
export default function AddComment({ navigation, bid, getComments }) {
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [coment, setcoment] = useState(null);

  //dispatch
  const dispatch = useDispatch();
  const { Guest_id } = useSelector((state) => state.ActiveId_Reducer);

  //token
  const token_redux = useSelector((state) => state.Blog_For_Each_Item.token_is);
  // console.log(token_redux,"token from redux in add_comment")
  //add comment
  const add_comment = async () => {
    let id = bid;
    let type = "blog";
    let comment = coment;
    let token = await token_redux;
    var bodyFormData = new FormData();
    bodyFormData.append("type", type);
    bodyFormData.append("token", token);
    bodyFormData.append("id", id);
    bodyFormData.append("comment", comment);

    dispatch(Add_Blog_Comment_action(bodyFormData, navigation));
    getComments();
    setcoment(null);
    setemail(null);
    setname(null);
  };

  return (
    <Block   flex style={styles.leaveComent}>
      <Text
        style={{ fontFamily: "open-sans-regular" }}
        muted
        size={20}
        style={{ paddingVertical: 9 }}
        color="white"
      >
        Add comments
      </Text>

<Block row middle space="between" style={{marginTop: 20,}}>
<Block row center paddingHorizontal={10}>
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/474x/55/d0/18/55d018385d88b1c079a4b9ce5d229888.jpg",
            }}
            style={{ width: 50, height: 50 }}
            resizeMode="cover"
            imageStyle={{  borderRadius: 100 }}
          >
            <Block style={{ position: "absolute", left: 38, top: 25 }}>
              <MaterialIcons
                name="check-circle"
                size={15}
                color={argonTheme.COLORS.WHITE}
                // onPress={() => navigation.navigate("SearchScreen")}
              />
            </Block>
          </ImageBackground>
       
        </Block>
      <Block center
        style={{
          // padding: 5,
          // backgroundColor: "red",
          height:30,
          borderRadius: 5,
          borderColor:"white",borderWidth:1,
          shadowColor: "#171717",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          elevation: 1,
          zIndex: 10,
        }}
      >
        {Guest_id == "-1" ? (
          <TouchableOpacity
            onPress={() => {
              if (Guest_id == "-1") {
                Alert.alert(
                  "Login Required",
                  "",
                  [
                    { text: "Cancel" },
                    {
                      text: "Login",
                      onPress: () => navigation.navigate("Login"),
                      style: "destructive",
                    },
                  ],
                  { cancelable: false }
                );
              } else {
                return null;
              }
            }}
          >
            <TextInput
              editable={false}
              selectTextOnFocus={true}
              style={{
                height: 30,
                // justifyContent: "flex-start",
              // backgroundColor: "green",
           

                // backgroundColor:"red"
              }}
              disable
              value={coment}
              placeholderTextColor="white"
              placeholder=" Type your comment here... "
            ></TextInput>
          </TouchableOpacity>
        ) : (
          <TextInput
            numberOfLines={2}
            multiline={true}
            style={{
              height: 40,
              backgroundColor: "green",
              justifyContent: "flex-start",
            }}
            value={coment}
            onChangeText={(e) => {
              setcoment(e);
            }}
            placeholder=" Type your comment here... "
          ></TextInput>
        )}
      </Block>

      <Block>
        <Button
          onPress={() => {
            if (Guest_id == "-1") {
              Alert.alert(
                "Login Required",
                "",
                [
                  { text: "Cancel" },
                  {
                    text: "Login",
                    onPress: () => navigation.navigate("Login"),
                    style: "destructive",
                  },
                ],
                { cancelable: false }
              );
            } else {
              add_comment();
            }
          }}
          color="primary"
          style={styles.createButton}
        >
          <Text
            style={{ fontFamily: "open-sans-bold" }}
            size={14}
            color={argonTheme.COLORS.WHITE}
          >
            Post
          </Text>
        </Button>
      </Block>

      </Block>


    </Block>
  );
}

const styles = StyleSheet.create({
  leaveComent: {
    // height: 200,
    alignSelf:"center",
    width: width * 0.93,
    // marginBottom: 50,
    // backgroundColor: "red",
  },
  createButton: {
    width: width * 0.2,
    height:30
  },
});
