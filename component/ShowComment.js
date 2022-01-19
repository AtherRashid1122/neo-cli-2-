import React, { useEffect, useState, useMemo } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import argonTheme from "../constant/Theme";
import { useSelector, useDispatch } from "react-redux";
import { Blog_Comment_action } from "../redux/reducers/blog/Blog_For_Each_Item_action";
const { width, height } = Dimensions.get("screen");

export default function ShowComment({ navigation, route, bid, Comments }) {
  const dispatch = useDispatch();

  useMemo(() => {
    show_comment;
  }, [CommentsHere]);
  //token
  const token_redux = useSelector((state) => state.Blog_For_Each_Item.token_is);
  // console.log(token_redux,"token from redux in Show_comment")
  //show comment function
  const show_comment = async () => {
    let id = bid;
    let type = "blog";
    let token = await token_redux;
    var bodyFormData = new FormData();
    bodyFormData.append("type", type);
    bodyFormData.append("token", token);
    bodyFormData.append("id", id);
    dispatch(Blog_Comment_action(bodyFormData, navigation));
  };

  const CommentsHere = useSelector(
    (state) => state.Blog_For_Each_Item.Blog_Comment
  );
  // console.log(CommentsHere,"kkkkk")
  const loading = useSelector((state) => state.Blog_For_Each_Item.blog_loading);
  let pic = useSelector((state) => state.Blog_For_Each_Item.Showprofile);
  let picture = pic && pic[0].profile;
  if (loading) {
    return (
      <Block center middle>
        <ActivityIndicator color={argonTheme.COLORS.PRIMARY} />
      </Block>
    );
  } else if (CommentsHere == undefined) {
    return <Text>No comments yet</Text>;
  }
  return (
    <View>
      {/* {CommentsHere &&
        CommentsHere.map((i, index) => { */}
      {/* return ( */}
      <Block row style={styles.coment_user}>
        <ImageBackground
          source={{
            // uri: picture
            uri: "https://i.pinimg.com/474x/9f/23/b2/9f23b2cd56484cdbe6d6581e799290a5.jpg",
          }}
          style={styles.coment_user_dp}
          imageStyle={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginTop: 10,
          }}
        ></ImageBackground>
        <Block row style={styles.coment_user_datee}>
          <Text
            muted
            size={19}
            style={{
              paddingTop: 9,
              fontWeight: "bold",
              fontFamily: "open-sans-regular",
              marginLeft: 10,
            }}
            color={argonTheme.COLORS.WHITE}
          >
            {/* {i.name} . */}M.Umar
          </Text>
       
        </Block>
        <Block style={styles.coment_user_com}>
          <Text
            style={{ fontFamily: "open-sans-regular" }}
            muted
            size={14}
            color={argonTheme.COLORS.WHITE}
          >
            {/* {i.comment} */}thanks
          </Text>
        </Block>
        <Block row center space="between" width={width*.4} paddingVertical={10}>
          <TouchableOpacity>
            <Text
              style={{ fontFamily: "open-sans-bold" }}
              muted
              size={14}
              color={argonTheme.COLORS.WHITE}
            >
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{ fontFamily: "open-sans-bold" }}
              muted
              size={14}
              color={argonTheme.COLORS.WHITE}
            >
              Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{ fontFamily: "open-sans-bold" }}
              muted
              size={14}
              color={argonTheme.COLORS.WHITE}
            >
              Report
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
      {/* ); */}
      {/* })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  coment_user: {
    width: width * 1,
    // height: 90,
    // borderBottomWidth: 0.5,
    // borderBottomColor:argonTheme.COLORS.WHITE,
    padding: 5,
    marginTop: 20,
    // backgroundColor: "red",
    flexWrap: "wrap",
  },
  coment_user_dp: {
    width: 50,
    height: 50,
    // borderRadius: 100,
    // backgroundColor:"blue",
    alignSelf: "center",
  },
  coment_user_name: {
    width: 235,
    paddingLeft: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  coment_user_datee: {
    width: width * 0.7,
    height: 45,
    // justifyContent: "space-between",
    // padding: 5,
    // backgroundColor: "white",
    flexDirection: "column",
  },
  coment_user_com: {
    width: width * 0.7,
    paddingVertical: 5,
    marginLeft: 60,
    // backgroundColor:"green"
  },
});
