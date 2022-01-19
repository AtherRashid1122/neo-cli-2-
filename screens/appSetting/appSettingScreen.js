import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    BackHandler,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { Switch } from 'react-native-switch';
import Dialog from "react-native-dialog";

const { width } = Dimensions.get('screen');

class AppSettingScreen extends Component {

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
        switchOff: false,
        videoDownloadInHigh: false,
        nothingToDeleteDialog: false,
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1a2236" }}>
                <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
                <View style={{  backgroundColor: "#1a2236" ,flex: 1 }}>
                    {this.header()}
                    <ScrollView>
                        {this.cellularDataInfo()}
                        {this.divider()}
                        {this.videoQualityForDownloadsInfo()}
                        {this.deleteAllDownloadsInfo()}
                    </ScrollView>
                </View>
                {this.nothingToDeleteInfo()}
            </SafeAreaView>
        )
    }

    nothingToDeleteInfo() {
        return (
            <Dialog.Container visible={this.state.nothingToDeleteDialog}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{ backgroundColor: 'white', alignItems: 'center', }}>
                    <Text style={{ ...Fonts.redColor20Medium, paddingBottom: Sizes.fixPadding - 5.0, }}>
                        Nothing to Delete
                    </Text>
                    <MaterialCommunityIcons name="timer-sand-empty" size={60}
                        color={Colors.primaryColor}
                        style={{ marginVertical: Sizes.fixPadding * 2.0 }}
                    />
                    <Text style={{
                        ...Fonts.grayColor17Medium, textAlign: 'center',
                        marginBottom: Sizes.fixPadding * 2.0,
                    }}>
                        There are no downloded videos on your device
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            this.setState({
                                nothingToDeleteDialog: false,
                            })
                        }}
                        style={styles.okButtonStyle}
                    >
                        <Text style={{ ...Fonts.whiteColor16Medium }}>Okay</Text>
                    </TouchableOpacity>
                </View>
            </Dialog.Container>
        )
    }

    deleteAllDownloadsInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding + 5.0 }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ nothingToDeleteDialog: true })}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View style={{ width: width - 100.0, }}>
                        <Text style={{ ...Fonts.redColor20Medium }}>
                            Delete All Downloads
                        </Text>
                        <Text style={{ ...Fonts.grayColor17Medium, marginTop: Sizes.fixPadding }}>
                            This will remove all downloaded Lesson videos from your phone
                        </Text>
                    </View>
                    <MaterialIcons name="delete" size={28} color='#F4473A' />
                </TouchableOpacity>
                <View style={styles.redDividerStyle}>
                </View>
            </View>
        )
    }

    videoQualityForDownloadsInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding + 5.0 }}>
                <Text style={{ ...Fonts.whiteColor20Medium, }}>
                    Video Quality for Downloads
                </Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ videoDownloadInHigh: false })}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: Sizes.fixPadding + 5.0
                    }}>
                    <View style={{ width: width - 100.0, }}>
                        <Text style={{ ...Fonts.whiteColor18Medium }}>
                            Standard (recommended)
                        </Text>
                        <Text style={{ ...Fonts.grayColor17Medium, marginTop: Sizes.fixPadding }}>
                            Downloads faster and uses less storage</Text>
                    </View>
                    {
                        this.state.videoDownloadInHigh ?
                            null :
                            <MaterialIcons name="done" size={25} color={Colors.whiteColor} />
                    }
                </TouchableOpacity>
                <View style={{
                    height: 0.90,
                    backgroundColor: 'gray',
                    marginVertical: Sizes.fixPadding + 5.0,
                }}>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ videoDownloadInHigh: true })}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View style={{ width: width - 100.0, }}>
                        <Text style={{ ...Fonts.whiteColor18Medium }}>High Definition</Text>
                        <Text style={{ ...Fonts.grayColor17Medium, marginTop: Sizes.fixPadding }}>
                            Use more storage
                        </Text>
                    </View>
                    {
                        this.state.videoDownloadInHigh ?
                            <MaterialIcons name="done" size={25} color={Colors.whiteColor} />
                            :
                            null
                    }
                </TouchableOpacity>
                <View style={{
                    height: 0.90,
                    backgroundColor: 'gray',
                    marginVertical: Sizes.fixPadding + 5.0,
                }}>
                </View>
            </View>
        )
    }

    divider() {
        return (
            <View style={{
                height: 0.90,
                backgroundColor: 'gray',
                marginVertical: Sizes.fixPadding + 5.0,
                marginHorizontal: Sizes.fixPadding + 5.0
            }}>
            </View>
        )
    }

    cellularDataInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding + 5.0, marginTop: Sizes.fixPadding }}>
                <Text style={{ ...Fonts.grayColor20Medium }}>
                    Celluar Data
                </Text>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    marginTop: Sizes.fixPadding - 5.0,
                    alignItems: 'center'
                }}>
                    <Text style={{ ...Fonts.whiteColor18Medium }}>Cellular Data for Downloads</Text>
                    <Switch
                        value={this.state.switchOff}
                        onValueChange={(val) => { this.setState({ switchOff: val }) }}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        circleSize={30}
                        barHeight={37}
                        circleBorderWidth={0}
                        backgroundActive={Colors.primaryColor}
                        backgroundInactive={'#9E9E9E'}
                        circleActiveColor={Colors.whiteColor}
                        circleInActiveColor={Colors.whiteColor}
                        switchLeftPx={5}
                        switchRightPx={5}
                        switchWidthMultiplier={2.5}
                    />
                </View>
            </View>
        )
    }

    header() {
        return (
            <View style={styles.headerConentStyle}>
                <MaterialIcons name="arrow-back" size={24} color={Colors.whiteColor}
                    onPress={() => this.props.navigation.goBack()}
                    style={{ position: 'absolute', left: 10.0 }}
                />
                <Text style={{ ...Fonts.whiteColor20Medium }}>
                    App Settings
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
    redDividerStyle: {
        height: 1.5,
        backgroundColor: '#F4473A',
        marginVertical: Sizes.fixPadding + 5.0
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 90,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: -Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0
    },
    okButtonStyle: {
        width: '100%',
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding + 5.0
    },
})

AppSettingScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default AppSettingScreen;