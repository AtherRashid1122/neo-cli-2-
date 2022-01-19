// import React, { Component, useRef ,useState} from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   Dimensions,
//   ImageBackground,
//   Image,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
//   Keyboard,
//   SafeAreaView,
//   StatusBar
// } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';

// import { withNavigation } from "react-navigation";
// import { Fonts, Colors, Sizes } from "../../constant/styles";
// import { MaterialIcons } from "@expo/vector-icons";
// import Carousel from "react-native-snap-carousel";
// import { Block, Button, Icon, Input, NavBar } from "galio-framework";
// import RBSheet from "react-native-raw-bottom-sheet";
// import * as ImagePicker from "expo-image-picker";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import BottomSheetComp from "../../component/bottomSheetComp";
// import BottomTabBarScreen from "../../component/bottomTabBarScreen";
// import { DrawerActions } from "@react-navigation/native";
// const { height, width } = Dimensions.get("window");

// import mime from 'mime';
// // import * as VideoThumbnails from 'expo-video-thumbnails';
// import Header from "../../component/Header";
// import { argonTheme } from "../../constant";
// import { BottomNavigation } from "react-native-paper";
// const SliderList = [
//   {
//     image: require("../../assets/images/slider/1.png"),
//   },
//   {
//     image: require("../../assets/images/slider/2.png"),
//   },
//   {
//     image: require("../../assets/images/slider/3.png"),
//   },
//   {
//     image: require("../../assets/images/slider/4.png"),
//   },
// ];

// const categoryBackColorList = [
//   "#2196F3",
//   "#F44336",
//   "#FF9800",
//   "#4CAF50",
//   "#009688",
// ];

// const categoryList = [
//   {
//     id: "1",
//     categoryName: "Action",
//   },
//   {
//     id: "2",
//     categoryName: "Adventure",
//   },
//   {
//     id: "3",
//     categoryName: "Comedy",
//   },
//   {
//     id: "4",
//     categoryName: "Drama",
//   },
//   {
//     id: "5",
//     categoryName: "Horror",
//   },
// ];

// const specialAndLatestMovieList = [
//   {
//     id: "1",
//     movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_1.jpg"),
//   },
//   {
//     id: "2",
//     movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_2.jpg"),
//   },
//   {
//     id: "3",
//     movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_3.jpg"),
//   },
//   {
//     id: "4",
//     movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_4.jpg"),
//   },
//   {
//     id: "5",
//     movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_5.jpg"),
//   },
//   {
//     id: "6",
//     movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_6.jpg"),
//   },
// ];

// const multiplexMovieList = [
//   {
//     id: "1",
//     movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_1.jpg"),
//   },
//   {
//     id: "2",
//     movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_2.jpg"),
//   },
//   {
//     id: "3",
//     movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_3.jpg"),
//   },
//   {
//     id: "4",
//     movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_4.jpg"),
//   },
//   {
//     id: "5",
//     movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_5.jpg"),
//   },
//   {
//     id: "6",
//     movieHookImage: require("../../assets/images/multiplex_movies/multiplex_movies_6.jpg"),
//   },
// ];

// const popularMovieList = [
//   {
//     id: "1",
//     movieHookImage: require("../../assets/images/popular_movies/popular_movies_1.jpg"),
//   },
//   {
//     id: "2",
//     movieHookImage: require("../../assets/images/popular_movies/popular_movies_2.jpg"),
//   },
//   {
//     id: "3",
//     movieHookImage: require("../../assets/images/popular_movies/popular_movies_3.jpg"),
//   },
//   {
//     id: "4",
//     movieHookImage: require("../../assets/images/popular_movies/popular_movies_4.jpg"),
//   },
//   {
//     id: "5",
//     movieHookImage: require("../../assets/images/popular_movies/popular_movies_5.jpg"),
//   },
//   {
//     id: "6",
//     movieHookImage: require("../../assets/images/popular_movies/popular_movies_6.jpg"),
//   },
// ];

