import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text} from 'react-native';
import { COLORS } from '../assets/constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DoiDiemScreen from '../screens/DoiDiemScreen';
import VoucherDiemScreen from '../screens/VoucherDoiDiem';
import VoucherQuaScreen from '../screens/VoucherDoiQua';
const Top = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    const user = useRoute();
    return (
        <Top.Navigator
            screenOptions={{
                swipeEnabled:false,
                tabBarLabelStyle:{
                },
                tabBarIndicatorContainerStyle:{
                    backgroundColor:'#FBFBFB'
                },
                tabBarIndicatorStyle:{
                    backgroundColor:COLORS.primary,
                },
            }}
        >
            <Top.Screen name='DoiDiemScreen'
            options={{
                tabBarLabel:({focused})=>{
                    return <Text style={{color:focused?COLORS.titleColor:COLORS.inactiveColor, fontSize:15,textAlign:'center',width:90, fontWeight:"500"}}>Đổi điểm thành viên</Text>
                },
            }}
            component={DoiDiemScreen}/>
            <Top.Screen name='VoucherDoiQua'
            options={{
                tabBarLabel:({focused})=>{
                    return <Text style={{color:focused?COLORS.titleColor:COLORS.inactiveColor, fontSize:15,textAlign:'center',width:80, fontWeight:"500"}}>Voucher đổi điểm</Text>
                },
            }}
            component={VoucherDiemScreen}/>
            <Top.Screen name='VoucherDoiDiem'
            options={{
                tabBarLabel:({focused})=>{
                    return <Text style={{color:focused?COLORS.titleColor:COLORS.inactiveColor, fontSize:15,textAlign:'center',width:80, fontWeight:"500"}}>Voucher đổi quà</Text>
                },
            }}
            component={VoucherQuaScreen}/>
        </Top.Navigator>
    )
}

export default TopTabNavigation;
