import { View, Text, ScrollView, Image, Button, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ProductList } from '../memberAndProduct/ProductList';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../assets/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const GioHang = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const producList = ProductList();
    const [product, setProduct] = useState();
    const [total, setTotal] = useState(null);

    useEffect(() => {
        const unsubcribe = navigation.addListener('focus', () => {
            getProductById();
        })
        return unsubcribe;
    }, [navigation])

    const getProductById = async () => {
        let items = await AsyncStorage.getItem("cartItems");
        items = JSON.parse(items);
        let productData = [];
        if (items) {
            producList.forEach(data => {
                if (items.includes(data.id)) {
                    var count = 0;
                    for (let i = 0; i < items.length; i++) {
                        if (items[i] == data.id) {
                            count++;
                        }
                    }
                    productData.push({ sanpham: data, soluong: count });
                    return;
                }
            })
            setProduct(productData);
            getTotal(productData);
        }
        else {
            setProduct(false);
            getTotal(false);
        }
    }
    const getTotal = (productData) => {
        var tongTienThanhToan = 0;
            productData.forEach(sanPham => {
                tongTienThanhToan += sanPham.sanpham.price * sanPham.soluong;
            })
        setTotal(tongTienThanhToan);
    }

    const removeItemFromCart = async (id) => {
        let itemArray = await AsyncStorage.getItem("cartItems");
        itemArray = JSON.parse(itemArray);
        if (itemArray) {
            let array = itemArray;
            for (let index = 0; index < array.length; index++) {
                if (array[index] == id) {
                    array.splice(index, 1);
                }
                await AsyncStorage.setItem('cartItems', JSON.stringify(array));
                getProductById();
            }
        }
    }
    const addItem = async (id) => {
        try {
            let itemArray = await AsyncStorage.getItem("cartItems");
            itemArray = JSON.parse(itemArray);
            itemArray.push(id);
            itemArray = JSON.stringify(itemArray);
            await AsyncStorage.setItem("cartItems", itemArray);
            getProductById();
        }
        catch (err) {

        }
    }
    const minusItem = async (id) => {
        try {
            let itemArray = await AsyncStorage.getItem("cartItems");
            itemArray = JSON.parse(itemArray);
            for (let i = 0; i < itemArray.length; i++) {
                if (itemArray[i]==id) {
                    itemArray.splice(i, 1);
                    break;
                }
            }
            itemArray = JSON.stringify(itemArray);
            await AsyncStorage.setItem("cartItems", itemArray);
            getProductById();
        }
        catch (err) {

        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <ScrollView
                contentContainerStyle={{ alignItems: "center" }}
                style={{ width: '100%', marginVertical: 20 }}>
                {product ? product.map((item, index) => (
                    <View key={item.sanpham.id} style={{ marginBottom: 10, borderRadius: 8, padding: 8, backgroundColor: '#fff', width: '92%', height: 120, flexDirection: 'row', shadowColor: '#CCC3C3', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 4, shadowRadius: 3 }}>
                        <Image style={{ width: '25%', height: '100%', resizeMode: 'stretch' }} source={item.sanpham.productImage} />
                        <TouchableOpacity activeOpacity={0.4} onPress={() => removeItemFromCart(item.sanpham.id)} style={{ position: 'absolute', right: 10, top: 5 }}>
                            <Icon name='close' size={25} color={'#ccc'} />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'space-around', marginLeft: 5 }}>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: '300', color: COLORS.titleColor, width: 250 }}>{item.sanpham.productName}</Text>
                            <Text style={{ fontSize: 13, color: '#c1c1c1' }}>Đơn vị: {item.sanpham.donVi}</Text>
                            <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: "600" }}>{item.sanpham.price}₫</Text>
                        </View>
                        <View style={{ width: 75, borderColor: '#c2c2c2', justifyContent: 'space-around', height: 25, alignItems: "center", borderWidth: 1, borderRadius: 5, position: 'absolute', bottom: 5, right: 20, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => minusItem(item.sanpham.id)} activeOpacity={0.3}>
                                <Icon name='remove' size={20} color={'#000'} />
                            </TouchableOpacity>
                            <Text>
                                {item.soluong}
                            </Text>
                            <TouchableOpacity onPress={() => addItem(item.sanpham.id)} activeOpacity={0.3}>
                                <Icon name='add' size={20} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )) : null}
            </ScrollView>

            <View style={{ width: '100%', height: 160, shadowColor: '#D6CFCF', alignItems: 'center', borderBlockColor: '#ECEBEB', backgroundColor: '#fff', borderWidth: 1, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 10, shadowRadius: 10 }}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', width: '100%', height: 40, borderBottomColor: '#eee', borderBottomWidth: 0.5 }}>
                    <Text style={{fontSize:18,color:COLORS.titleColor,fontWeight:'600',marginLeft:20}}>Tổng:</Text>
                    <Text style={{fontSize:24,color:COLORS.primary,fontWeight:'500',marginRight:20}}>{total}₫</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '92%', marginTop: 10, justifyContent: 'space-between', paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="ticket-percent" size={26} color={COLORS.primary} />
                        <Text style={{ fontWeight: '300', paddingLeft: 8 }}>
                            Mã ưu đãi
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 3, borderColor: '#eee', borderWidth: 1, width: 150, height: 28, backgroundColor: '#F8F8F8', padding: 5 }}><Text style={{ color: '#c1c1c1', fontWeight: "400" }}>Chọn mã ưu đãi</Text></View>
                        <Icon name='chevron-forward' color={'#aaa'} size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderTopWidth: 0.5, width: "100%", flex: 1, borderTopColor: '#eee', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: COLORS.primary, width: '92%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default GioHang;