// const bestOfKidsList = [
//   {
//     id: "1",
//     movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_1.jpg"),
//   },
//   {
//     id: "2",
//     movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_2.jpg"),
//   },
//   {
//     id: "3",
//     movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_3.jpg"),
//   },
//   {
//     id: "4",
//     movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_4.jpg"),
//   },
//   {
//     id: "5",
//     movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_5.jpg"),
//   },
//   {
//     id: "6",
//     movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_6.jpg"),
//   },
// ];

// // const width = Dimensions.get("window").width;

// const itemWidth = Math.round(width * 0.8);
// // const state = { currentIndex: 1 };


// // const bottomTabBarItem=({ index, iconName, showText })=> {



// //     return (
        
// //             <View style={{
// //                 flexDirection: 'row', alignItems: 'center',
// //                 backgroundColor: 'rgba(244, 67, 54, 0.4)',
// //                 borderRadius: Sizes.fixPadding * 3.0,
// //                 paddingVertical: Sizes.fixPadding + 5.0,
// //                 paddingHorizontal: Sizes.fixPadding * 3.0,
// //             }}>
// //                 <MaterialIcons name={iconName} size={24} color={Colors.primaryColor} />
// //                 <Text style={{ ...Fonts.primaryColor16Medium, marginLeft: Sizes.fixPadding + 5.0 }}>{showText}</Text>
// //             </View>
           
// //     )
// // }


// function HomeScreen({ navigation }) {
//   const carousel = useRef();

//   const bestOfKids = () => {
//     const renderItem = ({ item }) => (
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={() => navigation.push("WebSeries")}
//       >
//         <Image
//           source={item.movieHookImage}
//           style={styles.allMoviesHookImageStyle}
//           resizeMode="cover"
//         />
//       </TouchableOpacity>
//     );
//     return (
//       <FlatList
//         data={bestOfKidsList}
//         keyExtractor={(item) => `${item.id}`}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.listItemsContentStyle}
//       />
//     );
//   };

//   const popularMovies = () => {
//     const renderItem = ({ item }) => (
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={() => navigation.push("WebSeries")}
//       >
//         <Image
//           source={item.movieHookImage}
//           style={styles.allMoviesHookImageStyle}
//           resizeMode="cover"
//         />
//       </TouchableOpacity>
//     );
//     return (
//       <FlatList
//         data={popularMovieList}
//         keyExtractor={(item) => `${item.id}`}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.listItemsContentStyle}
//       />
//     );
//   };

//   const muliplexMovies = () => {
//     const renderItem = ({ item }) => (
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={() => navigation.push("WebSeries")}
//       >
//         <Image
//           source={item.movieHookImage}
//           style={styles.allMoviesHookImageStyle}
//           resizeMode="cover"
//         />
//       </TouchableOpacity>
//     );
//     return (
//       <FlatList
//         data={multiplexMovieList}
//         keyExtractor={(item) => `${item.id}`}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.listItemsContentStyle}
//       />
//     );
//   };

//   const specialAndLatestMovies = () => {
//     const renderItem = ({ item }) => (
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={() => navigation.push("WebSeries")}
//       >
//         <Image
//           source={item.movieHookImage}
//           style={styles.allMoviesHookImageStyle}
//           resizeMode="cover"
//         />
//       </TouchableOpacity>
//     );
//     return (
//       <FlatList
//         data={specialAndLatestMovieList}
//         keyExtractor={(item) => `${item.id}`}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.listItemsContentStyle}
//       />
//     );
//   };

