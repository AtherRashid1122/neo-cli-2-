import React, { Component } from "react";
import {
    Text,
    SafeAreaView,
    View,
    StatusBar,
    ImageBackground,
    BackHandler,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, Colors, Sizes } from "../../constant/styles";

class LoginScreen extends Component {

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

    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
                <ImageBackground
                    style={{ flex: 1 }}
                    source={require('../../assets/images/bg.jpg')}
                    resizeMode="cover"
                >
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={['black', 'rgba(0,0,0,0.90)', 'rgba(0,0,0,0.40)', 'rgba(0,0,0,0.1)',]}
                        style={{ flex: 1, paddingHorizontal: Sizes.fixPadding * 2.0 }}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingTop: StatusBar.currentHeight + 10.0
                            }}
                        >
                            {this.welcomeInfo()}
                            {this.emailTextField()}
                            {this.passwordTextField()}
                            {this.loginButton()}
                            {this.forgotText()}
                            {this.dontHaveAnAccountButton()}
                        </ScrollView>
                    </LinearGradient>
                </ImageBackground>

            </SafeAreaView >
        )
    }

    forgotText() {
        return (
            <Text style={{
                ...Fonts.whiteColor20Medium,
                textAlign: 'center',
                marginVertical: Sizes.fixPadding
            }}>
                Forgot your password?
            </Text>
        )
    }

    dontHaveAnAccountButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    this.props.navigation.navigate('CreateAccount');
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={['rgba(244, 67, 54, 0.3)', 'rgba(244, 67, 54, 0.6)', 'rgba(255, 118, 117, 0.55)',]}
                    style={styles.buttonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor20Medium }}>
                        Don't have account?
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        )
    }

    loginButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    this.props.navigation.navigate('CreateAccount');
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={['rgba(244, 67, 54, 0.4)', 'rgba(244, 67, 54, 0.6)', 'rgba(255, 118, 117, 0.55)',]}
                    style={styles.buttonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor20Medium }}>
                        Login
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        )
    }

    passwordTextField() {
        return (
            <View style={styles.textFieldContentStyle}>
                <TextInput
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })}
                    placeholderTextColor={Colors.whiteColor}
                    style={{ ...Fonts.whiteColor20Medium, flex: 1, }}
                    selectionColor={Colors.blackColor}
                    secureTextEntry={true}
                />
            </View>
        )
    }

    emailTextField() {
        return (
            <View style={styles.textFieldContentStyle}>
                <TextInput
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(text) => this.setState({ email: text })}
                    placeholderTextColor={Colors.whiteColor}
                    style={{ ...Fonts.whiteColor20Medium, flex: 1, }}
                    selectionColor={Colors.blackColor}
                />
            </View>
        )
    }

    welcomeInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 5.0, marginTop: Sizes.fixPadding * 4.0 }}>
                <Text style={{ ...Fonts.whiteColor35Medium }}>Welcome back</Text>
                <Text style={{ ...Fonts.whiteColor20Light }}>Login in your account</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textFieldContentStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: Sizes.fixPadding + 10.0,
        paddingVertical: Sizes.fixPadding + 2.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding
    },
    buttonStyle: {
        alignItems: 'center',
        borderRadius: Sizes.fixPadding + 15.0,
        paddingVertical: Sizes.fixPadding + 2.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding + 10.0
    }
})

LoginScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(LoginScreen);