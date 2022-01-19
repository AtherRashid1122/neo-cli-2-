import React, { useState } from "react";
import { Block, Button, Checkbox, Input, Radio, Text } from "galio-framework";
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Sizes } from "../../constant/styles";
const { height, width } = Dimensions.get("window");
export default function PostVideoDesc({ route, navigation }) {
  console.log(navigation);
  const [upstatecate, setupstatecate] = useState(false);
  const [upstatedesc, setupstatedesc] = useState(false);
  const [upstateprivcy, setupstateprivcy] = useState(false);
  const [upstateplay, setupstateplay] = useState(false);
  const [upstatekeyword, setupstatekeyword] = useState(false);

  const [privateValue, setprivateValue] = useState(false);
  const [publicValue, setpublicValue] = useState(false);

  let img = route.params?.url;

  let duration = route.params?.time;
  // console.log(duration)
  var milliseconds = parseInt(duration % 1000),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let time = hours + ":" + minutes + ":" + seconds;

  const TitleComp = () => {
    return (
      <Block middle style={styles.titl1}>
        <Input
          borderless
          placeholderTextColor="white"
          style={styles.inpt}
          placeholder="Enter title here.. "
          fontSize={20}
        ></Input>
      </Block>
    );
  };
  const AddDescription = () => {
    return (
      <Block style={styles.titl}>
        <TouchableOpacity
          style={styles.TitlePress}
          onPress={() => {
            setupstatedesc(!upstatedesc);
          }}
        >
          <Block center row>
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="description"
              size={20}
              color={"white"}
            />
            <Text size={16} color="white">
              Add description
            </Text>
          </Block>
          {upstatedesc == false ? (
            <MaterialCommunityIcons name="plus" size={25} color={"white"} />
          ) : (
            <MaterialCommunityIcons name="minus" size={25} color={"white"} />
          )}
        </TouchableOpacity>
        {upstatedesc == false ? null : (
          <Block width={width * 0.87} center>
            <Input
              numberOfLine={10}
              placeholderTextColor="white"
              multiline={true}
              numberOfLines={4}
              style={{
                minHeight: 80,
                backgroundColor: "#1a2236",
                marginTop: 10,
                borderWidth: 0.17,
                paddingLeft: 12,
                paddingTop: 10,
                alignItems: 'flex-start',
              }}
              placeholder="Add description"
            />
          </Block>
        )}
      </Block>
    );
  };
  const Category = () => {
    return (
      <Block style={styles.titl}>
        <TouchableOpacity
          style={styles.TitlePress}
          onPress={() => {
            setupstatecate(!upstatecate);
          }}
        >
          <Block center row>
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="category"
              size={20}
              color={"white"}
            />
            <Text size={16} color="white">
              Category
            </Text>
          </Block>
          {upstatecate == false ? (
            <MaterialCommunityIcons name="plus" size={25} color={"white"} />
          ) : (
            <MaterialCommunityIcons name="minus" size={25} color={"white"} />
          )}
        </TouchableOpacity>
        {upstatecate == false ? null : (
          <Block
            space={"between"}
            style={{ marginVertical: 15, paddingHorizontal: 29 }}
          >
            <Radio
              labelStyle={{ color: "white", fontSize: 15 }}
              radioOuterStyle={{ height: 15, width: 15, marginVertical: 8 }}
              label="Classic collection"
              onChange={() => {
                setprivateValue(!privateValue), setpublicValue(false);
              }}
            />
            <Radio
              labelStyle={{ color: "white", fontSize: 15 }}
              radioOuterStyle={{ height: 15, width: 15, marginVertical: 8 }}
              label="2020 collection"
              onChange={() => {
                setprivateValue(false), setpublicValue(true);
              }}
            />
            <Radio
              labelStyle={{ color: "white", fontSize: 15 }}
              radioOuterStyle={{ height: 15, width: 15, marginVertical: 8 }}
              label="2021 collection"
              onChange={() => {
                setprivateValue(false), setpublicValue(true);
              }}
            />
          </Block>
        )}
      </Block>
    );
  };
  const Privacy = () => {
    return (
      <Block style={styles.titl}>
        <TouchableOpacity
          style={styles.TitlePress}
          onPress={() => {
            setupstateprivcy(!upstateprivcy);
          }}
        >
          <Block center row>
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="privacy-tip"
              size={20}
              color={"white"}
            />
            <Text size={16} color="white">
              Privacy
            </Text>
          </Block>

          {upstateprivcy == false ? (
            <MaterialCommunityIcons name="plus" size={25} color={"white"} />
          ) : (
            <MaterialCommunityIcons name="minus" size={25} color={"white"} />
          )}
        </TouchableOpacity>
        {upstateprivcy == false ? null : (
          <Block
            space={"between"}
            style={{ height: 50, marginVertical: 15, paddingHorizontal: 29 }}
          >
            <Radio
              labelStyle={{ color: "white", fontSize: 15 }}
              radioOuterStyle={{ height: 15, width: 15 }}
              label="Private"
              onChange={() => {
                setprivateValue(!privateValue), setpublicValue(false);
              }}
            />
            <Radio
              labelStyle={{ color: "white", fontSize: 15 }}
              radioOuterStyle={{ height: 15, width: 15 }}
              label="Public"
              onChange={() => {
                setprivateValue(false), setpublicValue(true);
              }}
            />
          </Block>
        )}
      </Block>
    );
  };

  const PlaylistComp = () => {
    return (
      <Block style={styles.titl}>
        <TouchableOpacity
          style={styles.TitlePress}
          onPress={() => {
            setupstateplay(!upstateplay);
          }}
        >
          <Block center row>
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="playlist-add"
              size={20}
              color={"white"}
            />
            <Text size={16} color="white">
              Add to playlist
            </Text>
          </Block>
          {upstateplay == false ? (
            <MaterialCommunityIcons name="plus" size={25} color={"white"} />
          ) : (
            <MaterialCommunityIcons name="minus" size={25} color={"white"} />
          )}
        </TouchableOpacity>
        {upstateplay == false ? null : (
          <Block
            space={"between"}
            style={{ marginVertical: 15, paddingHorizontal: 29 }}
          >
            <Radio
              labelStyle={{ color: "white", fontSize: 15 }}
              radioOuterStyle={{ height: 15, width: 15, marginVertical: 8 }}
              label="Classic collection"
              onChange={() => {
                setprivateValue(!privateValue), setpublicValue(false);
              }}
            />
            <Radio
              labelStyle={{ color: "white", fontSize: 15 }}
              radioOuterStyle={{ height: 15, width: 15, marginVertical: 8 }}
              label="2020 collection"
              onChange={() => {
                setprivateValue(false), setpublicValue(true);
              }}
            />
            <Radio
              labelStyle={{ color: "white", fontSize: 15 }}
              radioOuterStyle={{ height: 15, width: 15, marginVertical: 8 }}
              label="2021 collection"
              onChange={() => {
                setprivateValue(false), setpublicValue(true);
              }}
            />
          </Block>
        )}
      </Block>
    );
  };
  const Keywords = () => {
    return (
      <Block style={styles.titlkey}>
        <TouchableOpacity
          style={styles.TitlePress}
          onPress={() => {
            setupstatekeyword(!upstatekeyword);
          }}
        >
          <Block center row>
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="keyboard"
              size={20}
              color={"white"}
            />
            <Text size={16} color="white">
              Keyword
            </Text>
          </Block>
          {upstatekeyword == false ? (
            <MaterialCommunityIcons name="plus" size={25} color={"white"} />
          ) : (
            <MaterialCommunityIcons name="minus" size={25} color={"white"} />
          )}
        </TouchableOpacity>
        {upstatekeyword == false ? null : (
          <Block center>
            <Block
              row
              space={"between"}
              width={width * 0.87}
              style={{ marginTop: 15 }}
            >
              <Input
                // borderless
                placeholderTextColor="white"
                style={{
                  width: width * 0.36,
                  backgroundColor: "#1a2236",
                  borderWidth: 0.17,
                }}
                placeholder="Keyword 1"
              />

              <Input
                // borderless
                placeholderTextColor="white"
                style={{
                  width: width * 0.36,
                  backgroundColor: "#1a2236",
                  borderWidth: 0.17,
                }}
                placeholder="Keyword 2"
              />
            </Block>
            <Block width={width * 0.87}>
              <Input
                // borderless
                placeholderTextColor="white"
                style={{
                  width: width * 0.35,
                  backgroundColor: "#1a2236",
                  borderWidth: 0.17,
                }}
                placeholder="Keyword 3"
              />
            </Block>
          </Block>
        )}
      </Block>
    );
  };
  const header = () => {
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={23} color={"white"} />
        </TouchableOpacity>

        <Button style={{ margin: 0, height: 30, width: 117 }}>
          <Text size={18} color="white">
            Save in Draft
          </Text>
        </Button>
      </View>
    );
  };
  return (
    <Block style={{ flex: 1, backgroundColor: "#1a2236" }}>
      {header()}
      <ScrollView style={{ backgroundColor: "#1a2236", paddingBottom: 10 }}>
        <Block style={{ flex: 1, backgroundColor: "#1a2236" }}>
          <ImageBackground style={styles.main} source={{ uri: img }}>
            <Text size={20} color="white">
              {time}
            </Text>
          </ImageBackground>
          <Block center row style={styles.profile}>
            <Image
              style={{
                width: 27,
                height: 27,
                borderRadius: 20,
                marginRight: 20,
              }}
              source={{ uri: img }}
            />
            <Text size={18} color="white">
              Code with UmarCh
            </Text>
          </Block>
          <Block
            center
            style={{
              width: width * 0.95,
              borderBottomWidth: 0.4,
              marginTop: 5,
              borderColor: "#eeeeee",
            }}
          />

          {TitleComp()}
          <Block
            center
            style={{
              width: width * 0.95,
              borderBottomWidth: 0.4,
              marginBottom: 15,
              borderColor: "#eeeeee",
            }}
          />

          {AddDescription()}
          {Category()}

          {Privacy()}

          {PlaylistComp()}

          {Keywords()}
          <Block style={styles.titl}>
            <Checkbox
              color="white"
              iconColor="#1a2236"
              label="Appropriate for child"
              labelStyle={{ color: "white" }}
            />
          </Block>
          <Block style={styles.titl}>
            <Checkbox
              color="white"
              iconColor="#1a2236"
              label="Upload on Share Slate ?"
              labelStyle={{ color: "white" }}
            />
          </Block>
          <Block row middle center style={styles.btnContainer}>
            <Button style={{ width: width * 0.45 }}>
              <Text size={18} color="white">
                Publish
              </Text>
            </Button>

            <Button style={{ backgroundColor: "white", width: width * 0.45 }}>
              <Text size={18} color="#1a2236">
                Delete
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    height: 80,
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginLeft: Sizes.fixPadding + 5.0,
    marginRight: Sizes.fixPadding + 5.0,
    marginBottom: 10,
  },
  main: { width: width, height: 300, padding: 10, backgroundColor: "#1a2236" },
  profile: { width: width * 0.95, marginVertical: 25 },
  titl: { width: width * 0.95, alignSelf: "center", marginVertical: 15 },
  titl1: {
    width: width,
    paddingLeft: 0,
    alignSelf: "center",
    // marginVertical: 1,
    // backgroundColor: "red",
  },
  titlkey: { width: width * 0.95, alignSelf: "center", marginVertical: 15 },
  TitlePress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upDown: { width: 15, height: 15, borderRadius: 20, marginRight: 20 },

  inpt: { backgroundColor: "#1a2236", height: 50, paddingLeft: 11 },
  btn: { width: 116 },
  btnContainer: { width: width * 0.95, marginVertical: 30 },
});