//   const titleWithMore = ({ title }) => {
//     return (
//       <View style={styles.titleWithMoreTextContentStyle}>
//         <Text style={{ ...Fonts.whiteColor20Medium }}>{title}</Text>
//         <TouchableOpacity
//           activeOpacity={0.9}
//           onPress={() => navigation.navigate("MoreMovies")}
//         >
//           <Text style={{ ...Fonts.primaryColor16Light }}>MORE</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const categories = () => {
//     const renderItem = ({ item, index }) => (
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={() =>
//           navigation.navigate("Category", { category: item.categoryName })
//         }
//         style={{
//           backgroundColor: categoryBackColorList[index],
//           ...styles.categoryContentStyle,
//         }}
//       >
//         <Text style={{ ...Fonts.whiteColor15Light }}>{item.categoryName}</Text>
//       </TouchableOpacity>
//     );
//     return (
//       <FlatList
//         data={categoryList}
//         keyExtractor={(item) => `${item.id}`}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.listItemsContentStyle}
//       />
//     );
//   };

//   const title = ({ title }) => {
//     return (
//       <Text
//         style={{
//           ...Fonts.whiteColor20Medium,
//           marginHorizontal: Sizes.fixPadding + 5.0,
//           marginVertical: Sizes.fixPadding + 5.0,
//         }}
//       >
//         {title}
//       </Text>
//     );
//   };

//   const sliderForMoviesAndWebSeries = () => {
//     const renderItem = ({ item }) => (
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={() => navigation.push("WebSeries")}
//       >
//         <ImageBackground
//           source={item.image}
//           style={styles.sliderImageStyle}
//           resizeMode="cover"
//           borderRadius={Sizes.fixPadding - 5.0}
//         ></ImageBackground>
//       </TouchableOpacity>
//     );
//     return (
//       <Carousel
//         ref={carousel}
//         data={SliderList}
//         sliderWidth={width}
//         itemWidth={itemWidth}
//         renderItem={renderItem}
//         autoplay={true}
//         loop={true}
//         containerCustomStyle={{ marginTop: Sizes.fixPadding }}
//         lockScrollWhileSnapping={true}
//         autoplayInterval={4000}
//       />
//     );
//   };

//   const refRBSheet = useRef();

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Videos,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     // console.log(result);
//     if (!result.cancelled) {
//       generateThumbnail(result)
//     //   prof_image(result.uri);
//     // console.log(result)
//     }
//   };
//   // const generateThumbnail = async (result) => {
//   //   try {
//   //     const { uri } = await VideoThumbnails.getThumbnailAsync(
//   //       result.uri,
//   //       {
//   //         time: 15000,
//   //       }
//   //     );
//   //     refRBSheet.current.close()
//   //     navigation.navigate("PostVideoDesc",{url:uri,time:result.duration})

//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // };

//   const bottomSheet=()=>{
//     return(
//       <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#000"
//       }}
//     >
//       <RBSheet
//         ref={refRBSheet}
//         closeOnDragDown={true}
//         closeOnPressMask={true}
//         customStyles={{
//           wrapper: {
//             backgroundColor: "transparent"
//           },
//           draggableIcon: {
//             backgroundColor: "#8898AA"
//           },
//           container:{backgroundColor: "#1a2236",}
//         }}
//       >
     
//           <Block style={styles.main}>
    
//     <TouchableOpacity  onPress={()=>pickImage()} >
//         <Block row center style={styles.close}>
//         <MaterialCommunityIcons
//                 style={{ marginRight: 10 }}
//                 name="progress-upload"
//                 size={35}
//                 color={"white"}
//               />
//           <Text size={20} color="white" style={{ marginLeft: 15,fontSize:20,color:"white", }}>
//             Upload a video
//           </Text>
//         </Block>
//     </TouchableOpacity>
//     <TouchableOpacity>
//         <Block row center style={styles.close}>
//         <MaterialCommunityIcons
//                 style={{ marginRight: 10 }}
//                 name="progress-upload"
//                 size={35}
//                 color={"white"}
//               />
    
//           <Text  color="white" style={{ marginLeft: 15,color:"white",fontSize:20 }}>
//             Create Story
//           </Text>
//         </Block>
//         </TouchableOpacity>
//       </Block>
//       </RBSheet>
//     </View>
//     )
//     }
    
   
    

//   const renderLeft = () => {
//     return (
//       <Block middle >
//         <TouchableOpacity
//           style={{ flexDirection: "row", alignItems: "center" }}
//           onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
//         >
//           <Icon
//             name={ "menu"}
//             family="entypo"
//             size={ 25}
//             color={
//              argonTheme.COLORS.WHITE
//             }
//           />
//           <Text
//             style={{ fontFamily: "open-sans-bold",fontSize:16,fontWeight: 'bold',color:"white" }}
//           >
//            Home
//           </Text>
//         </TouchableOpacity>
//       </Block>
//     );
//   };
//   const right = () => {
//     return (
  
//         <Block width={120}  row  space={"between"} >
//            <TouchableOpacity
//             onPress={() => refRBSheet.current.open()}
//           >
//             <Image
//               style={{ width: 25, height: 25 ,backgroundColor:"white",borderRadius:20}}
//               source={{
//                 uri: "https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-1024.png",
//               }}
//             />
//           </TouchableOpacity>
//           <MaterialIcons
//             name="notifications"
//             size={24}
//             color={Colors.whiteColor}
//             onPress={() => navigation.navigate("Notification")}
//           />
//          <TouchableOpacity
//         onPress={() =>
//           navigation.navigate("MY PROFILE")
//         }>
//         <Image
//           style={{
//             width: 25,
//             height: 25,
//             borderRadius: 20,
//             // marginRight: 50,
//             backgroundColor: "white",
//           }}
//           source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU" }}
//         />
//       </TouchableOpacity>
         
        
//         </Block>
//     );
//   };
//  const renderSearch = () => {
//     return (
//       <Input
        
//         color="black"
//         style={styles.search}
//         placeholder="Search"
//         placeholderTextColor={"#8898AA"}
        
//         onFocus={() => {
//           Keyboard.dismiss();
//           navigation.navigate("SearchScreen", {
//             // from: tabs && tabs.slice(-1)[0].name,
//           });
//         }}
//         iconContent={
//           <MaterialIcons
//             size={24}
//             color="white"
//             name="search"
//             style={{marginLeft:-5}}
//           />
//         }
//       />
//     );
//   };
// const header=()=>{
//   return(
// //     <Block  >
// //  {/* <NavBar
// //         back={false}
// //         style={styles.navbar}
// //         right={right()}
// //         left={renderLeft()}
// //         leftStyle={{ flex: 1, alignItems: "flex-start", }}
// //         rightStyle={{ flex: 0.5, alignItems: "space-between" }}
       
// //       /> */}


// //       {renderSearch()}
// //     </Block>


// <SafeAreaView>
// <Block row style={{marginTop:20,marginLeft:15}} >

// <TouchableOpacity  onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
// <ImageBackground

//               source={{
//                 uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
//               }}
//               style={{ width: 50, height: 50 }}
//               resizeMode="cover"
//               imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
//             >
//               <Block style={{ position: "absolute", left: 35, top: 25 }}>
//                 <MaterialIcons
//                   name="check-circle"
//                   size={20}
//                   color={argonTheme.COLORS.WHITE}
//                 // onPress={() => navigation.navigate("SearchScreen")}
//                 />
//               </Block>
//             </ImageBackground>
//             </TouchableOpacity>
//      {renderSearch()}

// <Block row style={{right:20,position:'absolute'}}>

//      <MaterialCommunityIcons  name="bell" size={40} color="white" />
//      <Block style={{top:3, position: "absolute", left: 15, backgroundColor:'red',borderRadius:100 ,height:17,width:17}}>
           
//               </Block>
//      </Block>
//    </Block>
//    </SafeAreaView>
//   )
// }

//   return (
//     <View style={{ flex: 1,backgroundColor:"#1a2236" }}>
//        {header()}
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 8.0 }}
//       >
       
