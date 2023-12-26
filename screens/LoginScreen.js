import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Alert, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../assets/constants";
import { useNavigation } from "@react-navigation/native";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const backgroundImage = require('../assets/image/background-image.jpg');
const eaonLogoMember = require('../assets/image/eaon-member.png');

const Login = () => {
    const navigation = useNavigation();
    const goBackLandingScreen = () => {
        navigation.goBack();
    };
    function checkInfo(phone) {
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return regex.test(phone) ? true : false
    }
    useEffect(()=>{
        const checkLogin = async ()=>{
            try{
                const name = await AsyncStorage.getItem("UserName");
                if(name){
                    navigation.replace("BottomNavigation");
                }
            }
            catch(err){
                console.error(err);
            }
        }
        checkLogin();
    },[]);
    const handleLogin = (phone) => {
        if (checkInfo(phone)) {
            const user = {
                phone: phone,
                password: password,
            }
            console.log(user);
            const tail = '190';
            axios.post('http://192.168.1.' + tail + ':8000/login', user).then((response) => {
                try {
                    async function setData() {
                        try {
                            const data = response.data.user;
                            await AsyncStorage.setItem("UserName",data.name);
                            navigation.replace("BottomNavigation");
                        }
                        catch (err) {
                            console.warn(err);
                        }
                    }
                    setData();
                }
                catch (err) {
                    console.error(err);
                }
            })
                .catch((response) => {
                    console.log("Lỗi: ", response);
                    Alert.alert("Lỗi", "Số điện thoại hoặc mật khẩu không đúng");
                })
        }
        else {
            Alert.alert("Lỗi", "Số điện thoại không hợp lệ");
        }
    }
    const [phone, setphone] = useState('');
    const [password, setPassword] = useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground source={backgroundImage} style={styles.mainContainer}>
                <TouchableOpacity onPress={goBackLandingScreen} style={styles.buttonBackStyle}>
                    <Ionicons name="chevron-back" color={"#fff"} size={30} />
                </TouchableOpacity>
                <Image style={styles.logoMemberStyle} source={eaonLogoMember} />
                <View style={styles.infoContainer}>
                    <TextInput value={phone} onChangeText={text => setphone(text)} keyboardType="numeric" style={styles.textInputStyle} placeholder="Số điện thoại" placeholderTextColor={"#fff"} />
                    <TextInput value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} style={styles.textInputStyle} placeholder="Mật khẩu" placeholderTextColor={"#fff"} />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => handleLogin(phone)} style={styles.buttonLoginStyle}>
                        <Text style={styles.titleButtonStyle}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.forgotText}>
                        <Text style={styles.forgotText}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}
export default Login;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        backgroundColor: 'black',
        width: 100,
        color: '#fff'
    },
    logoMemberStyle: {
        position: 'absolute',
        top: 40,
        width: 120,
        resizeMode: 'contain',
        height: 70,
        zIndex: 0,
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
    },
    infoContainer: {
        width: '90%',
        borderRadius: 8,
        backgroundColor: COLORS.loginBackgroundButton,
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 20,
        rowGap: 22,
    },
    buttonLoginStyle: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#fff',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleButtonStyle: {
        color: '#fff',
        fontWeight: '600',
    },
    forgotText: {
        alignSelf: 'center',
        color: '#fff'
    },
});
