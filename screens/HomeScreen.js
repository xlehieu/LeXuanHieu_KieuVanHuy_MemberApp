import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, ScrollView, Animated } from "react-native";
import Background from "./background/Background";
import { COLORS } from "../assets/constants";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";
const cart = require('../assets/image/cart.png');
const gift = require('../assets/image/qua.png');
const memberFestival = require('../assets/image/memberfestival.png');
const camnang = require('../assets/image/camnang.png');
const doitac = require('../assets/image/doitac.png');
const map = require('../assets/image/map.png');
const user_image = require('../assets/image/profile-user.png');
const WIDTH = Dimensions.get('window').width;
const WIDTH90 = 376;

const HomeScreen = () => {
    const navigation = useNavigation();
    const user = useRoute();
    const avatar = 0;
    const [name, setName] = useState('');
    const score = 0;
    const voucher = 0;
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        try {
            AsyncStorage.getItem("UserName").then(value => {
                if (value != null) {
                    setName(value);
                }
            })
        }
        catch (err) {
            console.error(err);
        }
    }
    const animatedValue = new Animated.Value(0);
    const blurHeader = animatedValue.interpolate({
        inputRange: [0, 80, 100],
        outputRange: [1, 0.1, 0],
        extrapolate: 'clamp'
    });
    const showHeader = animatedValue.interpolate({
        inputRange: [50, 140, 150],
        outputRange: [0, 0.9, 1],
        extrapolate: 'clamp'
    })
    const images = [
        require('../assets/image/screen-shot-2023-08-08-at-3-41-04-pm.jpg'),
        require('../assets/image/adidas_sale.jpg'),
        require('../assets/image/sushi_buffet.jpg'),
        require('../assets/image/pb_20231013_thumbnail-720x584.jpg'),
    ];
    const [event, setEvent] = useState([
        {
            id: '1',
            eventName: 'SIÊU NGÀY HỘI THÀNH VIÊN EAON MALL GIÁ SỐC THÀNH VIÊN',
            eventDate: '20.10 - 22.10.2023',
            eventImage: require('../assets/image/event.jpg'),
        },
        {
            id: '2',
            eventName: 'CHƯƠNG TRÌNH TÍCH XU ĐỔI QUÀ EAON MALL',
            eventDate: '20.10 - 22.10.2023',
            eventImage: require('../assets/image/event1.jpg'),
        },
        {
            id: '3',
            eventName: 'TIẾNG GỌI RỪNG XANH',
            eventDate: '25.05 - 31.07.2023',
            eventImage: require('../assets/image/event2.png'),
        },
        {
            id: '4',
            eventName: 'SALE TƯNG BỪNG MỪNG ĐẠI LỄ',
            eventDate: '26.08 - 04.09.2023',
            eventImage: require('../assets/image/event3.png'),
        },
    ]);
    const [news, setnews] = useState([
        {
            id: 'KenhEaon',
            newsName: 'Kênh EAON',
            newsImage: require('../assets/image/kenhtruyenthong.jpg'),
        },
        {
            id: 'KidClub',
            newsName: 'KIDS CLUB',
            newsImage: require('../assets/image/kidclub.png'),
        },
        {
            id: 'Eshop',
            newsName: 'EAON E-shop',
            newsImage: require('../assets/image/eshop.png'),
        },
    ]);
    const keyExtractor = (item) => item.id.toString();


    const [activeIndex, setActiveIndex] = useState(0);

    const renderNewsItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image source={item.newsImage} />
                <Text>{item.newsName}</Text>
            </TouchableOpacity>
        )
    }
    function goToOtherScreen(idNews) {
        news.map((newsItem) => {
            if (idNews == newsItem.id) {
                navigation.navigate(idNews)
            }
        })
    }
    function goToThongBaoScreen() {
        navigation.navigate("ThongBao");
    }
    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={[styles.headerStyle, styles.showHeaderStyle, { opacity: showHeader }]}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.userAvatarContainer}>
                        <Image style={styles.userAvatar} source={user_image} />
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userNameStyle}>{name}</Text>
                        <Text style={styles.userScoreAndVoucher}>{score} điểm - {voucher} vouchers</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginRight: 10 }}>
                    <TouchableOpacity onPress={() => goToThongBaoScreen()}>
                        <IconMaterial style={{ marginLeft: 10 }} name='bell-outline' size={28} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y);
                }}
                scrollEventThrottle={16}
            >
                <Background />
                <Animated.View style={[styles.headerStyle, { opacity: blurHeader }]}>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.userAvatarContainer}>
                            <Image style={styles.userAvatar} source={user_image} />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userNameStyle}>{name}</Text>
                            <Text style={styles.userScoreAndVoucher}>{score} điểm - {voucher} vouchers</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', marginRight: 10 }}>
                        <TouchableOpacity onPress={() => goToThongBaoScreen()}>
                            <IconMaterial style={{ marginLeft: 10 }} name='bell-outline' size={28} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                <View style={{ height: 300, marginTop: 100, width: '90%', borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary, overflow: 'hidden' }}>
                    <SliderBox images={images}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'stretch'}
                        style={[styles.imageSlider]}
                        dotColor={COLORS.primary} />
                </View>
                <View style={styles.chooseButtonContainer}>
                    <View style={styles.spaceButton}>
                        <TouchableOpacity style={styles.chooseButtonStyle}>
                            <View style={styles.containerIconStyle}>
                                <Image source={cart} style={styles.iconChooseButton} />
                            </View>
                            <Text style={styles.textChooseButton}>Mua sắm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.spaceButton}>
                        <TouchableOpacity style={styles.chooseButtonStyle}>
                            <View style={styles.containerIconStyle}>
                                <Image source={gift} style={styles.iconChooseButton} />
                            </View>
                            <Text style={styles.textChooseButton}>Quà tặng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.spaceButton}>
                        <TouchableOpacity style={styles.chooseButtonStyle}>
                            <View style={styles.containerIconStyle}>
                                <Image source={memberFestival} style={styles.iconChooseButton} />
                            </View>
                            <Text style={styles.textChooseButton}>Ngày hội thành viên</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.spaceButton}>
                        <TouchableOpacity style={styles.chooseButtonStyle}>
                            <View style={styles.containerIconStyle}>
                                <Image source={camnang} style={styles.iconChooseButton} />
                            </View>
                            <Text style={styles.textChooseButton}>Cẩm nang</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.spaceButton}>
                        <TouchableOpacity style={styles.chooseButtonStyle}>
                            <View style={styles.containerIconStyle}>
                                <Image source={doitac} style={styles.iconChooseButton} />
                            </View>
                            <Text style={styles.textChooseButton}>Đối tác</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.spaceButton}>
                        <TouchableOpacity style={styles.chooseButtonStyle}>
                            <View style={styles.containerIconStyle}>
                                <Image source={map} style={styles.iconChooseButton} />
                            </View>
                            <Text style={styles.textChooseButton}>Đường tới EAON</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerCate}>
                    <Text style={styles.titleCate}>Khuyến mại, sự kiện</Text>
                    <TouchableOpacity>
                        <Text style={{ color: COLORS.primary, fontWeight: '700' }}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerEvent}>
                    <FlatList
                        horizontal
                        data={event}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.eventItemStyle}>
                                <Image source={item.eventImage} style={styles.eventImageStyle} />
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.eventNameStyle}>{item.eventName}</Text>
                                <Text style={styles.eventDateStyle}>{item.eventDate}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={keyExtractor}
                    />
                </View>

                <View style={styles.containerCate}>
                    <Text style={styles.titleCate}>Tin ích khác</Text>
                </View>
                <View style={styles.containerNews}>
                    {news.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => goToOtherScreen(item.id)} style={styles.newsItem}>
                            <Image style={styles.newsImageStyle} source={item.newsImage} />
                            <Text style={styles.newsNameStyle}>{item.newsName}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
