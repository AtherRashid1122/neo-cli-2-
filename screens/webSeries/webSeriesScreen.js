import React, { Component, useRef, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  BackHandler,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
  
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import IconExtra from "../../component/Icon";
const { height, width } = Dimensions.get("window");
import { SimpleLineIcons } from '@expo/vector-icons';
// import Video from 'react-native-video';
import { withNavigation } from "react-navigation";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import VideoPlayer from "expo-video-player";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import { Snackbar,  } from "react-native-paper";
import { Block, Button } from "galio-framework";
import VideoPlayer from "expo-video-player";
import { setStatusBarHidden } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { Video } from "expo-av";
import { argonTheme } from "../../constant";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Icon } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDrumSteelpan } from "@fortawesome/free-solid-svg-icons";
import AddComment from "../../component/AddComment";
import ShowComment from "../../component/ShowComment";
import { Octicons } from '@expo/vector-icons';
// import VideoPlayers from 'react-native-video-players';

// const { width } = Dimensions.get("window");


const data = [
  {
    id: "1",
    name:'Roger Livingstone * 3 days ago',
    title:'This is the human race and its finest History being made right before our eyes',
    rep:'13 REPLIES',
    cmnts:'15',
    likes:'180'

  },
  {
    id: "2",
    name:'Roger Livingstone * 3 days ago',
    title:'This is the human race and its finest History being made right before our eyes',
    rep:'8 REPLIES',
    cmnts:'7',
    likes:'120'
  },

  {
    id: "3",
    name:'Roger Livingstone * 3 days ago',
    title:'This is the human race and its finest History being made right before our eyes',
    rep:'6 REPLIES',
    cmnts:'13',
    likes:'530'

    
  },
  {
    id: "4",
    name:'Roger Livingstone * 3 days ago',
    title:'This is the human race and its finest History being made right before our eyes',
    rep:'19 REPLIES',
    cmnts:'14',
    likes:'410'



  },
  
];



const episodesList = [
  {
    id: "1",
    episodeHookImage: require("../../assets/images/episode/episode_1.jpg"),
    episodeNumber: 1,
  },
  {
    id: "2",
    episodeHookImage: require("../../assets/images/episode/episode_2.jpg"),
    episodeNumber: 2,
  },
  {
    id: "3",
    episodeHookImage: require("../../assets/images/episode/episode_3.jpg"),
    episodeNumber: 3,
  },
  {
    id: "4",
    episodeHookImage: require("../../assets/images/episode/episode_4.jpg"),
    episodeNumber: 4,
  },
];

const alsoLikeMoviesList = [
  {
    id: "1",
    movieHookImage: require("../../assets/images/popular_movies/popular_movies_1.jpg"),
  },
  {
    id: "2",
    movieHookImage: require("../../assets/images/popular_movies/popular_movies_2.jpg"),
  },
  {
    id: "3",
    movieHookImage: require("../../assets/images/popular_movies/popular_movies_3.jpg"),
  },
  {
    id: "4",
    movieHookImage: require("../../assets/images/popular_movies/popular_movies_4.jpg"),
  },
  {
    id: "5",
    movieHookImage: require("../../assets/images/popular_movies/popular_movies_5.jpg"),
  },
  {
    id: "6",
    movieHookImage: require("../../assets/images/popular_movies/popular_movies_6.jpg"),
  },
];




const more = [
  {
    id: "0",
    title: 'Edit Post',
  },
  {
    id: "1",
    title: 'Pinned Post',
  },
  {
    id: "2",
    title: 'Pinned Post',
  },
  {
    id: "3",
    title: 'Hide Post',
  },
  {
    id: "4",
    title: 'Validate Post',
  },



];

const multiplexMovieList = [
  {
    id: "1",
    movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_1.jpg"),
  },
  {
    id: "2",
    movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_2.jpg"),
  },
  {
    id: "3",
    movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_3.jpg"),
  },
  {
    id: "4",
    movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_4.jpg"),
  },
  {
    id: "5",
    movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_5.jpg"),
  },
  {
    id: "6",
    movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_6.jpg"),
  },
];

