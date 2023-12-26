import React, { useState } from 'react'
import { Text, StyleSheet, TextInput, Keyboard, View, ImageBackground, TouchableWithoutFeedback, Image, TouchableOpacity, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../assets/constants";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
//image
const backgroundImage = require('../assets/image/background-image2.jpg');
const eaonLogoMember = require('../assets/image/eaon-member.png');

const SignUp = () => {
    const navigation = useNavigation();
    const goBackLandingScreen = () => {
        navigation.goBack();
    }
    function checkInfo(phone) {
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return regex.test(phone) ? true : false
    }
    function checkPassword(password, passwordagain) {
        if (password == passwordagain)
            return true;
    }
    const [phone, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordagain, setPasswordagain] = useState('');

    const handleRegister = (phone) => {
        if (checkInfo(phone) && checkPassword(password, passwordagain)) {
            const user = {
                name:name,
                phone: phone,
                password: password,
            }
            axios.post('http://192.168.1.190:8000/register', user).then((response) => {
                console.log(response);
                Alert.alert('Đăng ký thành công');
                navigation.replace('BottomNavigation', {name:name, phone: phone })
                setPhoneNumber('');
                setName('');
                setPassword('');
            }).catch((err) => {
                Alert.alert("Đăng ký bị lỗi" + err);
                console.log("Lỗi: ", err);
            })
        }
        else {
            Alert.alert("Đăng ký không thành công", "Số điện thoại phải đủ 10 số và mật khẩu và nhập lại mật khẩu phải giống nhau")
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground source={backgroundImage} style={styles.mainContainer}>
                <TouchableOpacity onPress={goBackLandingScreen} style={styles.buttonBackStyle}>
                    <Ionicons name="chevron-back" color={"#fff"} size={30} />
                </TouchableOpacity>
                <Image source={eaonLogoMember} style={styles.logoMemberStyle} />
                <View style={styles.infoContainer}>
                    <Text style={styles.signUpMemberText}>Đăng ký thành viên mới </Text>
                    <Text style={styles.remindText}>Bạn vui lòng nhập thông tin cá nhân để đăng ký tài khoản</Text>
                    <View style={{ backgroundColor: COLORS.loginBackgroundButton, paddingVertical: 25, borderRadius: 8 }}>
                        <TextInput value={phone} onChangeText={value => setPhoneNumber(value)} keyboardType='numeric' style={styles.textInputStyle} placeholder="Số điện thoại" placeholderTextColor={"#fff"} />
                        <TextInput value={name} onChangeText={value => setName(value)} style={styles.textInputStyle} placeholder="Họ và tên" placeholderTextColor={"#fff"} />
                        <TextInput value={password} onChangeText={value => setPassword(value)} secureTextEntry={true} style={styles.textInputStyle} placeholder="Mật khẩu" placeholderTextColor={"#fff"} />
                        <TextInput value={passwordagain} onChangeText={value => setPasswordagain(value)} secureTextEntry={true} style={styles.textInputStyle} placeholder="Nhập lại mật khẩu" placeholderTextColor={"#fff"} />
                        <TouchableOpacity onPress={()=>handleRegister(phone)} style={styles.buttonContinueStyle}>
                            <Text style={styles.titleButtonStyle}>ĐĂNG KÝ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoMemberStyle: {
        position: 'absolute',
        top: 40,
        width: 120,
        height: 70,
    },
    buttonBackStyle: {
        position: 'absolute',
        top: 30,
        left: 20,
    },
    textInputStyle: {
        borderColor: "#fff",
        borderBottomWidth: 1,
        color: "#fff",
        paddingBottom: 3,
        fontSize: 15,
        marginBottom: 30,
        width: '90%',
        alignSelf: 'center',
    },
    infoContainer: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 8,
        width: '100%',
        marginBottom: 100,
    },
    signUpMemberText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        paddingBottom: 8,
    },
    remindText: {
        color: '#fff',
        fontSize: 13,
        paddingBottom: 30,
    },
    buttonContinueStyle: {
        borderWidth: 1,
        borderColor: '#fff',
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    titleButtonStyle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500'
    },
});
export default SignUp;
