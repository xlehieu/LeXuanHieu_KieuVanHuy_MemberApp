import React from 'react';
import { View, Text,StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ThongBaoSuKien = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.content_left}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="moon-outline" size={20} color={'yellow'} />
                            ĐẾN AEON VUI TẾT TRĂNG SĂN QUÀ HOT {'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="camera-outline" size={20} color={'black'} />
                                Thỏa sức check-in với cơ hội nhận 200K       <Icon name="chevron-forward-outline" size={20} color={'gray'} /></Text>
                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />
                <View style={styles.content}>
                    <View style={styles.content_left1}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right1}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="moon-outline" size={20} color={'yellow'} />
                            GIẢI MÃ AEON - ĐỊA ĐIỂM CỰC HOT 2/9 {'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="thumbs-up-outline" size={20} color={'red'} />
                                Nhiều sản phẩm GIẢM GIÁ SỐC                    <Icon name="chevron-forward-outline" size={20} color={'gray'} /></Text> {'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="checkmark-circle-outline" size={20} color={'red'} />
                                Dịch vụ "xịn xò" tiện ích thông minh</Text>
                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />
                <View style={styles.content}>
                    <View style={styles.content_left1}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right1}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="moon-outline" size={20} color={'yellow'} />
                            GIẢI MÃ AEON - ĐỊA ĐIỂM CỰC HOT 2/9 {'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="thumbs-up-outline" size={20} color={'red'} />
                                Nhiều sản phẩm GIẢM GIÁ SỐC                    <Icon name="chevron-forward-outline" size={20} color={'gray'} /></Text> {'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="checkmark-circle-outline" size={20} color={'red'} />
                                Dịch vụ "xịn xò" tiện ích thông minh</Text>
                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />
                <View style={styles.content}>
                    <View style={styles.content_left1}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right1}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="alarm-outline" size={20} color={'red'} />
                            AEON CÓ NGHỈ LỄ, NHƯNG MÀ SAU 23H {'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="star-outline" size={20} color={'yellow'} />
                                Trong các ngày 31/8-3/9, bạn thân có thể <Icon name="chevron-forward-outline" size={20} color={'gray'} />{'\n'}
                                đến AEON vui chơi, tham quan và mua sắm      </Text>

                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />
                <View style={styles.content}>
                    <View style={styles.content_left1}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right1}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="gift-outline" size={20} color={'blue'} />
                            ĐÓN LỄ SIÊU VUI TRÚNG QUÀ SÊU ĐÃ{'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="ribbon-outline" size={20} color={'red'} />
                                Mừng Đại Lễ với voucher đến 3 TRIỆU và  <Icon name="chevron-forward-outline" size={20} color={'gray'} />{'\n'}
                                chất từ XIAOMI,Philips, Kangaroo,...     </Text>

                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />
                <View style={styles.content}>
                    <View style={styles.content_left1}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right1}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="pencil-outline" size={20} color={'blue'} />
                            5P KHẢO SÁT TRÚNG VOUCHER 50K{'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="arrow-forward-circle-outline" size={20} color={'red'} />
                                Việc nhẹ quà to! Cơ hôi trúng VOUCHER  <Icon name="chevron-forward-outline" size={20} color={'gray'} />{'\n'}
                                AEON 50.000Đ chỉ với 5 phút làm khảo sát  </Text>

                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />
                <View style={styles.content}>
                    <View style={styles.content_left1}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right1}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="trash-outline" size={20} color={'gray'} />
                            GIẢM TÚI NHỰA - XÁCH TÚI XANH{'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="megaphone-outline" size={20} color={'green'} />
                                Chung tay bảo vệ môi trường cùng chương<Icon name="chevron-forward-outline" size={20} color={'gray'} />{'\n'}
                                trình NO PLASTIC DAY </Text>

                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />
                <View style={styles.content}>
                    <View style={styles.content_left1}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right1}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="alarm-outline" size={20} color={'red'} />
                            AEON CÓ NGHỈ LỄ, NHƯNG MÀ SAU 23H {'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="star-outline" size={20} color={'yellow'} />
                                Trong các ngày 31/8-3/9, bạn thân có thể <Icon name="chevron-forward-outline" size={20} color={'gray'} />{'\n'}
                                đến AEON vui chơi, tham quan và mua sắm      </Text>

                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />
                <View style={styles.content}>
                    <View style={styles.content_left1}>
                        <Icon name="calendar-outline" size={50} color={"#B31E8D"} />
                    </View>
                    <View style={styles.content_right1}>

                        <Text style={{ color: '#B31E8D' }}>
                            <Icon name="pencil-outline" size={20} color={'blue'} />
                            5P KHẢO SÁT TRÚNG VOUCHER 50K{'\n'}
                            <Text style={{ color: 'black' }}>
                                <Icon name="arrow-forward-circle-outline" size={20} color={'red'} />
                                Việc nhẹ quà to! Cơ hôi trúng VOUCHER  <Icon name="chevron-forward-outline" size={20} color={'gray'} />{'\n'}
                                AEON 50.000Đ chỉ với 5 phút làm khảo sát  </Text>

                        </Text>
                    </View>

                </View>
                <View style={styles.hr} />


            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffbbff"
    },
    content: {
        flexDirection: 'row',
    },
    content_left: {
        marginLeft: 30,
        marginTop: 20,
    },
    content_left1: {
        marginLeft: 30,
        marginTop: 10,
    },
    content_right: {
        marginLeft: 20,
        marginTop: 25,
    },
    content_right1: {
        marginLeft: 20,
        marginTop: 5,
    },
    hr: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        margin: 10,
    },
});
export default ThongBaoSuKien;