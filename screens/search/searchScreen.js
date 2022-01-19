import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, FlatList, Dimensions, TouchableOpacity, Image,SafeAreaView,ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Block, Button, Icon, Input, NavBar } from "galio-framework";
import { argonTheme } from "../../constant";
const { width } = Dimensions.get('screen');
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

const categoryBackColorList = ['#2196F3', '#F44336', '#FF9800', '#4CAF50', '#009688'];
const itemWidth = Math.round(width * 0.8);

const categoryList = [
    {
        id: '1',
        categoryName: 'Action',
    },
    {
        id: '2',
        categoryName: 'Adventure',
    },
    {
        id: '3',
        categoryName: 'Comedy',
    },
    {
        id: '4',
        categoryName: 'Drama',
    },
    {
        id: '5',
        categoryName: 'Horror',
    }
];

const typesOfMoviesAndWebSeriesList = [
    {
        id: '1',
        type: 'Comedy Movie',
    },
    {
        id: '2',
        type: 'Mystery',
    },
    {
        id: '3',
        type: 'Action',
    },
    {
        id: '4',
        type: 'Latest Movie',
    },
    {
        id: '5',
        type: 'Web Series',
    },
    {
        id: '6',
        type: 'New Web Series',
    },
    {
        id: '7',
        type: 'Drama',
    },
    {
        id: '8',
        type: 'Sport',
    },
];

const specialForUserList = [
    {
        id: '1',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_1.jpg')
    },
    {
        id: '2',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_2.jpg')
    },
    {
        id: '3',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_3.jpg')
    },
    {
        id: '4',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_4.jpg')
    },
    {
        id: '5',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_5.jpg')
    },
    {
        id: '6',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_6.jpg')
    },
];




class SearchScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1,backgroundColor:"#1a2236" ,}}>


<SafeAreaView>
<Block row style={{marginTop:20,marginLeft:15}} >

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
            
     {this.renderSearch()}
    
<Block row style={{right:20,position:'absolute'}}>

     <MaterialCommunityIcons  name="bell" size={40} color="white" />
     <Block style={{top:3, position: "absolute", left: 15, backgroundColor:'red',borderRadius:100 ,height:17,width:17}}>
           
              </Block>
     </Block>
   </Block>
   </SafeAreaView>

                <View
                    style={{ paddingBottom: Sizes.fixPadding * 7.0 }}
                >
                    <FlatList
                        ListHeaderComponent={
                            <>
                                {this.searchText()}
                                {this.searchTextField()}
                            </>
                        }
                        ListHeaderComponentStyle={{ marginBottom: Sizes.fixPadding + 10.0 }}
                        data={typesOfMoviesAndWebSeriesList}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={this.renderItem}
                        showsVerticalScrollIndicator={false}
                        numColumns={3}
                        contentContainerStyle={{
                            paddingLeft: Sizes.fixPadding + 5.0,
                        }}
                        ListFooterComponent={
                            <>
                                {this.title({ title: 'Explore by Genre' })}
                                {this.categories()}
                                {this.title({ title: 'Special for You' })}
                                {this.userSpecials()}
                            </>
                        }
                    />
                </View>
            </View>
        )
    }

    renderItem = ({ item }) => (
        <View style={{
            backgroundColor: '#424242',
            borderRadius: Sizes.fixPadding - 3.0,
            paddingVertical: Sizes.fixPadding - 3.0,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: Sizes.fixPadding + 7.0,
            marginRight: Sizes.fixPadding + 2.0,
            marginBottom: Sizes.fixPadding + 2.0,
            maxWidth: width / 3.45
        }}>
            <Text
                numberOfLines={1}
                style={{ ...Fonts.whiteColor15Light }}>{item.type}</Text>
        </View>
    )

    userSpecials() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push('WebSeries')}
            >
                <Image
                    source={item.movieHookImage}
                    style={styles.moviesHookImageStyle}
                    resizeMode="cover"
                />
            </TouchableOpacity>

        )
        return (
            <FlatList
                data={specialForUserList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listItemsContentStyle}
            />
        )
    }

    categories() {
        const renderItem = ({ item, index }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('Category', { category: item.categoryName })}
                style={{
                    backgroundColor: categoryBackColorList[index],
                    ...styles.categoryContentStyle
                }}
            >
                <Text style={{ ...Fonts.whiteColor15Light }}>
                    {item.categoryName}
                </Text>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={categoryList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listItemsContentStyle}
            />
        )
    }

    title({ title }) {
        return (
            <Text style={{
                ...Fonts.whiteColor20Medium,
                marginHorizontal: Sizes.fixPadding + 5.0,
                marginVertical: Sizes.fixPadding + 5.0
            }}>
                {title}
            </Text >
        )
    }

    moviesAndSeriesTypes() {
        const renderItem = ({ item }) => (
            <View style={{
                backgroundColor: '#424242',
                borderRadius: Sizes.fixPadding - 3.0,
                paddingVertical: Sizes.fixPadding - 3.0,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: Sizes.fixPadding + 7.0,
                marginRight: Sizes.fixPadding + 2.0,
                marginBottom: Sizes.fixPadding + 2.0,
                maxWidth: width / 3.45
            }}>
                <Text
                    numberOfLines={1}
                    style={{ ...Fonts.whiteColor15Light }}>{item.type}</Text>
            </View>
        )
        return (
            <FlatList
                data={typesOfMoviesAndWebSeriesList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                contentContainerStyle={{
                    paddingTop: Sizes.fixPadding + 10.0,
                    paddingLeft: Sizes.fixPadding + 5.0,
                }}

            />
        )
    }

    searchTextField() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#424242',
                    borderRadius: Sizes.fixPadding * 2.5,
                    paddingVertical: Sizes.fixPadding,
                    alignItems: 'center',
                    marginRight: Sizes.fixPadding + 5.0,
                    paddingHorizontal: Sizes.fixPadding * 2.0,
                    marginTop: Sizes.fixPadding + 5.0
                }}
            >
                <MaterialIcons name="search" size={24} color={Colors.blackColor}
                    style={{ marginRight: Sizes.fixPadding + 5.0 }}
                />
                <TextInput
                    placeholder="Search for shows,series & movies"
                    placeholderTextColor="black"
                    style={{ flex: 1, ...Fonts.blackColor16Medium }}
                    selectionColor={Colors.blackColor}
                />
            </View>
        )
    }

    
 renderSearch = () => {
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
            color="grey"
            name="search"
            style={{marginLeft:-5}}
          />
        }
      />
    );
  };

    searchText() {
        return (
            <Text style={{
                ...Fonts.whiteColor30Medium,
                marginTop: Sizes.fixPadding + 5.0
            }}>
                What'd you like to watch today?
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    categoryContentStyle: {
        borderRadius: Sizes.fixPadding - 3.0,
        paddingVertical: Sizes.fixPadding - 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Sizes.fixPadding * 2.5,
        marginRight: Sizes.fixPadding + 2.0
    },
    listItemsContentStyle: {
        paddingBottom: Sizes.fixPadding + 5.0
    },
    moviesHookImageStyle: {
        height: 140.0,
        width: 110.0,
        borderRadius: Sizes.fixPadding,
        marginRight: Sizes.fixPadding + 2.0
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
        marginVertical: Sizes.fixPadding+30,
        
      },
      sliderImageStyle: {
        width: itemWidth,
        height: 220,
        alignItems: "center",
        justifyContent: "center",
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
    
});

export default SearchScreen;

