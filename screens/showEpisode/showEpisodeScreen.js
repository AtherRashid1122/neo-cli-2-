import React, { Component, useRef, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    BackHandler,
    StatusBar,
    Dimensions,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';

const { width } = Dimensions.get('screen');

const episodesList = [
    {
        id: '2',
        episodeHookImage: require('../../assets/images/episode/episode_2.jpg'),
        episodeNumber: 2,
        episode: require('../../assets/videos/video.mp4'),
    },
    {
        id: '3',
        episodeHookImage: require('../../assets/images/episode/episode_3.jpg'),
        episodeNumber: 3,
        episode: require('../../assets/videos/video.mp4'),
    },
    {
        id: '4',
        episodeHookImage: require('../../assets/images/episode/episode_4.jpg'),
        episodeNumber: 4,
        episode: require('../../assets/videos/video.mp4'),
    },
];

const alsoLikeMoviesList = [
    {
        id: '1',
        movieHookImage: require('../../assets/images/popular_movies/popular_movies_1.jpg')
    },
    {
        id: '2',
        movieHookImage: require('../../assets/images/popular_movies/popular_movies_2.jpg')
    },
    {
        id: '3',
        movieHookImage: require('../../assets/images/popular_movies/popular_movies_3.jpg')
    },
    {
        id: '4',
        movieHookImage: require('../../assets/images/popular_movies/popular_movies_4.jpg')
    },
    {
        id: '5',
        movieHookImage: require('../../assets/images/popular_movies/popular_movies_5.jpg')
    },
    {
        id: '6',
        movieHookImage: require('../../assets/images/popular_movies/popular_movies_6.jpg')
    },
];

const Episode = ({ episode }) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    return (
        <View style={styles.videoContainerStyle}>
            <Video
                ref={video}
                style={styles.video}
                source={episode}
                useNativeControls
                resizeMode="cover"
                isLooping
                shouldPlay={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            {status.isPlaying ?
                null :
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                    style={styles.button}>
                    <MaterialIcons name="play-arrow" size={30} color="black" />
                </TouchableOpacity>
            }
        </View>
    );
}

class ShowEpisodeScreen extends Component {

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

    episode = this.props.navigation.getParam('episode');
    episodeNumber = this.props.navigation.getParam('episodeNumber');

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.blackColor }}>
                <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
                <View style={{ flex: 1 }}>
                    {this.header()}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
                    >
                        <Episode episode={this.episode} />
                        {this.videoInfo()}
                        {this.moreEpisodesInfo()}
                        {this.youMayAlsoLikeInfo()}
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }

    youMayAlsoLikeInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push('WebSeries')}
            >
                <Image
                    source={item.movieHookImage}
                    style={styles.moviesHookImageStyle}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        )
        return (
            <View>
                <View style={styles.titleWithMoreTextContentStyle}>
                    <Text style={{ ...Fonts.whiteColor20Medium, }}>
                        You May Also Like
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => this.props.navigation.navigate('MoreMovies',
                            {
                                typeOfMovies: title,
                                moviesList: list,
                            }
                        )}
                    >
                        <Text style={{ ...Fonts.primaryColor16Light }}>MORE</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={alsoLikeMoviesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: Sizes.fixPadding + 5.0,
                        paddingBottom: Sizes.fixPadding + 5.0
                    }}
                />
            </View>
        )
    }

    moreEpisodesInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push('ShowEpisode', {
                    episode: item.episode,
                    episodeNumber: item.episodeNumber,
                })}
            >
                <Image
                    source={item.episodeHookImage}
                    style={styles.episodeHookImageStyle}
                    resizeMode="stretch"
                />

                <Text style={{ ...Fonts.grayColor19Medium, marginLeft: Sizes.fixPadding }}>
                    S1 - E{item.episodeNumber}
                </Text>
            </TouchableOpacity>
        )
        return (
            <View >
                <Text style={{
                    ...Fonts.whiteColor20Medium,
                    marginHorizontal: Sizes.fixPadding + 5.0,
                    marginBottom: Sizes.fixPadding - 5.0
                }}>
                    More Episodes
                </Text>
                <FlatList
                    data={episodesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingTop: Sizes.fixPadding,
                        paddingLeft: Sizes.fixPadding + 5.0
                    }}
                />
            </View>
        )
    }

    videoInfo() {
        return (
            <View style={{
                marginHorizontal: Sizes.fixPadding + 5.0,
                marginVertical: Sizes.fixPadding * 2.0
            }}>
                <Text style={{ ...Fonts.whiteColor20Medium }}>
                    Criminal Justice
                </Text>
                <Text style={{ ...Fonts.grayColor19Medium }}>
                    S1 - E{this.episodeNumber}
                </Text>
            </View>
        )
    }

    header() {
        return (
            <View style={styles.headerConentStyle}>
                <MaterialIcons name="arrow-back" size={24} color={Colors.whiteColor}
                    onPress={() => this.props.navigation.pop()}
                    style={{ position: 'absolute', left: 10.0 }}
                />
                <Text style={{ ...Fonts.whiteColor20Medium }}>
                    Criminal Justice
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
    videoContainerStyle: {
        backgroundColor: 'black',
    },
    video: {
        alignSelf: 'center',
        width: width,
        height: 210,
    },
    button: {
        position: "absolute",
        backgroundColor: Colors.whiteColor,
        left: width / 2.3,
        top: 70.0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
    },
    episodeHookImageStyle: {
        height: 140.0,
        width: 200.0,
        borderRadius: Sizes.fixPadding - 3.0,
        marginRight: Sizes.fixPadding + 5.0
    },
    titleWithMoreTextContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginVertical: Sizes.fixPadding + 5.0,
        alignItems: 'center'
    },
    moviesHookImageStyle: {
        height: 140.0,
        width: 110.0,
        borderRadius: Sizes.fixPadding,
        marginRight: Sizes.fixPadding + 2.0
    }
});

ShowEpisodeScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default ShowEpisodeScreen;

