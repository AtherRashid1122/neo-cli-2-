import React, { Component } from "react";
import { Text, View, SafeAreaView, StatusBar, BackHandler, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from "react-navigation";

class PrivacyPolicyScreen extends Component {

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

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
                <View style={{ flex: 1, backgroundColor: "#1a2236"}}>
                    {this.header()}
                    {this.dummyText()}
                </View>
            </SafeAreaView>
        )
    }

    dummyText() {
        return (
            <Text style={{
                ...Fonts.whiteColor20Medium, textAlign: 'justify',
                marginHorizontal: Sizes.fixPadding + 5.0,
                marginVertical: Sizes.fixPadding * 2.0
            }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        )
    }

    header() {
        return (
            <View style={styles.headerConentStyle}>
                <MaterialIcons name="close" size={24} color={Colors.whiteColor}
                    onPress={() => this.props.navigation.goBack()}
                    style={{ position: 'absolute', left: 10.0 }}
                />
                <Text style={{ ...Fonts.whiteColor20Medium }}>
                    Privacy Policy
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerConentStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blackColor,
        paddingVertical: Sizes.fixPadding + 5.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },
})

PrivacyPolicyScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default PrivacyPolicyScreen;