export default HomeScreen;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    imageSlider: {
        width: '100%',
        height: '100%',
    },
    dotStyle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 8,
        alignSelf: 'center'
    },
    chooseButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: WIDTH,
        justifyContent: ''
    },
    chooseButtonStyle: {
        width: 60,
        height: 120,
        alignItems: 'center'
    },
    containerIconStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: COLORS.primary,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#C1B6B4',
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 4,
        shadowOpacity: 1,
        marginTop: 20,
    },
    iconChooseButton: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    textChooseButton: {
        marginTop: 12,
        textAlign: 'center',
        width: 80,
        color: '#454545'
    },
    spaceButton: {
        width: '25%',
        alignItems: 'center'
    },
    containerEvent: {
        marginLeft: 20,
        marginTop: 18,
        height: 300
    },
    eventItemStyle: {
        width: 270,
        height: 250,
        marginRight: 30,
    },
    eventImageStyle: {
        height: 250,
        width: '100%',
        resizeMode: 'stretch',
        marginBottom: 8,
        borderRadius: 8,
    },
    eventNameStyle: {
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 5,
    },
    eventDateStyle: {
        fontSize: 14,
    },
    containerCate: {
        width: WIDTH90,
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleCate: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.titleColor,
    },
    containerNews: {
        flexDirection: "row",
        height: 150,
        width: WIDTH90,
        justifyContent: "space-between",
        marginVertical: 18
    },
    newsItem: {
        height: 130,
        width: '31.5%',
    },
    newsImageStyle: {
        height: 100,
        width: '100%',
        borderRadius: 12,
        resizeMode: 'stretch',
    },
    newsNameStyle: {
        alignSelf: "center",
        fontSize: 13,
        fontWeight: '500',
        marginVertical: 8,
        color: COLORS.titleColor,
    },
    headerStyle: {
        height: 90,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        paddingTop: 16,
        justifyContent: 'space-between'
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    userAvatarContainer: {
        borderRadius: 30,
        width: 60,
        overflow: 'hidden',
    },
    userAvatar: {
        resizeMode: 'contain',
        height: 60,
        width: 60,
    },
    userInfo: {
        paddingLeft: 16,
        height: 50,
        justifyContent: 'space-between'
    },
    userNameStyle: {
        color: '#fff',
        fontSize: 23,
    },
    userScoreAndVoucher: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '400'
    },
    showHeaderStyle: {
        top: 0,
        zIndex: 1,
        left: 0,
        right: 0,
        backgroundColor: '#A20E7D',
        overflow: 'hidden',
    }
})
