import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    BackHandler,
    ScrollView,
    Dimensions,
    TextInput,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheet } from 'react-native-elements';
import Dialog from "react-native-dialog";

const { width } = Dimensions.get('screen');

class MyProfile extends Component {

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
        phoneDialog: false,
        phoneNumber: '98765432210',
        changePhoneNumber: '9603456878',
        emailDialog: false,
        email: 'test@abc.com',
        changeEmail: 'test@abc.com',
        passwordDialog: false,
        password: '******',
        changePassword: '123456',
        showBottomSheet: false,
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#1a2236" }}>
                <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
                <View style={{ backgroundColor: "#1a2236", flex: 1 }}>
                    {this.header()}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        {this.changeProfilePhotoInfo()}
                        {this.settingInfo({ title: 'Phone Number', value: this.state.phoneNumber, index: 1 })}
                        {this.settingInfo({ title: 'Email', value: this.state.email, index: 2 })}
                        {this.settingInfo({ title: 'Password', value: '******', index: 3 })}
                    </ScrollView>
                </View>
                {this.changeProfileOptions()}
                {this.editPhoneDialog()}
                {this.editEmailDialog()}
                {this.editPasswordDialog()}
            </SafeAreaView>
        )
    }

    editPasswordDialog() {
        return (
            <Dialog.Container visible={this.state.passwordDialog}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{
                    backgroundColor: 'white', alignItems: 'center',
                }}>
                    <Text style={{ ...Fonts.blackColor20Medium, paddingBottom: Sizes.fixPadding + 5.0, }}>
                        Change Your Password
                    </Text>
                    <View style={{
                        borderBottomColor: '#9E9E9E', borderBottomWidth: 0.50, width: '100%',
                    }}>
                        <TextInput
                            style={{ ...Fonts.blackColor16Medium, paddingBottom: Sizes.fixPadding }}
                            placeholder='Old Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{
                        borderBottomColor: '#9E9E9E', borderBottomWidth: 0.50,
                        width: '100%', marginTop: Sizes.fixPadding,
                    }}>
                        <TextInput
                            onChangeText={(value) => this.setState({ changePassword: value })}
                            style={{ ...Fonts.blackColor16Medium, paddingBottom: Sizes.fixPadding }}
                            placeholder='New Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{
                        borderBottomColor: '#9E9E9E', borderBottomWidth: 0.50, width: '100%',
                        marginTop: Sizes.fixPadding,
                    }}>
                        <TextInput
                            style={{ ...Fonts.blackColor16Medium, paddingBottom: Sizes.fixPadding }}
                            placeholder='Confirm New Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        justifyContent: 'center', marginTop: Sizes.fixPadding * 2.0
                    }}>
                        <TouchableOpacity activeOpacity={0.9}
                            onPress={() => this.setState({ passwordDialog: false })}
                            style={styles.cancelButtonStyle}
                        >
                            <Text style={{ ...Fonts.blackColor16Medium }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                this.setState({
                                    passwordDialog: false,
                                    password: this.state.changePassword,
                                })
                            }}
                            style={styles.okButtonStyle}
                        >
                            <Text style={{ ...Fonts.whiteColor16Medium }}>Okay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    changeProfileOptions() {
        return (
            <BottomSheet
                isVisible={this.state.showBottomSheet}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.50, 0, 0.50)' }}
            >
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ showBottomSheet: false })}
                    style={styles.bottomSheetContentStyle}
                >
                    <Text style={{ ...Fonts.blackColor20Medium, textAlign: 'center' }}>
                        Choose Option
                    </Text>
                    <View style={{
                        backgroundColor: '#CFC6C6', height: 1.0,
                        marginBottom: Sizes.fixPadding + 2.0,
                        marginTop: Sizes.fixPadding - 5.0,
                    }}>

                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: Sizes.fixPadding * 2.0 }}>
                        <MaterialIcons name="photo-camera" size={24} color={Colors.blackColor} />
                        <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                            Camera
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                        <MaterialIcons name="photo-album" size={22} color={Colors.blackColor} />
                        <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                            Choose from gallery
                        </Text>
                    </View>
                </TouchableOpacity>
            </BottomSheet>
        )
    }

    editEmailDialog() {
        return (
            <Dialog.Container visible={this.state.emailDialog}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{
                    backgroundColor: 'white', alignItems: 'center',
                }}>
                    <Text style={{ ...Fonts.blackColor20Medium, paddingBottom: Sizes.fixPadding + 5.0, }}>
                        Change Email
                    </Text>
                    <View style={{ borderBottomColor: '#9E9E9E', borderBottomWidth: 1.0, width: '100%' }}>
                        <TextInput
                            value={this.state.changeEmail}
                            onChangeText={(value) => this.setState({ changeEmail: value })}
                            style={{ ...Fonts.blackColor16Medium, paddingBottom: Sizes.fixPadding }}
                        />
                    </View>
                    <View style={styles.okAndCancelButtonContainerStyle}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => this.setState({ emailDialog: false })}
                            style={styles.cancelButtonStyle}
                        >
                            <Text style={{ ...Fonts.blackColor16Medium }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                this.setState({
                                    emailDialog: false,
                                    email: this.state.changeEmail
                                })
                            }
                            }
                            style={styles.okButtonStyle}
                        >
                            <Text style={{ ...Fonts.whiteColor16Medium }}>Okay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    editPhoneDialog() {
        return (
            <Dialog.Container visible={this.state.phoneDialog}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{
                    backgroundColor: 'white', alignItems: 'center',
                }}>
                    <Text style={{ ...Fonts.blackColor20Medium, paddingBottom: Sizes.fixPadding + 5.0, }}>
                        Change Phone Number
                    </Text>
                    <View style={{ borderBottomColor: '#9E9E9E', borderBottomWidth: 1.0, width: '100%' }}>
                        <TextInput
                            value={this.state.changePhoneNumber}
                            onChangeText={(value) => this.setState({ changePhoneNumber: value })}
                            style={{ ...Fonts.blackColor16Medium, paddingBottom: Sizes.fixPadding }}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.okAndCancelButtonContainerStyle}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => this.setState({ phoneDialog: false })}
                            style={styles.cancelButtonStyle}
                        >
                            <Text style={{ ...Fonts.blackColor16Medium }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                this.setState({
                                    phoneDialog: false,
                                    phoneNumber: this.state.changePhoneNumber
                                })
                            }
                            }
                            style={styles.okButtonStyle}
                        >
                            <Text style={{ ...Fonts.whiteColor16Medium }}>Okay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    settingInfo({ title, value, index }) {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding + 5.0 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{
                            ...Fonts.whiteColor16Medium,
                            marginTop: Sizes.fixPadding,
                            marginBottom: Sizes.fixPadding - 5.0
                        }}>
                            {title}
                        </Text>
                        <Text style={{ ...Fonts.grayColor15Regular }}>{value}</Text>
                    </View>
                    <MaterialIcons name="edit" size={30} color='#9E9E9E'
                        onPress={() => {
                            index == 1 ? this.setState({ phoneDialog: true }) :
                                index == 2 ? this.setState({ emailDialog: true }) :
                                    this.setState({ passwordDialog: true })
                        }}
                    />
                </View>
                <View style={{ backgroundColor: '#9E9E9E', height: 0.3, marginVertical: Sizes.fixPadding }}>
                </View>
            </View>
        )
    }

    changeProfilePhotoInfo() {
        return (
            <View style={{ alignItems: 'center', marginBottom: Sizes.fixPadding * 2.5 }}>
                <ImageBackground
                    source={require('../../assets/images/user_profile/user.jpg')}
                    style={styles.userProfilePhotoStyle}
                    borderRadius={50.0}
                >
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => this.setState({ showBottomSheet: true })}
                        style={styles.userProfilePhotoBlurContentStyle}>
                        <MaterialCommunityIcons name="camera-plus" size={27} color={Colors.whiteColor} />
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={{ ...Fonts.whiteColor20Medium }}>
                    Allison Perry
                </Text>
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
                    Edit Profile
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
    userProfilePhotoStyle: {
        width: 100.0,
        height: 100.0,
        borderRadius: 50.0,
        marginTop: Sizes.fixPadding * 2.5,
        marginBottom: Sizes.fixPadding + 5.0,
    },
    userProfilePhotoBlurContentStyle: {
        width: 100.0,
        height: 100.0,
        borderRadius: 50.0,
        backgroundColor: 'rgba(0,0,0,0.55)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomSheetContentStyle: {
        backgroundColor: Colors.whiteColor,
        paddingTop: Sizes.fixPadding + 5.0,
        paddingBottom: Sizes.fixPadding,
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 70,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: -Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0
    },
    cancelButtonStyle: {
        flex: 0.50,
        backgroundColor: '#E0E0E0',
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding,
        marginRight: Sizes.fixPadding + 5.0,
    },
    okButtonStyle: {
        flex: 0.50,
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Sizes.fixPadding + 5.0
    },
    okAndCancelButtonContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding + 5.0
    },
})

MyProfile.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default MyProfile;

