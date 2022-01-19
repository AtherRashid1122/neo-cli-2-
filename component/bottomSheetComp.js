import { Block, Text } from "galio-framework";
import React, { forwardRef ,useImperativeHandle, useRef} from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import mime from 'mime';
import * as VideoThumbnails from 'expo-video-thumbnails';
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function BottomSheetComp(props,ref) {

  const refRBSheet = useRef();


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    if (!result.cancelled) {
      generateThumbnail(result)
    //   prof_image(result.uri);
    // console.log(result)
    }
  };
  const generateThumbnail = async (result) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        result.uri,
        {
          time: 15000,
        }
      );
      refRBSheet.current.close()
      navigation.navigate("PostVideoDesc",{url:uri,time:result.duration})

    } catch (e) {
      console.log(e);
    }
  };


return(
  <View
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  }}
>
  <RBSheet
    ref={refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={true}
    customStyles={{
      wrapper: {
        backgroundColor: "transparent"
      },
      draggableIcon: {
        backgroundColor: "#8898AA"
      },
      container:{backgroundColor: "#1a2236",}
    }}
  >
 
      <Block style={styles.main}>

<TouchableOpacity  onPress={()=>pickImage()} >
    <Block row center style={styles.close}>
    <MaterialCommunityIcons
            style={{ marginRight: 10 }}
            name="progress-upload"
            size={35}
            color={"white"}
          />
      <Text size={20} color="white" style={{ marginLeft: 15,fontSize:20,color:"white", }}>
        Upload a video
      </Text>
    </Block>
</TouchableOpacity>
<TouchableOpacity>
    <Block row center style={styles.close}>
    <MaterialCommunityIcons
            style={{ marginRight: 10 }}
            name="progress-upload"
            size={35}
            color={"white"}
          />

      <Text  color="white" style={{ marginLeft: 15,color:"white",fontSize:20 }}>
        Create Story
      </Text>
    </Block>
    </TouchableOpacity>
  </Block>
  </RBSheet>
</View>
)
}

const styles=StyleSheet.create({
  main: { flex: 1, backgroundColor: "#1a2236" },
  close: { width: "90%", height: 60, marginTop: 20 },

})
export default forwardRef(BottomSheetComp);