const itemWidth = Math.round(width * 0.8);

function WebSeriesScreen({ navigation }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(true);
  const [value, setValue] = useState(0);

  const [moreDetail, setmoreDetail] = useState(false);
  const [folow, setfolow] = useState(false);
  const [menuShow, setmenuShow] = useState(false);
  const [inFullscreen, setInFullsreen] = useState(false);
  const [inFullscreen2, setInFullsreen2] = useState(false);
const [pictureInPicture,setpictureInPicture]=useState(true)
  const playInBackground = true; // or false

  const videoRef = useRef(null);
  const refRBSheet = useRef();
  const refVideo = useRef(null);
  const refVideo2 = useRef(null);
  const refScrollView = useRef(null);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);


  const renderItemflat=({item,name})=>{
    return(
      <ScrollView scrollEnabled >

<Block style={{backgroundColor:'#1a2236',}}>
   

   <Block row style={{marginTop:20,backgroundColor:'#1a2236',marginLeft:15,}}>
   <ImageBackground
                 source={{
                   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
                 }}
                 style={{ width: 60, height: 60 }}
                 resizeMode="cover"
                 imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
               >
        
               </ImageBackground>
   <Block style={{marginLeft:15,marginTop:10}}>
        <Text style={{color:'#eee'}}>
          Saad Irfan
        </Text>
        <Text style={{color:'grey'}}>
           6 hours ago
        </Text>
        </Block>
   
        <Block row center space="evenly" style={{ position:'absolute',right:25 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgb(93,113,227)",
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconExtra
                  size={12}
                  color="white"
                  name="like1"
                  family="Antdesign"
                  style={{ paddingBottom: 1 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={{
                backgroundColor: "red",
                width: 20,
                height: 20,
                borderRadius: 20,
                right: 5,
                justifyContent: "center",
                alignItems: "center",
                // alignItems: "center",
              }}
            >
              <IconExtra
                size={12}
                color="white"
                name="heart"
                family="Antdesign"
                style={{ paddingLeft: 1, paddingTop: 1 }}
              />
            </TouchableOpacity>
              <Text
                style={{ fontFamily: "open-sans-regular" ,color:'#eee',marginLeft:2,fontSize:12}}
                muted
                // size={12}
                // color={argonTheme.COLORS.TEXT}
               
              >
                214.5 k
              </Text>
            </Block>
    
               </Block>
   <Block style={{color:'white',width:'90%',marginTop:10,backgroundColor:'#293145',borderRadius:5,padding:5,marginLeft:15}}>
               <Text style={{color:'#eee',width:'97%',backgroundColor:'#293145',marginLeft:5,fontSize:15}}>
          Great blog to read.Great blog to read.Read more and more.
        </Text>
        </Block>
         </Block>


{/* <View style={{flexDirection:'row',height:height/5.3,borderBottomColor:'grey',borderBottomWidth:0.5}}>
<Block style={{marginLeft:15,marginTop:2}} >
        <ImageBackground
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
              }}
              style={{ width: 50, height: 50,marginTop:10, }}
              resizeMode="cover"
              imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
            >
       
            </ImageBackground>


           
            </Block>
            <Block style={{marginTop:10,marginLeft:15}}>
             <Text style={{color:'white'}}>{item.name}</Text> 
             <Text style={{color:'white',width:'65%',fontSize:12}}>{item.title}</Text> 


        
             <Block row style={{marginTop:15,width:'70%',}} >
            <TouchableOpacity>
              <Ionicons name="heart-circle" size={15} color="red" />

             </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginLeft:5 }}>
            {item.likes}
            </Text>
            <AntDesign style={{marginLeft:15}} name="dislike2" size={15} color="red" />   
            <Block row  style={{marginLeft:30}} >
            <MaterialCommunityIcons name="comment-text-outline" size={15} color="white" />       
            <Text style={{color:'white',fontSize:10,marginLeft:5}}>{item.cmnts}</Text>   
               </Block>  

        
                  <Block row  style={{position:'absolute',right:0}}>
            <Feather name="more-vertical" size={20} color="white" />
            </Block>
            
          </Block >
          <Text style={{color:'lightblue',width:'65%',fontSize:12,marginTop:15}}>{item.rep}</Text> 

            </Block>
    

</View> */}

   
      </ScrollView>
    )
  }



  const renderItemmore=({item,name})=>{
    return(
      <ScrollView scrollEnabled >

<Block style={{backgroundColor: "#293145",}}>
   

   <Block row style={{margin:16,}}>
  
        <Text style={{color:'white'}}>
          {item.title}
        </Text>
        
      
   
        <Block row center space="evenly" style={{ position:'absolute',right:10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgb(93,113,227)",
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconExtra
                  size={12}
                  color="white"
                  name="like1"
                  family="Antdesign"
                  style={{ paddingBottom: 1 }}
                />
              </TouchableOpacity>

          
       
            </Block>
    
               </Block>

         </Block>


   
      </ScrollView>
    )
  }

  const onProgress = data => {
    // Video Player will continue progress even if the video already ended
    if (!isLoading && !paused) {
      setCurrentTime(data.currentTime);
      setValue(data.currentTime);
    }
  };

  const onLoad = data => {
    setDuration(data.duration);
    setIsLoading(false);
    setPaused(false);
  };

  const onLoadStart = () => {
    setIsLoading(true);
    setCurrentTime(0);
    setPaused(true);
  };

  const onSlidingStart = time => {
    setPaused(true);
    setCurrentTime(time);
  };

  const onSlidingComplete = time => {
    setValue(time);
    setCurrentTime(time);
    setPaused(false);
    videoRef.current.seek(time);
  };

  const onValueChange = time => {
    setCurrentTime(time);
  };

  const muliplexMovies = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("WebSeries")}
      >
        <Image
          source={item.movieHookImage}
          style={styles.allMoviesHookImageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );


    return (
      <FlatList
        data={multiplexMovieList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  };


  const titleWithMore = ({ title }) => {
    return (
      <View style={styles.titleWithMoreTextContentStyle}>
        <Text style={{ ...Fonts.whiteColor20Medium }}>{title}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("MoreMovies")}
        >
          <Text style={{ ...Fonts.primaryColor16Light }}>MORE</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleBackButton = () => {
    navigation.pop();
    return true;
  };

  return (
    <SafeAreaView style={{  backgroundColor: "#1a2236" }}>


      <Block
        row

        style={{
          //   borderBottomWidth: 0.5,
          borderColor: "white",
          margin: 20,
          // justifyContent:'space-between',
          justifyContent: 'space-around',
          marginTop: 30


        }}
      >
        <TouchableOpacity>
          <Block middle >
            <AntDesign style={{ marginLeft: -20 }} name="left" size={24} color="white" />
          </Block >
        </TouchableOpacity>
        
        <Block middle  >

          <Text style={{ color: 'white', fontSize: 20, marginLeft: -10 }}>
            Now Playing
          </Text>
        </Block>
        <TouchableOpacity>
          <Block middle style={{ marginLeft: 20 }} >
            <SimpleLineIcons name="bulb" size={24} color="white" />
          </Block>
        </TouchableOpacity>
        <TouchableOpacity>
          <Block middle style={{ marginLeft: 5 }} >
            <FontAwesome name="share-square-o" size={24} color="white" />

          </Block>
        </TouchableOpacity>
        <TouchableOpacity>
          <Block middle style={{ marginLeft: 5 }} >
            <Feather name="copy" size={24} color="white" />

          </Block>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => refScrollView.current.open()}>
          <Block middle style={{ marginLeft: 5 }} >
            <Feather name="more-vertical" size={24} color="white" />

          </Block>
        </TouchableOpacity>
      </Block>
<ScrollView  >

      <RBSheet
      // style={{flex:1}}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={height/1.5}
        // height={'40%'}
        // style={{backgroundColor:'red'}}s
        customStyles={{     
         container:{
          // backgroundColor: "#1a2236"  
          backgroundColor: "#293244",
        }, 
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "white",
            color:'red'
          }

       

      
        }}
      >


      <Block  style={{backgroundColor:'#293244'}} >
   

<Block row style={{marginLeft:15,marginTop:-10}}>
<ImageBackground
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
              }}
              style={{ width: 60, height: 60 }}
              resizeMode="cover"
              imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
            >
              <Block style={{ position: "absolute", left: 40, top: 30 }}>
                <MaterialIcons
                  name="check-circle"
                  size={25}
                  color={argonTheme.COLORS.WHITE}
                // onPress={() => navigation.navigate("SearchScreen")}
                />
              </Block>
            </ImageBackground>
<Block style={{marginLeft:15,marginTop:10}}>
     <Text style={{color:'#eee'}}>
       Saad Irfan
     </Text>
     <Text style={{color:'#eee'}}>
        6 hours ago
     </Text>
     </Block>

     <Block row  style={{position:'absolute',right:20}}>
            <Feather name="more-horizontal" size={30} color="#eee" />
            </Block>
 
            </Block>

               <Text style={{color:'#eee',width:'80%',backgroundColor:'#293145',marginLeft:5,fontSize:15,marginLeft:25,marginBottom:5,marginTop:10}}>
          Great blog to read.Great blog to read.Read more and more.
        </Text>
        {/* </Block> */}
      
      </Block>

   <ScrollView scrollEnabled > 
<Block >
      <FlatList data={data} renderItem={renderItemflat} />
      </Block>
      </ScrollView> 
      <Block style={{backgroundColor:'#1a2236',height:height/10}}>
<Block row style={{marginTop:10,height:height/13,backgroundColor:'transparent',borderRadius:50,marginLeft:10,marginRight:10,alignItems:'center',justifyContent:'space-between',borderColor:'grey',borderWidth:1}}>


<Block row style={{marginLeft:10}}>

<TouchableOpacity>
<FontAwesome5 name="smile" size={30} color="grey" />
</TouchableOpacity>
<Block style={{width:'80%',marginLeft:10,}}>
<TextInput color={'white'} placeholderTextColor={"grey"} placeholder="Type Your reply here...">

</TextInput>
</Block>
</Block>

<TouchableOpacity>
<AntDesign style={{right:15}} name="arrowup" size={30} color="grey" />
</TouchableOpacity>
</Block>
</Block>











  
          </RBSheet>
          </ScrollView>


{/* ///////////////////////////////////////////////3 dots ////////////////////////////////////// */}

          <ScrollView  >

<RBSheet
// style={{flex:1}}
  ref={refScrollView}
  closeOnDragDown={true}
  closeOnPressMask={false}
  height={height/2.9}
  // height={'40%'}
  // style={{backgroundColor:'red'}}s
  customStyles={{     
   container:{
    // backgroundColor: "#1a2236"  
    backgroundColor: "#293244",
    // backgroundColor: "red",

    
  }, 
    wrapper: {
      backgroundColor: "transparent"
    },
    draggableIcon: {
      backgroundColor: "grey",
      color:'red'
    }

 


  }}
>



<ScrollView scrollEnabled > 

<FlatList data={more} renderItem={renderItemmore} />

</ScrollView> 











{/* <Block
  row
  style={{
    //   borderBottomWidth: 0.5,
    // borderColor: "white",
    // margin: 20,
    // justifyContent:'space-between',
    justifyContent: 'space-around',
   
    backgroundColor:'#1b2235',
    height:60,
   
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'grey'
    // alignSelf:'center',

    

  }}
>
<Block row style={{position:'absolute',left:0}}>
  
  <Block middle  >

    <Text style={{ color: 'white', fontSize: 14, marginLeft:15 }}>
      Comments
    </Text>
  </Block>
  <Block middle  >

<Text style={{ color: 'white', fontSize: 14, marginLeft:10}}>
1.3K
</Text>
</Block>
</Block>  
<Block row style={{position:'absolute',right:0}}>
  <TouchableOpacity>
    <Block middle style={{ marginRight: 25 }} >
    <AntDesign name="menu-unfold" size={24} color="white" />
    </Block>
  </TouchableOpacity>
  <TouchableOpacity style={{ marginRight: 15 }}>
    <Block middle  >
    <Entypo onPress={() => refRBSheet.current.close()} name="cross" size={28} color="white" />
    </Block>
  </TouchableOpacity>


  </Block>


</Block>
<Block style={{margin:15}}>
<Text style={{color:'white',fontSize:13}}>
    Remember to keep comments respectful and  to follow our 
  </Text>
  <Text style={{color:'white',fontSize:13}}>
    Comunity Guideline
  </Text>

<Block row style={{marginTop:15}}>
  <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
        }}
        style={{ width: 50, height: 50,marginTop:10, }}
        resizeMode="cover"
        imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
      >
 
      </ImageBackground>

      <TextInput color="white" style={{backgroundColor:'transparent',marginLeft:20,width:'80%'}} placeholder="Add a Public comment.." placeholderTextColor='white'>

      </TextInput>
      </Block>

</Block>
<Block style={{borderWidth:0.5,height:0.5,width:'100%',borderColor:'grey',marginTop:-5}}>

</Block>

<FlatList data={data} renderItem={renderItemflat} /> */}
    </RBSheet>
    </ScrollView>

          
      <ScrollView>
      <Block center>
        <VideoPlayer
          videoProps={{
            shouldPlay: true,   
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
              uri: "https://shareslate.com/files/media/video/38GSvh9ELFCmJyt2cNafDbPUeK5si3z1.mp4",
            },
            ref: refVideo2,
          }}

          // icon={{
          //   play: <Text style={{ color: '#FFF' }}>PLAY</Text>,
          //   pause: <Text style={{ color: '#FFF' }}>PAUSE</Text>,
          // }}
       
    

          fullscreen={{
            inFullscreen: inFullscreen2,
            enterFullscreen: async () => {
              setStatusBarHidden(true, "fade");
              setInFullsreen2(!inFullscreen2);
              await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
              );
              refVideo2.current.setStatusAsync({
                shouldPlay: true,
              });
            },
            exitFullscreen: async () => {
              setStatusBarHidden(false, "fade");
              setInFullsreen2(!inFullscreen2);
              await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_UP
              );
            },
          }}
          style={{
            videoBackgroundColor: "black",
            height: inFullscreen2
              ? Dimensions.get("window").width
              : width / 1.77,
            width: inFullscreen2 ? Dimensions.get("window").height : width,
          }}
        />
      </Block>


{/* 
        <Block >
          

            <Video
              resizeMode={"stretch"}
              // contentContainerStyle={{marginTop:40}}
              controls={true}
            // volume={1.0}
            duration={3424}
              source={{
                uri: "https://shareslate.com/files/media/video/38GSvh9ELFCmJyt2cNafDbPUeK5si3z1.mp4",
              }}

              onLoad={onLoad}
              onLoadStart={onLoadStart}
              onProgress={onProgress}
              paused={paused}
              ref={videoRef}
              // resizeMode="cover"
              // ignoreSilentSwitch="ignore"
              // playWhenInactive
              // playInBackground
              // pictureInPicture

              // pictureInPicture={pictureInPicture}
              // playInBackground={true}
              // onPictureInPictureStatusChanged={(props) => console.log('PIP STATE CHANGE', props)}
              // style={styles.video}
              style={{ height: 200,width:'100%' }}

            />
          
        </Block> */}

        <Block paddingHorizontal={15} paddingVertical={20}>
          <Text
            style={{
              fontFamily: "open-sans-bold",
              fontWeight: "500",
              // alignSelf: "center",
              color: "white",
              fontSize: 18,
            }}
          >
            What is Share Slate and how it can help you and need your help ?
          </Text>
        </Block>
        <Block>
          <Block middle row space="between" paddingHorizontal={15}>
            <Block row>
              <Text
                style={{
                  fontFamily: "open-sans-bold",
                  fontWeight: "500",
                  // alignSelf: "center",
                  color: "white",
                  fontSize: 10,
                  // marginTop:-15
                }}
              >
                7 Hours ago
              </Text>

              <View style={{ height: 10, width: 10, backgroundColor: 'white', borderRadius: 100, marginLeft: 10, marginTop: 5 }}>

              </View>

              <Octicons name="globe" size={22} color="white" style={{ marginLeft: 15, marginTop: -2 }} />
            </Block>


            <TouchableOpacity
              onPress={() => {
                setmoreDetail(!moreDetail);
              }}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              {moreDetail == false ? (
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

          {moreDetail == false ? null : (
            <Block padding={15}>
              <Text
                style={{
                  fontFamily: "open-sans-bold",
                  fontWeight: "500",
                  color: "white",
                  fontSize: 16,
                }}
              >
                This is a video
              </Text>
            </Block>
          )}
          <Block paddingHorizontal={15} paddingVertical={10}>
            <Text
              style={{
                fontFamily: "open-sans-bold",
                fontWeight: "500",
                // alignSelf: "center",
                color: "lightblue",
                fontSize: 13,
              }}
            >
              #action#sports#action#sport#action#sports#action#sport#action#sports#action#sport
            </Text>
          </Block>

     
        </Block>

        <Block row space="between" paddingHorizontal={10} paddingVertical={20}>
          <Block row center paddingHorizontal={10}>
            <ImageBackground
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
              }}
              style={{ width: 60, height: 60 }}
              resizeMode="cover"
              imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
            >
              <Block style={{ position: "absolute", left: 40, top: 30 }}>
                <MaterialIcons
                  name="check-circle"
                  size={25}
                  color={argonTheme.COLORS.WHITE}
                // onPress={() => navigation.navigate("SearchScreen")}
                />
              </Block>
            </ImageBackground>
            <Block style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontFamily: "open-sans-bold",
                  fontWeight: "600",
                  color: "white",
                  fontSize: 18,
                  marginLeft: 15,
                  padding: 3,
                }}
              >
                Rahul Tripathi Tripathi
              </Text>
              <Block row>
                <Text
                  style={{
                    fontFamily: "open-sans-bold",
                    fontWeight: "500",
                    color: "white",
                    fontSize: 13,
                    marginLeft: 15,
                    padding: 3,
                  }}
                >
                  10.2K Follower
                </Text>

                <Text
                  style={{
                    fontFamily: "open-sans-bold",
                    fontWeight: "500",
                    color: "#7752BD",
                    fontSize: 13,
                    marginLeft: 14,
                    padding: 3,
                  }}
                >
                  Follow
                </Text>

                <Block middle>
                  <Octicons name="device-camera-video" size={24} color="white" style={{ marginLeft: 30 }} />
                </Block>

              </Block>
            </Block>
          </Block>
          <Block >
            {/* <Button
            style={{ width: 20, height: 35 ,backgroundColor:'transparent'}}
            onPress={() => {
              setfolow(!folow);
            }}
          > */}
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={34}
                color="rgb(253,189,109)"
                style={{ marginTop: 15 }}
              // style={{borderRightWidth:  1,borderRightColor:"white",width:27,}}
              />
            </TouchableOpacity>
            {/*             
            <Text
              style={{
                fontFamily: "open-sans-bold",
                fontWeight: "600",
                color: "white",
                fontSize: 15,
                marginLeft: 10,
              }}
            >
              {folow == false ? "Follow" : "Unfollow"}
            </Text> */}
            {/* </Button> */}
          </Block>
        </Block>


        <Block
          center
          style={{
            borderBottomWidth: 0.5,
            borderColor: "white",
            width: width * 0.94,
            marginTop: -10
          }}
        />

        {/* /////////////////////// */}

        <Block
          row

          style={{
            //   borderBottomWidth: 0.5,
            borderColor: "white",
            margin: 10,
            // justifyContent:'space-between',
            justifyContent: 'space-around'


          }}
        >

          <Block middle >
            <TouchableOpacity>
              <AntDesign name="like1" size={30} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>
              2.5M
            </Text>

          </Block >


          <Block middle style={{ marginLeft: 10 }} >
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <FontAwesome name="comment" size={30} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>
              2.56M Comments
            </Text>
          </Block>



          <Block middle style={{ marginLeft: 10, fontSize: 12 }} >
            <TouchableOpacity>
              <Entypo name="share" size={30} color="white" />
            </TouchableOpacity>


            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>
              2.56M Shares
            </Text>
          </Block>

          <Block middle style={{ marginLeft: 10 }} >
            <TouchableOpacity>
              <SimpleLineIcons name="eye" size={30} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>
              4.52M Views
            </Text>
          </Block>





    


        </Block>



        {titleWithMore({ title: "You May also Like" })}
        {muliplexMovies()}



      </ScrollView>


    </SafeAreaView>
  );

 


}

