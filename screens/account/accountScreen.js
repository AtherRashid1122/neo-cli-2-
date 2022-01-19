import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    BackHandler,
    SafeAreaView,
    StatusBar,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import Dialog from "react-native-dialog";
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
// "expo-video-thumbnails": "~5.2.1",

const { width } = Dimensions.get('screen');

class AccountScreen extends Component {

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
        isLogoutDialogOpen: false,
        isGetPremiumDialogOpen: false,
        isPaymentMethodsDialogOpen: false,
        currentIndex: 1,
        thanksDialog: false,
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
                            {this.header()}
                            {this.userInfo()}
                            {this.premiumInfo()}
                            {this.getPremium()}
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.props.navigation.navigate('EditProfile')}
                            >
                                {this.settingInfo({ settingTitle: 'Edit Profile', backColor: '#2196F3' })}
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.props.navigation.navigate('AppSetting')}
                            >
                                {this.settingInfo({ settingTitle: 'App Setting', backColor: '#009688' })}

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.props.navigation.navigate('PrivacyPolicy')}
                            >
                                {this.settingInfo({ settingTitle: 'Privacy Policy', backColor: '#00BCD4' })}
                            </TouchableOpacity>
                        </ScrollView>
                    </LinearGradient>
                </ImageBackground>
                {this.getPremiumDialog()}
                {this.logOutDialog()}
                {this.paymentMethodsDialog()}
                {this.thankYouInfo()}
            </SafeAreaView >
        )
    }

    thankYouInfo() {
        return (
            <Dialog.Container visible={this.state.thanksDialog}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.thankYouDialogIconContainerStyle}>
                        <MaterialIcons name="check" size={40} color={Colors.primaryColor} />
                    </View>
                    <Text style={styles.tankYouTextStyle}>
                        Thanks for Activiting Premium!
                    </Text>
                </View>
            </Dialog.Container>
        )
    }

    paymentMethodsDialog() {
        return (
            <Dialog.Container visible={this.state.isPaymentMethodsDialogOpen}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{ backgroundColor: 'white', alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor22Medium, paddingBottom: Sizes.fixPadding * 4.0 }}>
                        Choose payment method
                    </Text>
                    {this.payments({
                        index: 1,
                        type: 'Credit / Debit Card',
                        image: require('../../assets/images/payment_icon/card.png')
                    })}
                    {this.payments({
                        index: 2,
                        type: 'PayPal',
                        image: require('../../assets/images/payment_icon/paypal.png')
                    })}
                    {this.payments({
                        index: 3,
                        type: 'Google Wallet',
                        image: require('../../assets/images/payment_icon/google_wallet.png')
                    })}

                    <View style={styles.cancelAndPayButtonContentStyle}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => this.setState({ isPaymentMethodsDialogOpen: false })}
                            style={styles.paymentCancelButtonStyle}
                        >
                            <Text style={{ ...Fonts.whiteColor20Medium }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}
                            onPress={() => {
                                this.setState({ isPaymentMethodsDialogOpen: false, thanksDialog: true })
                                setTimeout(() => {
                                    this.setState({ thanksDialog: false, isGetPremiumDialogOpen: false })
                                    this.props.navigation.push('BottomTabBar');
                                }, 2000);
                            }}
                            style={styles.paymentPayButtonStyle}
                        >
                            <Text style={{ ...Fonts.whiteColor20Medium }}>Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    payments({ index, type, image }) {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ currentIndex: index })}
                    style={styles.paymentMethodContentStyle}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: width - 200,
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            borderColor: this.state.currentIndex == index ? Colors.primaryColor : 'gray',
                            ...styles.paymentMethodsSelectionStyle
                        }}>
                            {
                                this.state.currentIndex == index ? <View style={{
                                    backgroundColor: Colors.primaryColor,
                                    width: 10.0, height: 10.0, borderRadius: 5.0
                                }}>
                                </View> : null
                            }
                        </View>
                        <View style={{ width: width - 250, }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                                {type}
                            </Text>
                        </View>
                    </View>
                    <Image
                        source={image}
                        style={{ height: 40.0, width: 40.0 }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                {index == 3 ?
                    null :
                    <View style={{
                        backgroundColor: 'gray', height: 0.2,
                        marginVertical: Sizes.fixPadding + 5.0,
                        width: width - 120.0
                    }}></View>
                }
            </View>
        )
    }

    getPremiumDialog() {
        return (
            <Dialog.Container
                visible={this.state.isGetPremiumDialogOpen}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{
                    backgroundColor: Colors.whiteColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ ...Fonts.blackColor22Medium, paddingBottom: Sizes.fixPadding }}>
                        VidFlix Premium
                    </Text>
                    {this.premiumTypeInfo({
                        amount: '499',
                        backColor: '#B2EBF2',
                        yearOrmonth: 'year',
                        isOffer: true,
                        percentage: '58'
                    })}
                    {this.premiumTypeInfo({
                        amount: '49',
                        backColor: '#C8E6C9',
                        yearOrmonth: 'month',
                        isOffer: false,
                        percentage: null
                    })}
                </View>
            </Dialog.Container>
        )
    }

    premiumTypeInfo({ amount, backColor, yearOrmonth, isOffer, percentage }) {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.setState({ isPaymentMethodsDialogOpen: true })}
            >
                <View style={{
                    backgroundColor: backColor,
                    ...styles.premiumTypeInfoContentStyle,
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ ...Fonts.blackColor25Medium }}>${amount} </Text>
                        <Text style={{ ...Fonts.grayColor17Medium, alignSelf: "flex-end" }}>
                            / {yearOrmonth}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: Sizes.fixPadding + 5.0
                    }}>
                        <Text style={{ ...Fonts.grayColor14Medium }}>
                            Charged {yearOrmonth == 'year' ? 'yearly' : 'monthly'}
                        </Text>
                        <View style={{
                            width: 5.0,
                            height: 5.0,
                            borderRadius: 2.5,
                            backgroundColor: '#9E9E9E',
                            marginHorizontal: Sizes.fixPadding
                        }}></View>
                        <View style={{ width: width / 4.5 }}>
                            <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium }}>
                                Non-refundable
                            </Text>
                        </View>
                    </View>
                </View>
                {isOffer
                    ?
                    <View style={styles.premiumOfferStyle}>
                        <Text style={{ ...Fonts.whiteColor16Medium }}>
                            {percentage}%
                        </Text>
                        <Text style={{ ...Fonts.whiteColor16Medium }}>
                            OFF
                        </Text>
                    </View>
                    :
                    null
                }
            </TouchableOpacity>
        )
    }

    delet_token = async () => {
              try {
                await AsyncStorage.removeItem("@user_token")
                await AsyncStorage.removeItem("@user_type")
          
                  .then(() => {
                    this.props.navigation.navigate("Login");
                    console.log("token removed and logout done");
                  })
                  .catch((e) => {
                    console.log(e, "error in removing token");
                  });
              } catch (exception) {
                console.log(exception, "error in removing token=exception");
                return false;
              }
            };
    logOutDialog() {
        return (
            <Dialog.Container
                visible={this.state.isLogoutDialogOpen}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{ backgroundColor: Colors.whiteColor, alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor22Medium, paddingBottom: Sizes.fixPadding - 7.0, }}>
                        You sure want to logout?
                    </Text>
                    <View style={styles.cancelAndLogOutButtonContentStyle}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => this.setState({ isLogoutDialogOpen: false })}
                            style={styles.cancelButtonStyle}
                        >
                            <Text style={{ ...Fonts.blackColor15Regular }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}
                            onPress={() => {
                                this.setState({ isLogoutDialogOpen: false })
                                // this.props.navigation.push('Login')
                               this.delet_token()
                            }}
                            style={styles.logOutButtonStyle}
                        >
                            <Text style={{ ...Fonts.whiteColor15Regular }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    settingInfo({ settingTitle, backColor }) {
        return (
            <View style={{
                backgroundColor: backColor,
                ...styles.settingInfoContentStyle
            }}>
                <Text style={{ ...Fonts.whiteColor20Medium, marginLeft: Sizes.fixPadding }}>
                    {settingTitle}
                </Text>
            </View>
        )
    }

    getPremium() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.setState({ isGetPremiumDialogOpen: true })}
                style={styles.getPremiumContentStyle}>
                <Image
                    source={require('../../assets/images/gold_crown.png')}
                    style={{ width: 20.0, height: 20.0 }}
                />
                <Text style={{ ...Fonts.whiteColor20Medium, marginLeft: Sizes.fixPadding }}>
                    Get VidFlix Premium
                </Text>
            </TouchableOpacity>
        )
    }

    premiumInfo() {
        return (
            <View style={styles.premiumInfoContentStyle}>
                <Image
                    source={require('../../assets/images/silver_crown.png')}
                    style={{ width: 20.0, height: 20.0 }}
                />
                <Text style={{ ...Fonts.grayColor18Light, marginLeft: Sizes.fixPadding + 2.0 }}>
                    Not Premium
                </Text>
            </View>
        )
    }

    userInfo() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/user_profile/user.jpg')}
                    style={styles.userProfilePhotoStyle}
                />
                <Text style={{ ...Fonts.whiteColor20Medium }}>
                    Allison Perry
                </Text>
            </View>
        )
    }

    header() {
        return (
            <View style={styles.headerContentStyle}>
                <Text style={{ ...Fonts.whiteColor20Medium }}>Account</Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ isLogoutDialogOpen: true })}
                >
                    <Text style={{ ...Fonts.primaryColor17Light }}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    settingInfoContentStyle: {
        borderRadius: Sizes.fixPadding * 3.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Sizes.fixPadding + 5.0
    },
    getPremiumContentStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding * 3.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Sizes.fixPadding + 7.0,
        marginBottom: Sizes.fixPadding + 5.0
    },
    premiumInfoContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: Sizes.fixPadding + 5.0
    },
    userProfilePhotoStyle: {
        width: 100.0,
        height: 100.0,
        borderRadius: 50.0,
        marginTop: Sizes.fixPadding * 2.5,
        marginBottom: Sizes.fixPadding + 5.0,
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 80,
        paddingTop: -Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0,
    },
    cancelButtonStyle: {
        flex: 0.45,
        backgroundColor: '#E0E0E0',
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding,
    },
    logOutButtonStyle: {
        flex: 0.45,
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Sizes.fixPadding + 10.0
    },
    payButtonStyle: {
        flex: 0.45,
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Sizes.fixPadding + 10.0
    },
    premiumTypeInfoContentStyle: {
        borderRadius: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        width: width - 130.0,
        marginVertical: Sizes.fixPadding,
        borderBottomColor: 'rgba(128, 128, 128, 0.2)',
        borderBottomWidth: 1.0,
    },
    premiumOfferStyle: {
        position: 'absolute',
        top: 10.0,
        right: 20.0,
        backgroundColor: Colors.primaryColor,
        paddingVertical: Sizes.fixPadding - 7.0,
        paddingHorizontal: Sizes.fixPadding,
        borderBottomLeftRadius: Sizes.fixPadding,
        borderBottomRightRadius: Sizes.fixPadding,
    },
    cancelAndLogOutButtonContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding,
    },
    cancelAndPayButtonContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 4.0,
        marginHorizontal: Sizes.fixPadding,
    },
    paymentMethodContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width - 150.0,
        alignSelf: 'center'
    },
    paymentMethodsSelectionStyle: {
        width: 18.0,
        height: 18.0,
        borderRadius: 9.0,
        backgroundColor: Colors.whiteColor,
        borderWidth: 2.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Sizes.fixPadding * 2.0
    },
    paymentCancelButtonStyle: {
        flex: 0.45,
        backgroundColor: '#E0E0E0',
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding,
    },
    paymentPayButtonStyle: {
        flex: 0.45,
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Sizes.fixPadding + 15.0

    },
    thankYouDialogIconContainerStyle: {
        backgroundColor: Colors.whiteColor,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        width: 70.0, height: 70.0,
        borderRadius: 35.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tankYouTextStyle: {
        ...Fonts.grayColor20Bold,
        marginVertical: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        textAlign: 'center'
    }
});

export default AccountScreen;