//         {sliderForMoviesAndWebSeries()}
//         {title({ title: "Explore by Genre" })}
//         {categories()}
//         {titleWithMore({ title: "Specials & Latest Movies" })}
//         {specialAndLatestMovies()}
//         {titleWithMore({ title: "Multiplex Movies" })}
//         {muliplexMovies()}
//         {titleWithMore({ title: "Popular Movies" })}
//         {popularMovies()}
//         {titleWithMore({ title: "Best of Kids" })}
//         {bestOfKids()}
//         {bottomSheet()}

    

//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   navbar: {
//     backgroundColor: "transparent",
//     height: Platform.OS == "ios" ? height * 0.1 : height * 0.11,
//     paddingTop: Platform.OS == "ios" ? height * 0.05 : height * 0.07,
//     borderBottomColor: "rgb(243,242,239)",
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 0.3,
//     shadowRadius: 1,
//     zIndex: 5,
//   },
//   headerStyle: {
//     flexDirection: "row",
//     backgroundColor: "red",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginHorizontal: Sizes.fixPadding + 5.0,
//     marginVertical: Sizes.fixPadding+30,
//   },
//   sliderImageStyle: {
//     width: itemWidth,
//     height: 220,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   listItemsContentStyle: {
//     paddingLeft: Sizes.fixPadding + 5.0,
//     paddingBottom: Sizes.fixPadding + 5.0,
//   },
//   categoryContentStyle: {
//     borderRadius: Sizes.fixPadding - 3.0,
//     paddingVertical: Sizes.fixPadding - 1.0,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: Sizes.fixPadding * 2.5,
//     marginRight: Sizes.fixPadding + 2.0,
//   },
//   titleWithMoreTextContentStyle: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginHorizontal: Sizes.fixPadding + 5.0,
//     marginVertical: Sizes.fixPadding + 5.0,
//     alignItems: "center",
//   },
//   allMoviesHookImageStyle: {
//     height: 140.0,
//     width: 110.0,
//     borderRadius: Sizes.fixPadding,
//     marginRight: Sizes.fixPadding + 2.0,
//   },
//   search: {
//     height: 42,
//     // width: width - 80,
//     width:'105%',
//     // marginHorizontal: 16,
//     // borderWidth: 1,
//     backgroundColor: "#293145",
// marginTop:-5,
//     // borderRadius: 3,
//     borderColor: '#293145',
//     marginLeft:15,
//     // backgroundColor:'red'
//   },
//   main: { flex: 1, backgroundColor: "#1a2236" },
//   close: { width: "90%", height: 60, marginTop: 20 },
// });

