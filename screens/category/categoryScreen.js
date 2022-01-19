import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    BackHandler,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image,
    ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

const width = Dimensions.get('window').width;

const itemWidth = Math.round(width * 0.8);

const SliderList = [
    {
        image: require('../../assets/images/slider/1.png'),
    },
    {
        image: require('../../assets/images/slider/2.png'),
    },
    {
        image: require('../../assets/images/slider/3.png'),
    },
    {
        image: require('../../assets/images/slider/4.png'),
    },
];

const newMoviesList = [
    {
        id: '1',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_1.jpg')
    },
    {
        id: '2',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_2.jpg')
    },
    {
        id: '3',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_3.jpg')
    },
    {
        id: '4',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_4.jpg')
    },
    {
        id: '5',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_5.jpg')
    },
    {
        id: '6',
        movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_6.jpg')
    },
];

const hitMoviesList = [
    {
        id: '1',
        movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_1.jpg')
    },
    {
        id: '2',
        movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_2.jpg')
    },
    {
        id: '3',
        movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_3.jpg')
    },
    {
        id: '4',
        movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_4.jpg')
    },
    {
        id: '5',
        movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_5.jpg')
    },
    {
        id: '6',
        movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_6.jpg')
    },
];

const popularMovieList = [
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

const trendingMoviesList = [
    {
        id: '1',
        movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_1.jpg')
    },
    {
        id: '2',
        movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_2.jpg')
    },
    {
        id: '3',
        movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_3.jpg')
    },
    {
        id: '4',
        movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_4.jpg')
    },
    {
        id: '5',
        movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_5.jpg')
    },
    {
        id: '6',
        movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_6.jpg')
    },
];

const productionStudiosList = [
    {
        id: '1',
        productionStudioImage: require('../../assets/images/production_studio/studio_1.png'),
    },
    {
        id: '2',
        productionStudioImage: require('../../assets/images/production_studio/studio_2.png'),
    },
    {
        id: '3',
        productionStudioImage: require('../../assets/images/production_studio/studio_3.png'),
    },
    {
        id: '4',
        productionStudioImage: require('../../assets/images/production_studio/studio_4.png'),
    },
    {
        id: '5',
        productionStudioImage: require('../../assets/images/production_studio/studio_5.png'),
    },
];

class CategoryScreen extends Component {

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

    category = this.props.navigation.getParam('category');

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
                        {this.sliderForMoviesAndWebSeries()}
                        {this.productionStudios()}
                        {this.titleWithMore({ title: 'New Movies' })}
                        {this.newMovies()}
                        {this.titleWithMore({ title: 'Hit Movies' })}
                        {this.hitMovies()}
                        {this.titleWithMore({ title: 'Popular Movies' })}
                        {this.popularMovies()}
                        {this.titleWithMore({ title: 'Trending' })}
                        {this.trendings()}
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }

    trendings() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push('WebSeries')}
            >
                <Image
                    source={item.movieHookImage}
                    style={styles.allMoviesHookImageStyle}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={trendingMoviesList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listItemsContentStyle}
            />
        )
    }

    popularMovies() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push('WebSeries')}
            >
                <Image
                    source={item.movieHookImage}
                    style={styles.allMoviesHookImageStyle}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={popularMovieList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listItemsContentStyle}
            />
        )
    }

    hitMovies() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push('WebSeries')}
            >
                <Image
                    source={item.movieHookImage}
                    style={styles.allMoviesHookImageStyle}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={hitMoviesList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listItemsContentStyle}
            />
        )
    }

    newMovies() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push('WebSeries')}
            >
                <Image
                    source={item.movieHookImage}
                    style={styles.allMoviesHookImageStyle}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={newMoviesList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listItemsContentStyle}
            />
        )
    }

    titleWithMore({ title }) {
        return (
            <View style={styles.titleWithMoreTextContentStyle}>
                <Text style={{ ...Fonts.whiteColor20Medium, }}>
                    {title}
                </Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.navigate('MoreMovies')}
                >
                    <Text style={{ ...Fonts.primaryColor16Light }}>MORE</Text>
                </TouchableOpacity>
            </View>
        )
    }

    productionStudios() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('MoreMovies')}
            >
                <Image
                    source={item.productionStudioImage}
                    style={{ height: 100.0, width: 100.0, marginRight: Sizes.fixPadding + 2.0 }}
                />
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={productionStudiosList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: Sizes.fixPadding * 2.0,
                    paddingBottom: Sizes.fixPadding * 2.0,
                    paddingLeft: Sizes.fixPadding + 5.0
                }}
            />
        )
    }

    sliderForMoviesAndWebSeries() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push('WebSeries')}
            >
                <ImageBackground
                    source={item.image}
                    style={styles.sliderImageStyle}
                    resizeMode="cover"
                    borderRadius={Sizes.fixPadding - 5.0}
                >
                </ImageBackground>
            </TouchableOpacity>
        )
        return (
            <Carousel
                ref={ref => this.carousel = ref}
                data={SliderList}
                sliderWidth={width}
                itemWidth={itemWidth}
                renderItem={renderItem}
                autoplay={true}
                loop={true}
                containerCustomStyle={{ marginTop: Sizes.fixPadding }}
                lockScrollWhileSnapping={true}
                autoplayInterval={4000}
            />
        );
    }

    header() {
        return (
            <View style={styles.headerConentStyle}>
                <MaterialIcons name="arrow-back" size={24} color={Colors.whiteColor}
                    onPress={() => this.props.navigation.goBack()}
                    style={{ position: 'absolute', left: 10.0 }}
                />
                <Text style={{ ...Fonts.whiteColor20Medium }}>
                    {this.category}
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
    sliderImageStyle: {
        width: itemWidth,
        height: 220,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleWithMoreTextContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginVertical: Sizes.fixPadding + 5.0,
        alignItems: 'center'
    },
    allMoviesHookImageStyle: {
        height: 140.0,
        width: 110.0,
        borderRadius: Sizes.fixPadding,
        marginRight: Sizes.fixPadding + 2.0
    },
    listItemsContentStyle: {
        paddingLeft: Sizes.fixPadding + 5.0,
        paddingBottom: Sizes.fixPadding + 5.0
    },
});

CategoryScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default CategoryScreen;