const styles = StyleSheet.create({
  headerConentStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blackColor,
    paddingVertical: Sizes.fixPadding + 5.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
  },
  playButtonStyle: {
    position: "absolute",
    bottom: -30.0,

    width: 60.0,
    height: 60.0,
    borderRadius: 30.0,
    alignItems: "center",
    justifyContent: "center",
  },
  episodeHookImageStyle: {
    height: 140.0,
    width: 200.0,
    borderRadius: Sizes.fixPadding - 3.0,
    marginRight: Sizes.fixPadding + 5.0,
  },
  movieInfoContentStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding + 10.0,
  },
  ratingOuterContentStyle: {
    height: 47.0,
    width: 47.0,
    borderRadius: 23.5,
    borderColor: Colors.whiteColor,
    borderWidth: 1.0,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingInnerContentStyle: {
    height: 39.5,
    width: 39.5,
    borderRadius: 19.7,
    backgroundColor: Colors.whiteColor,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  moviePosterImageStyle: {
    height: 400.0,
    width: width - 40,
    alignSelf: "center",
    borderRadius: Sizes.fixPadding - 5.0,
  },
  titleWithMoreTextContentStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding + 5.0,
    alignItems: "center",
  },
  moviesHookImageStyle: {
    height: 140.0,
    width: 110.0,
    borderRadius: Sizes.fixPadding,
    marginRight: Sizes.fixPadding + 2.0,
  },
  listItemsContentStyle: {
    paddingLeft: Sizes.fixPadding + 5.0,
    paddingBottom: Sizes.fixPadding + 5.0,
  },
  snackBarStyle: {
    position: "absolute",
    bottom: -10.0,
    left: -10.0,
    right: -10.0,
    backgroundColor: Colors.whiteColor,
  },
  navbar: {
    backgroundColor: "transparent",
    height: Platform.OS == "ios" ? height * 0.1 : height * 0.11,
    paddingTop: Platform.OS == "ios" ? height * 0.05 : height * 0.07,
    borderBottomColor: "rgb(243,242,239)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    zIndex: 5,
  },
  headerStyle: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding + 30,
  },
  sliderImageStyle: {
    width: itemWidth,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
  },
  listItemsContentStyle: {
    paddingLeft: Sizes.fixPadding + 5.0,
    paddingBottom: Sizes.fixPadding + 5.0,
  },
  categoryContentStyle: {
    borderRadius: Sizes.fixPadding - 3.0,
    paddingVertical: Sizes.fixPadding - 1.0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Sizes.fixPadding * 2.5,
    marginRight: Sizes.fixPadding + 2.0,
  },
  titleWithMoreTextContentStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding + 5.0,
    alignItems: "center",
  },
  allMoviesHookImageStyle: {
    height: 140.0,
    width: 110.0,
    borderRadius: Sizes.fixPadding,
    marginRight: Sizes.fixPadding + 2.0,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "transparent",

    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
  },
  main: { flex: 1, backgroundColor: "#1a2236" },
  close: { width: "90%", height: 60, marginTop: 20 },

  videoContainer: {
    flex: 5,
    alignItems: 'center',

    backgroundColor: 'red'
  },
  videoSubContainer: {
    borderRadius: 5,
    // overflow: 'hidden',
  },
  video: {
    height: 500,
    backgroundColor: 'black',
    // width: wp(100),
  },
});

WebSeriesScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default WebSeriesScreen;

