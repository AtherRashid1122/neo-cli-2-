import React, { Component } from "react";
import {
    Text,
    SafeAreaView,
    View,
    StatusBar,
    ImageBackground,
    BackHandler,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';

class CreateAccountScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        this.props.navigation.pop();
        return true;
    };

    state = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
                            {this.backArrow()}
                            {this.createAccountInfo()}
                            {this.userNameTextField()}
                            {this.emailTextField()}
                            {this.passwordTextField()}
                            {this.confirmPasswordTextField()}
                            {this.createAccountButton()}
                            {this.alreadyHaveAccountButton()}
                        </ScrollView>
                    </LinearGradient>
                </ImageBackground>

            </SafeAreaView >

        )
    }

    alreadyHaveAccountButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    this.props.navigation.navigate('ResetPassword');
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={['rgba(244, 67, 54, 0.3)', 'rgba(244, 67, 54, 0.6)', 'rgba(255, 118, 117, 0.55)',]}
                    style={styles.buttonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor20Medium }}>
                        Already have account
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        )
    }

    createAccountButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    this.props.navigation.navigate('ResetPassword');
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={['rgba(244, 67, 54, 0.3)', 'rgba(244, 67, 54, 0.6)', 'rgba(255, 118, 117, 0.55)',]}
                    style={{ ...styles.buttonStyle, marginTop: Sizes.fixPadding + 15.0 }}
                >
                    <Text style={{ ...Fonts.whiteColor20Medium }}>
                        Create Account
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        )
    }

    confirmPasswordTextField() {
        return (
            <View style={styles.textFieldContentStyle}>
                <TextInput
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    onChangeText={(text) => this.setState({ confirmPassword: text })}
                    placeholderTextColor={Colors.whiteColor}
                    style={{ ...Fonts.whiteColor20Medium, flex: 1, }}
                    selectionColor={Colors.blackColor}
                    secureTextEntry={true}
                />
            </View>
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

    userNameTextField() {
        return (
            <View style={styles.textFieldContentStyle}>
                <TextInput
                    placeholder="UserName"
                    value={this.state.userName}
                    onChangeText={(text) => this.setState({ userName: text })}
                    placeholderTextColor={Colors.whiteColor}
                    style={{ ...Fonts.whiteColor20Medium, flex: 1, }}
                    selectionColor={Colors.blackColor}
                />
            </View>
        )
    }

    createAccountInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 5.0, marginTop: Sizes.fixPadding * 7.0 }}>
                <Text style={{ ...Fonts.whiteColor35Medium }}>Don't have account?</Text>
                <Text style={{ ...Fonts.whiteColor20Light }}>Create Account</Text>
            </View>
        )
    }

    backArrow() {
        return (
            <MaterialIcons name="arrow-back" size={24} color={Colors.whiteColor}
                onPress={() => this.props.navigation.goBack()}
                style={{ position: 'absolute', top: StatusBar.currentHeight + 10.0 }}
            />
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
        marginVertical: Sizes.fixPadding + 5.0
    }
})

CreateAccountScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(CreateAccountScreen);