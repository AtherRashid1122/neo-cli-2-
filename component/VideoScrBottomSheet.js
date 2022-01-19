import { Block, Text } from "galio-framework";
import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import mime from 'mime';
export default function BottomSheetComp() {
 //image picker

 const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
    //   prof_image(result.uri);
    console.log(result)
    }
  };

  const prof_image = async (data) => {
    let image = await data;
    var profileImage = new FormData();
    // profileImage.append("token", token_is);
    profileImage.append("profile_image", {
      uri: image,
      type: mime.getType(image),
      name: image && image.split("/").pop(),
    });
    // await dispatch(Profile_image_action(profileImage, navigation));
    // setInternetCheck(internetCheck + 1);
  };
  return (
    <Block style={styles.main}>
      {/* <Block row space={"between"} middle style={styles.close}>
        <Text size={25} color="#8898AA">
          Create
        </Text>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <Image
            style={{
              width: 25,
              height: 25,
              backgroundColor: "white",
              borderRadius: 20,
            }}
            source={require("../assets/cancel.png")}
          />
        </TouchableOpacity>
      </Block> */}
<TouchableOpacity  onPress={()=>pickImage()}>
      <Block row center style={styles.close}>
        <Image
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#1a2236",
            borderRadius: 20,
          }}
          source={require("../assets/upload.png")}
        />

        <Text size={20} color="#8898AA" style={{ marginLeft: 20 }}>
          Upload a video
        </Text>
      </Block>
</TouchableOpacity>
<TouchableOpacity>
      <Block row center style={styles.close}>
        <Image
          style={{
            width: 40,
            height: 40,
            //  backgroundColor: "black",
            borderRadius: 20,
          }}
          source={require("../assets/instagram-stories.png")}
        />

        <Text size={20} color="#8898AA" style={{ marginLeft: 20 }}>
          Create Story
        </Text>
      </Block>
      </TouchableOpacity>
    </Block>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: "#1a2236" },
  close: { width: "90%", height: 60, marginTop: 20 },
});
