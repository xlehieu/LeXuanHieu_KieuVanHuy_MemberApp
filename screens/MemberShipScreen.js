import React from 'react'
import { Text,StyleSheet,TextInput,Keyboard,View,ImageBackground,TouchableWithoutFeedback, Image,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../assets/constants";
import { useNavigation } from '@react-navigation/native';
//image
const backgroundImage = require('../assets/image/background-image2.jpg');
const eaonLogoMember = require('../assets/image/eaon-member.png');

const MemberShip = () => {
    const navigation = useNavigation();
    const goBackLandingScreen = ()=>{
        navigation.goBack();
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground source={backgroundImage} style={styles.mainContainer}>
            <TouchableOpacity onPress={goBackLandingScreen} style={styles.buttonBackStyle}>
                    <Ionicons name="chevron-back" color={"#fff"} size={30} />
                </TouchableOpacity>
                <Image source={eaonLogoMember} style={styles.logoMemberStyle}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.signUpMemberText}>Xin Chào,</Text>
                    <Text style={styles.remindText}>Bạn vui lòng nhập số điện thoại để kích hoạt tài khoản với EAON</Text>
                    <TextInput keyboardType="numeric" style={styles.textInputStyle} placeholder="Số điện thoại" placeholderTextColor={"#fff"} />
                    <TouchableOpacity style={styles.buttonContinueStyle}>
                        <Text style={styles.titleButtonStyle}>TIẾP TỤC</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logoMemberStyle:{
        position:'absolute',
        top: 40,
        width:120,
        height:70,
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
        marginBottom:30,
        width:'93%',
        alignSelf:'center',
    },
    infoContainer:{
        backgroundColor:COLORS.primary,
        paddingHorizontal:15,
        paddingVertical:20,
        borderRadius:8,
        width:'100%',
        marginBottom:100,
    },
    signUpMemberText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'600',
        paddingBottom:8,
    },
    remindText:{
        color: '#fff',
        fontSize:13,
        paddingBottom:30,
        width:'90%',
        lineHeight:21
    },
    buttonContinueStyle:{
        backgroundColor:COLORS.loginBackgroundButton,
        height:45,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        width:'93%',
        alignSelf:'center'
    },
    titleButtonStyle:{
        color:'#fff',
        fontWeight:'500',
        fontSize:15,
    },
});
export default MemberShip;
