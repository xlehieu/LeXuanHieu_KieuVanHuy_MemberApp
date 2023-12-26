import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../assets/constants";
import { Text} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAweSome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from "@react-navigation/native";
//screens
import HomeScreen from "../screens/HomeScreen";
import MuaSam from "../screens/MuaSam";
import Scan from '../screens/Scan';
import Voucher from "../navigation/TopTabNavigation";
import Khac from '../screens/Khac';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const sizeIcon = 26;
    const route = useRoute();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Ionicons name={focused ? 'home' : 'home-outline'} size={sizeIcon} color={focused ? COLORS.primary : COLORS.inactiveColor} />)
                    },
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? COLORS.primary : COLORS.inactiveColor, fontSize: 13, fontWeight: "600" }}>Home</Text>
                    },
                }}
            />
            <Tab.Screen name='MuaSam' component={MuaSam}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Ionicons name={focused ? 'cart' : 'cart-outline'} size={sizeIcon} color={focused ? COLORS.primary : COLORS.inactiveColor} />)
                    },
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? COLORS.primary : COLORS.inactiveColor, fontSize: 13, fontWeight: "600" }}>Mua sắm</Text>
                    },
                }}
            />
            <Tab.Screen name="Scan" component={Scan}
                options={{
                    title: "",
                    tabBarIconStyle: {
                        backgroundColor: '#B31E8D',
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        position: 'absolute',
                        top: 0
                    },
                    tabBarIcon: () => {
                        return <IconFontAweSome name={'barcode'}
                            color={'#fff'} size={sizeIcon} />
                    }
                }} />
            <Tab.Screen name='Voucher' component={Voucher}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        color: COLORS.primary,
                    },
                    headerStyle: {
                        borderRadius: 20,
                        shadowColor: '#ccc',
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 3,
                        shadowRadius: 5,
                    },
                    tabBarIcon: ({ focused }) => {
                        return <IconMaterial name={focused ? 'ticket-percent' : 'ticket-percent-outline'} size={sizeIcon} color={focused ? COLORS.primary : COLORS.inactiveColor} />
                    },
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? COLORS.primary : COLORS.inactiveColor, fontSize: 13, fontWeight: "600" }}>Voucher</Text>
                    },
                }}
               
            />
            <Tab.Screen name='Khac' component={Khac}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Ionicons name={focused ? 'menu' : 'menu-outline'} size={sizeIcon} color={focused ? COLORS.primary : COLORS.inactiveColor} />)
                    },
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? COLORS.primary : COLORS.inactiveColor, fontSize: 13, fontWeight: "600" }}>Khác</Text>
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;
//