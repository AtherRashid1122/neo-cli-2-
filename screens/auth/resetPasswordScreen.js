import React, { Component } from "react";
import {
    Text,
    SafeAreaView,
    View,
    StatusBar,
    ImageBackground,
    BackHandler,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';

class ResetPasswordScreen extends Component {

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
        registeredEmail: '',
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
                            {this.resetPasswordInfo()}
                            {this.registeredEmailTextField()}
                            {this.resetPasswordButton()}
                        </ScrollView>
                    </LinearGradient>
                </ImageBackground>

            </SafeAreaView >

        )
    }

    resetPasswordButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    this.props.navigation.navigate('BottomTabBar');
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={['rgba(244, 67, 54, 0.3)', 'rgba(244, 67, 54, 0.6)', 'rgba(255, 118, 117, 0.55)',]}
                    style={styles.buttonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor20Medium }}>
                        Reset password
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        )
    }

    registeredEmailTextField() {
        return (
            <View style={styles.textFieldContentStyle}>
                <TextInput
                    placeholder="Enter Registered Email"
                    value={this.state.registeredEmail}
                    onChangeText={(text) => this.setState({ registeredEmail: text })}
                    placeholderTextColor={Colors.whiteColor}
                    style={{ ...Fonts.whiteColor20Medium, flex: 1, }}
                    selectionColor={Colors.blackColor}
                />
            </View>
        )
    }

    resetPasswordInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 5.0, marginTop: Sizes.fixPadding * 7.0 }}>
                <Text style={{ ...Fonts.whiteColor35Medium }}>
                    Lost Password?
                </Text>
                <Text style={{ ...Fonts.whiteColor20Light }}>
                    Don't worry we are here
                </Text>
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
        marginVertical: Sizes.fixPadding + 10.0
    }
})

ResetPasswordScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(ResetPasswordScreen);