// export default withNavigation(HomeScreen);


















import React, { Component, useRef ,useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  StatusBar
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { withNavigation } from "react-navigation";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { Block, Button, Icon, Input, NavBar } from "galio-framework";
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomSheetComp from "../../component/bottomSheetComp";
import BottomTabBarScreen from "../../component/bottomTabBarScreen";
import { DrawerActions } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import { Octicons } from '@expo/vector-icons';

import mime from 'mime';
// import * as VideoThumbnails from 'expo-video-thumbnails';
import Header from "../../component/Header";
import { argonTheme } from "../../constant";
import { BottomNavigation } from "react-native-paper";
const SliderList = [
  {
    image: require("../../assets/images/slider/1.png"),
  },
  {
    image: require("../../assets/images/slider/2.png"),
  },
  {
    image: require("../../assets/images/slider/3.png"),
  },
  {
    image: require("../../assets/images/slider/4.png"),
  },
];

const categoryBackColorList = [
  "#2196F3",
  "#F44336",
  "#FF9800",
  "#4CAF50",
  "#009688",
];

const categoryList = [
  {
    id: "1",
    categoryName: "Action",
  },
  {
    id: "2",
    categoryName: "Adventure",
  },
  {
    id: "3",
    categoryName: "Comedy",
  },
  {
    id: "4",
    categoryName: "Drama",
  },
  {
    id: "5",
    categoryName: "Horror",
  },
];

const specialAndLatestMovieList = [
  {
    id: "1",
    movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_1.jpg"),
  },
  {
    id: "2",
    movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_2.jpg"),
  },
  {
    id: "3",
    movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_3.jpg"),
  },
  {
    id: "4",
    movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_4.jpg"),
  },
  {
    id: "5",
    movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_5.jpg"),
  },
  {
    id: "6",
    movieHookImage: require("../../assets/images/special_latest_movies/special_latest_movies_6.jpg"),
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

const popularMovieList = [
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

const bestOfKidsList = [
  {
    id: "1",
    movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_1.jpg"),
  },
  {
    id: "2",
    movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_2.jpg"),
  },
  {
    id: "3",
    movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_3.jpg"),
  },
  {
    id: "4",
    movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_4.jpg"),
  },
  {
    id: "5",
    movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_5.jpg"),
  },
  {
    id: "6",
    movieHookImage: require("../../assets/images/best_of_kids/best_of_kids_6.jpg"),
  },
];

// const width = Dimensions.get("window").width;

const itemWidth = Math.round(width * 0.8);
// const state = { currentIndex: 1 };


// const bottomTabBarItem=({ index, iconName, showText })=> {



//     return (
        
//             <View style={{
//                 flexDirection: 'row', alignItems: 'center',
//                 backgroundColor: 'rgba(244, 67, 54, 0.4)',
//                 borderRadius: Sizes.fixPadding * 3.0,
//                 paddingVertical: Sizes.fixPadding + 5.0,
//                 paddingHorizontal: Sizes.fixPadding * 3.0,
//             }}>
//                 <MaterialIcons name={iconName} size={24} color={Colors.primaryColor} />
//                 <Text style={{ ...Fonts.primaryColor16Medium, marginLeft: Sizes.fixPadding + 5.0 }}>{showText}</Text>
//             </View>
           
//     )
// }


function HomeScreen({ navigation }) {
  const carousel = useRef();

  const bestOfKids = () => {
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
        data={bestOfKidsList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  };

  const popularMovies = () => {
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
        data={popularMovieList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
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

  const specialAndLatestMovies = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("WebSeries")}
      >
        <ImageBackground
          source={item.movieHookImage}
          style={styles.allMoviesHookImageStyle}
          resizeMode="cover"
        >
        <ImageBackground style={{height:60,width:60,borderRadius:100,position:'absolute',bottom:20,justifyContent:'center',alignItems:'center',alignContent:'center',alignItems:'center',alignSelf:'center'}}>
        <AntDesign name="pluscircle" color={'white'} size={60} />

        </ImageBackground>
        </ImageBackground>
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={specialAndLatestMovieList}
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
        {/* <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("MoreMovies")}
        >
          <Text style={{ ...Fonts.primaryColor16Light }}>MORE</Text>
        </TouchableOpacity> */}


<TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" ,}}
          onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon
            name={ "menu"}
            family="entypo"
            size={ 25}
            color={
             argonTheme.COLORS.WHITE
            }
          />
      <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color={Colors.whiteColor}
                />
        </TouchableOpacity>



      </View>
    );
  };




  const titleWithvideo= ({ title }) => {
    return (
      <View style={styles.titleWithMoreTextContentStyle1}>

        <Text style={{ ...Fonts.whiteColor20Medium }}>{title}</Text>



<SafeAreaView>
  <ImageBackground style={{height:280}}
  
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
  }}
  >
<Block row  style={{backgroundColor:'grey'}}>

<TouchableOpacity >
<ImageBackground

              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
              }}
              style={{ width: 50, height: 50,marginLeft:8,marginTop:5,marginBottom:2 }}
              resizeMode="cover"
              imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
            >
              <Block style={{ position: "absolute", left: 35, top: 25 }}>
                <MaterialIcons
                  name="check-circle"
                  size={20}
                  color={argonTheme.COLORS.WHITE}
                // onPress={() => navigation.navigate("SearchScreen")}
                />
              </Block>
            </ImageBackground>
            </TouchableOpacity>
    
<Block style={{justifyContent:'center',marginLeft:10}}>
<Block row >

     <Text style={{color:'white'}}>
       Saad Irfan
     </Text>
    
     </Block>
     <Block row >

<Text style={{color:'white'}}>
  6 hours ago 
</Text>

<Block style={{height:5,width:5,borderRadius:100,backgroundColor:'white',marginTop:8,marginLeft:5}}>

</Block>
<Octicons name="globe" size={20} color="white" style={{ marginLeft: 10, }} />


<Block style={{height:5,width:5,borderRadius:100,backgroundColor:'white',marginTop:8,marginLeft:8}}>

</Block>
<Text style={{color:'white',marginLeft:5}}>
  289M Views
</Text>
</Block>

</Block>

   </Block>

<Block style={{height:60,backgroundColor:'#293145',width:'100%',position:'absolute',bottom:0,justifyContent:'center'}}>
<Text style={{width:'85%',marginLeft:10,color:'white'}}>

  Covid-19 Had Postponed Manchester United VS Brentford 
</Text>

</Block>
   </ImageBackground>
   </SafeAreaView>


      </View>
    );
  };


  const titleWithvideo1= () => {
    return (
      <View style={styles.titleWithMoreTextContentStyle1}>

        {/* <Text style={{ ...Fonts.whiteColor20Medium }}>{title}</Text> */}



<SafeAreaView>
  <ImageBackground style={{height:280}}
  
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
  }}
  >
<Block row style={{backgroundColor:'transparent',width:'100%'}} >

<TouchableOpacity  >
<ImageBackground

              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
              }}
              style={{ width: 50, height: 50,marginLeft:8,marginTop:5,marginBottom:2 }}
              resizeMode="cover"
              imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
            >
              <Block style={{ position: "absolute", left: 35, top: 25 }}>
                <MaterialIcons
                  name="check-circle"
                  size={20}
                  color={argonTheme.COLORS.WHITE}
                // onPress={() => navigation.navigate("SearchScreen")}
                />
              </Block>
            </ImageBackground>
            </TouchableOpacity>
    
