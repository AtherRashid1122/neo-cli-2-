import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, BackHandler, SafeAreaView, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from "../screens/home/homeScreen";
import SearchScreen from "../screens/search/searchScreen";
import WatchLaterScreen from "../screens/watchLater/watchLaterScreen";
import AccountScreen from "../screens/account/accountScreen";
import { Fonts, Colors, Sizes } from "../constant/styles";
import { LinearGradient } from 'expo-linear-gradient';

class BottomTabBarScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        BackHandler.exitApp();
        return true;
    };

    state = { currentIndex: 1 };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: Colors.blackColor }}>
                    <StatusBar translucent={false} backgroundColor={Colors.blackColor}
                    />
                    {this.state.currentIndex == 1 ?
                        <HomeScreen navigation={this.props.navigation} /> :
                        this.state.currentIndex == 2 ?
                            <SearchScreen navigation={this.props.navigation} /> :
                            this.state.currentIndex == 3 ?
                                <WatchLaterScreen navigation={this.props.navigation} /> :
                                <AccountScreen  navigation={this.props.navigation}/>
                    }
                    <LinearGradient
                        style={styles.bottomTabBarStyle}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={[
                            'black',
                            'rgba(0, 0, 0, 0.95)',
                            'rgba(0,0,0,0.89)',
                        ]}
                    >
                        {this.bottomTabBarItem({
                            index: 1,
                            iconName: "home",
                            showText: 'Home',
                        })}
                        {this.bottomTabBarItem({
                            index: 2,
                            iconName: "search",
                            showText: 'Search',
                        })}
                        {this.bottomTabBarItem({
                            index: 3,
                            iconName: "favorite-border",
                            showText: 'Watch Later',
                        })}
                        {this.bottomTabBarItem({
                            index: 4,
                            iconName: "person",
                            showText: 'Account',
                        })}
                    </LinearGradient>
                </View>
            </SafeAreaView>
        )
    }

    bottomTabBarItem({ index, iconName, showText }) {
        return (
            this.state.currentIndex == index ?
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    backgroundColor: 'rgba(244, 67, 54, 0.4)',
                    borderRadius: Sizes.fixPadding * 3.0,
                    paddingVertical: Sizes.fixPadding + 5.0,
                    paddingHorizontal: Sizes.fixPadding * 3.0,
                }}>
                    <MaterialIcons name={iconName} size={24} color={Colors.primaryColor} />
                    <Text style={{ ...Fonts.primaryColor16Medium, marginLeft: Sizes.fixPadding + 5.0 }}>{showText}</Text>
                </View>
                :
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ currentIndex: index })}
                >
                    <MaterialIcons name={iconName} size={24} color={Colors.whiteColor} />
                </TouchableOpacity>
        )
    }
}

BottomTabBarScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default BottomTabBarScreen;

const styles = StyleSheet.create({
    bottomTabBarStyle: {
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
        right: 0.0,
        height: 65.0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding + 5.0,
        borderTopRightRadius: Sizes.fixPadding,
        borderTopLeftRadius: Sizes.fixPadding,
    },
    bottomTabSelectedIconStyle: {
        height: 40.0,
        width: 40.0,
        borderRadius: 20.0,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})



