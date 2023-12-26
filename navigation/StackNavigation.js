import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import LoginScreen from "../screens/LoginScreen";
import BottomNavigation from "./BottomNavigation";
import LandingScreen from '../screens/LandingScreen';
import SignUpScreen from "../screens/SignUpScreen";
import MemberShipScreen from "../screens/MemberShipScreen";
import KenhEaon from "../screens/KenhEaon";
import TopTabThongBao from "./TopTabThongBao";
import GioHang from "../screens/GioHang";
import { COLORS } from "../assets/constants";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Landing"
            >
                <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
                <Stack.Screen name='Landing' component={LandingScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='MemberShip' component={MemberShipScreen} />
                <Stack.Screen options={{
                    headerShown: true,
                    title: 'Thông báo',
                    headerStyle: {
                        backgroundColor: COLORS.headerBackGroundColor,
                    },
                    headerTitleAlign:'center',
                    headerTintColor: '#fff',
                    
                }}
                    name="ThongBao"
                    component={TopTabThongBao} />
                <Stack.Screen options={{
                    headerShown: true,
                    title: 'Kênh EAON',
                    headerStyle: {
                        backgroundColor: COLORS.headerBackGroundColor,
                    },
                    headerTitleAlign:'center',
                    headerTintColor: '#fff',
                    
                }}
                    name="KenhEaon"
                    component={KenhEaon} />
                    <Stack.Screen options={{
                    headerShown: true,
                    title: 'Giỏ hàng',
                    headerStyle: {
                        backgroundColor:COLORS.primary,
                    },
                    headerTitleAlign:'center',
                    headerTintColor: '#fff',
                    
                }}
                    name="GioHang"
                    component={GioHang} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;