<Block style={{justifyContent:'center',marginLeft:10}}>
<Block row >

     <Text style={{color:'white'}}>
       Saad Irfan
     </Text>
    
     </Block>
     <Block row >

<Text style={{color:'white'}}>
  6 hours ago 
</Text>

<Block style={{height:5,width:5,borderRadius:100,backgroundColor:'white',marginTop:8,marginLeft:5}}>

</Block>
<Octicons name="globe" size={20} color="white" style={{ marginLeft: 10, }} />


<Block style={{height:5,width:5,borderRadius:100,backgroundColor:'white',marginTop:8,marginLeft:8}}>

</Block>
<Text style={{color:'white',marginLeft:5}}>
  289M Views
</Text>
</Block>

</Block>

   </Block>

<Block style={{height:60,backgroundColor:'#293145',width:'100%',position:'absolute',bottom:0,justifyContent:'center'}}>
<Text style={{width:'85%',marginLeft:10,color:'white',}}>

  Covid-19 Had Postponed Manchester United VS Brentford 
</Text>

</Block>
   </ImageBackground>
   </SafeAreaView>


      </View>
    );
  };
  const categories = () => {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("Category", { category: item.categoryName })
        }
        style={{
          backgroundColor: categoryBackColorList[index],
          ...styles.categoryContentStyle,
        }}
      >
        <Text style={{ ...Fonts.whiteColor15Light }}>{item.categoryName}</Text>
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={categoryList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  };

  const title = ({ title }) => {
    return (
      <Text
        style={{
          ...Fonts.whiteColor20Medium,
          marginHorizontal: Sizes.fixPadding + 5.0,
          marginVertical: Sizes.fixPadding + 5.0,
        }}
      >
        {title}
      </Text>
    );
  };

  const sliderForMoviesAndWebSeries = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("WebSeries")}
      >
        <ImageBackground
          source={item.image}
          style={styles.sliderImageStyle}
          resizeMode="cover"
          borderRadius={Sizes.fixPadding - 5.0}
        ></ImageBackground>
      </TouchableOpacity>
    );
    return (
      <Carousel
        ref={carousel}
        data={SliderList}
        sliderWidth={width}
        itemWidth={itemWidth}
        renderItem={renderItem}
        autoplay={true}
        loop={true}
        containerCustomStyle={{ marginTop: Sizes.fixPadding }}
        lockScrollWhileSnapping={true}
        autoplayInterval={4000}
      />
    );
  };

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
  // const generateThumbnail = async (result) => {
  //   try {
  //     const { uri } = await VideoThumbnails.getThumbnailAsync(
  //       result.uri,
  //       {
  //         time: 15000,
  //       }
  //     );
  //     refRBSheet.current.close()
  //     navigation.navigate("PostVideoDesc",{url:uri,time:result.duration})

  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const bottomSheet=()=>{
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
    
   
    

  const renderLeft = () => {
    return (
      <Block middle >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon
            name={ "menu"}
            family="entypo"
            size={ 25}
            color={
             argonTheme.COLORS.WHITE
            }
          />
          <Text
            style={{ fontFamily: "open-sans-bold",fontSize:16,fontWeight: 'bold',color:"white" }}
          >
           Home
          </Text>
        </TouchableOpacity>
      </Block>
    );
  };
  const right = () => {
    return (
  
        <Block width={120}  row  space={"between"} >
           <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
          >
            <Image
              style={{ width: 25, height: 25 ,backgroundColor:"white",borderRadius:20}}
              source={{
                uri: "https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-1024.png",
              }}
            />
          </TouchableOpacity>
          <MaterialIcons
            name="notifications"
            size={24}
            color={Colors.whiteColor}
            onPress={() => navigation.navigate("Notification")}
          />
         <TouchableOpacity
        onPress={() =>
          navigation.navigate("MY PROFILE")
        }>
        <Image
          style={{
            width: 25,
            height: 25,
            borderRadius: 20,
            // marginRight: 50,
            backgroundColor: "white",
          }}
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU" }}
        />
      </TouchableOpacity>
         
        
        </Block>
    );
  };
 const renderSearch = () => {
    return (
      <Input
        
        color="black"
        style={styles.search}
        placeholder="Search"
        placeholderTextColor={"#8898AA"}
        
        onFocus={() => {
          Keyboard.dismiss();
          navigation.navigate("SearchScreen", {
            // from: tabs && tabs.slice(-1)[0].name,
          });
        }}
        iconContent={
          <MaterialIcons
            size={24}
            color="white"
            name="search"
            style={{marginLeft:-5}}
          />
        }
      />
    );
  };
const header=()=>{
  return(
//     <Block  >
//  {/* <NavBar
//         back={false}
//         style={styles.navbar}
//         right={right()}
//         left={renderLeft()}
//         leftStyle={{ flex: 1, alignItems: "flex-start", }}
//         rightStyle={{ flex: 0.5, alignItems: "space-between" }}
       
//       /> */}


//       {renderSearch()}
//     </Block>


<SafeAreaView>
<Block row style={{marginTop:20,marginLeft:15}} >

<TouchableOpacity  onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
<ImageBackground

              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjem69jPMsir-8hEpL_lq3eeTK6DwhiwnBeA&usqp=CAU",
              }}
              style={{ width: 50, height: 50 }}
              resizeMode="cover"
              imageStyle={{ backgroundColor: "green", borderRadius: 100 }}
            >
              <Block style={{ position: "absolute", left: 35, top: 25 }}>
                <MaterialIcons
                  name="check-circle"
                  size={20}
                  color={argonTheme.COLORS.WHITE}
                // onPress={() => navigation.navigate("SearchScreen")}
                />
              </Block>
            </ImageBackground>
            </TouchableOpacity>
     {renderSearch()}

<Block row style={{right:20,position:'absolute'}}>

     <MaterialCommunityIcons  name="bell" size={40} color="white" />
     <Block style={{top:3, position: "absolute", left: 15, backgroundColor:'red',borderRadius:100 ,height:17,width:17}}>
           
              </Block>
     </Block>
   </Block>
   </SafeAreaView>
  )
}

  return (
    <View style={{ flex: 1,backgroundColor:"#1a2236" }}>
       {header()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 8.0 }}
      >
       
        {/* {sliderForMoviesAndWebSeries()}
        {title({ title: "Explore by Genre" })} */}
        {/* {categories()} */}
        {titleWithMore({ title: "Discover" })}
        {specialAndLatestMovies()}
        {titleWithvideo({ title: "Videos" })}
        {titleWithvideo1()}
        {titleWithvideo1()}

        {titleWithvideo1()}


        
        {/* {muliplexMovies()} */}
    
        {bottomSheet()}

    

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginVertical: Sizes.fixPadding+30,
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


  titleWithMoreTextContentStyle1: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // marginHorizontal: Sizes.fixPadding + 5.0,
    // marginVertical: Sizes.fixPadding + 5.0,
    // alignItems: "center",
    marginTop:5,
  },
  allMoviesHookImageStyle: {
    height: 140.0,
    width: 110.0,
    borderRadius: Sizes.fixPadding,
    marginRight: Sizes.fixPadding + 2.0,
  },
  search: {
    height: 42,
    // width: width - 80,
    width:'105%',
    // marginHorizontal: 16,
    // borderWidth: 1,
    backgroundColor: "#293145",
marginTop:-5,
    // borderRadius: 3,
    borderColor: '#293145',
    marginLeft:15,
    // backgroundColor:'red'
  },
  main: { flex: 1, backgroundColor: "#1a2236" },
  close: { width: "90%", height: 60, marginTop: 20 },
});

export default withNavigation(HomeScreen);
