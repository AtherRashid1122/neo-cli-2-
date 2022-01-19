import React, { Component } from "react";
import { Text, SafeAreaView, StatusBar, StyleSheet, ImageBackground, } from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Sizes, Fonts } from "../constant/styles";

class SplashScreen extends Component {

    render() {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 5000);

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
                <ImageBackground
                    style={{ flex: 1 }}
                    source={require('../assets/splash.png')}
                    resizeMode="cover"
                >
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={['black', 'rgba(0,0,0,0.90)', 'rgba(0,0,0,0.40)', 'rgba(0,0,0,0.1)',]}
                        style={styles.pageStyle}
                    >
                    </LinearGradient>
                </ImageBackground>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    pageStyle: {
        flex: 1,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

SplashScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default SplashScreen;