import React, { useState, useRef, Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    BackHandler,
    Dimensions,
    Animated,
} from "react-native";
import { withNavigation } from "react-navigation";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const notificationList = [
    {
        key: '1',
        name: 'Watch Latest Web Series Now!',
        description: 'Watch latest web series now.All new web series are come.Tap on this watch now.',

    },
    {
        key: '2',
        name: 'Upgrade Premium Now',
        description: 'Upgrade premium now and get 52% off.Hurry up!',
    },
];

class NotificationScreen extends Component {

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
            <SafeAreaView style={{ flex: 1, }}>
                <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
                <Notification navigation={this.props.navigation} />
            </SafeAreaView>
        )
    }
}

const rowTranslateAnimatedValues = {};

const Notification = ({ navigation }) => {

    const [showSnackBar, setShowSnackBar] = useState(false);

    const [snackBarMsg, setSnackBarMsg] = useState('');

    const [listData, setListData] = useState(notificationList);

    Array(listData.length + 1)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    const animationIsRunning = useRef(false);

    const onSwipeValueChange = swipeData => {

        const { key, value } = swipeData;

        if (
            value < -Dimensions.get('window').width &&
            !animationIsRunning.current
        ) {
            animationIsRunning.current = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {

                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                const removedItem = listData.find(item => item.key === key);

                setSnackBarMsg(`${removedItem.name} dismissed`);

                setListData(newData);

                setShowSnackBar(true);

                animationIsRunning.current = false;
            });
        }
    };

    const renderItem = data => (
        <Animated.View
            style={[
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 125],
                    }),
                },
            ]}
        >
            <View style={{ flex: 1, backgroundColor: "#1a2236"}}>
                <View style={styles.notificationContainerStyle}>
                    <View style={styles.notificationIconContainerStyle}>
                        <MaterialIcons name="notifications-none" size={40} color={Colors.whiteColor} />
                    </View>
                    <View style={{
                        marginLeft: Sizes.fixPadding + 5.0,
                        width: width - 160,
                        paddingVertical: Sizes.fixPadding + 3.0
                    }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor19Medium }}>
                            {data.item.name}
                        </Text>
                        <Text numberOfLines={2} style={{
                            ...Fonts.grayColor15Regular,
                            marginTop: Sizes.fixPadding - 12.0
                        }}>
                            {data.item.description}
                        </Text>
                    </View>
                </View>
            </View>
        </Animated.View>
    );

    const renderHiddenItem = () => (
        <View style={styles.rowBack}>
        </View>
    );

    function header() {
        return (
            <View style={styles.headerConentStyle}>
                <MaterialIcons name="arrow-back" size={24} color={Colors.whiteColor}
                    onPress={() => navigation.goBack()}
                    style={{ position: 'absolute', left: 10.0 }}
                />
                <Text style={{ ...Fonts.whiteColor20Medium }}>
                    Notifications
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {header()}
            {listData.length == 0 ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Ionicons name="ios-notifications-off-outline" size={70} color="#9E9E9E" />
                    <Text style={{ ...Fonts.grayColor20Bold, marginTop: Sizes.fixPadding * 2.0 }}>
                        No Notifications
                    </Text>
                </View>
                :
                <SwipeListView
                    disableRightSwipe
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-Dimensions.get('window').width}
                    onSwipeValueChange={onSwipeValueChange}
                    useNativeDriver={false}
                />
            }
            <Snackbar
                style={styles.snackBarStyle}
                visible={showSnackBar}
                onDismiss={() => setShowSnackBar(false)}
            >
                <Text style={{ ...Fonts.whiteColor16Medium }}>{snackBarMsg}</Text>
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    headerConentStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blackColor,
        paddingVertical: Sizes.fixPadding + 5.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },
    notificationContainerStyle: {
        height: 110.0,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.whiteColor,
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginVertical: Sizes.fixPadding - 5.0,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingLeft: Sizes.fixPadding,
    },
    notificationIconContainerStyle: {
        height: 90.0,
        width: 90.0,
        backgroundColor: '#D32F2F',
        borderRadius: 45.0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
         backgroundColor: "#1a2236",
        flex: 1,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        marginBottom: Sizes.fixPadding,
        marginTop: Sizes.fixPadding - 5.0,
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333'
    }
});

NotificationScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default NotificationScreen;

