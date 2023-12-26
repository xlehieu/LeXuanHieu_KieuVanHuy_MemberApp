import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text} from 'react-native';
import { COLORS } from '../assets/constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import ThongBaoSuKien from '../screens/ThongBaoSuKien';
import ThongBaoMuaSam from '../screens/ThongBaoMuaSam';
const TopTab = createMaterialTopTabNavigator();

const TopTabThongBao =()=> {
    return (
        <TopTab.Navigator
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
            <TopTab.Screen name='ThongBaoSuKien'
            options={{
                tabBarLabel:({focused})=>{
                    return <Text style={{color:focused?COLORS.titleColor:COLORS.inactiveColor, fontSize:15,textAlign:'center',width:90, fontWeight:"500"}}>Sự kiện</Text>
                },
            }}
            component={ThongBaoSuKien}/>
            <TopTab.Screen name='ThongBaoMuaSam'
            options={{
                tabBarLabel:({focused})=>{
                    return <Text style={{color:focused?COLORS.titleColor:COLORS.inactiveColor, fontSize:15,textAlign:'center',width:80, fontWeight:"500"}}>Mua sắm</Text>
                },
            }}
            component={ThongBaoMuaSam}/>
        </TopTab.Navigator>
    )
}

export default TopTabThongBao;




