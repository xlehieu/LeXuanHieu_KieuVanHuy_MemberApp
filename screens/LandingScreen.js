import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { COLORS } from "../assets/constants";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//image
const backgroundImage = require('../assets/image/background-image.jpg');
const logo = require('../assets/image/eaon-logo.png');
const eaonLogoMember = require('../assets/image/eaon-member.png');


const LandingScreen = () => {
    const navigation = useNavigation();
    const [name,setName]= useState('');
    const goToLoginScreen=()=>{
        navigation.navigate('Login');
    }
    const goToSignUpScreen = ()=>{
        navigation.navigate('SignUp');
    }
    const goToMemberShipScreen=()=>{
        navigation.navigate('MemberShip');
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
    return (
        <ImageBackground source={backgroundImage} style={styles.mainContainer}>
            <Image source={logo} style={styles.logoStyle} />
            <Image source={eaonLogoMember} style={styles.logoMemberStyle} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.7} onPress={goToLoginScreen} style={styles.buttonStyle}>
                    <Text style={styles.titleButtonStyle}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={goToSignUpScreen} style={styles.buttonStyle}>
                    <Text style={styles.titleButtonStyle}>Đăng ký thành viên mới</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={goToMemberShipScreen} style={styles.buttonStyle}>
                    <Text style={styles.titleButtonStyle}>Bạn đã có thẻ thành viên</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyle: {
        position: 'absolute',
        width: 100,
        height: 30,
        resizeMode: 'contain',
        left: 20,
        top: 50,
    },
    logoMemberStyle: {
        position: 'absolute',
        width: 100,
        height: 60,
        resizeMode: 'contain',
        right: 20,
        top: 50,
    },
    buttonContainer: {
        width: '90%',
        borderRadius: 8,
        backgroundColor: COLORS.loginBackgroundButton,
        paddingVertical: 20,
        paddingHorizontal: 15,
        rowGap:22,
    },
    buttonStyle: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#fff',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleButtonStyle: {
        color: '#fff',
        fontWeight: '600',
    },
});
export default LandingScreen;
