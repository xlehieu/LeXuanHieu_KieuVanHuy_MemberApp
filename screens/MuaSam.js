import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, FlatList, Alert, ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Background from "./background/Background";
import { COLORS } from "../assets/constants";
import { ProductList } from "../memberAndProduct/ProductList";
import { useNavigation } from "@react-navigation/native";
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from "@react-native-async-storage/async-storage";
const MuaSam = () => {
  const navigation = useNavigation();
  function goToGioHang() {
    navigation.navigate("GioHang", product);
  }
  const [productList, setProductList] = useState(ProductList());
  const likeHandle = (idItem) => {
    const setIslike = productList.map((product) => {
      if (product.id == idItem) {
        product.isLike = !product.isLike;
      }
      return product;
    })
    setProductList(setIslike)
  }
  var product = ["0"];
  function addProduct(id) {
    try {
      product.push(id);
      Alert.alert("Thông báo", "Thêm vào giỏ hàng thành công");
    }
    catch {
      alert("Lỗi");
    }
  }
  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        Alert.alert("Thông báo", "Thêm vào giỏ hàng thành công");
      }
      catch (err) {
        Alert.alert("Lỗi", "Thêm vào giỏ hàng không thành công");
      }
    }
    else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems",JSON.stringify(array));
        Alert.alert("Thông báo", "Thêm vào giỏ hàng thành công");
      }
      catch (err) {
        Alert.alert("Lỗi", "Thêm vào giỏ hàng không thành công");
      }
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>
        <Background />
        <View style={{ alignItems: 'center', marginTop: 18, width: '100%' }}>
          <Text style={{ textAlign: 'center', marginTop: 12, fontSize: 17, color: '#fff', fontWeight: '500' }} >EAON Long Biên</Text>
          <TouchableOpacity onPress={() => goToGioHang()} style={{ position: 'absolute', right: 20, top: 10 }} >
            <IconFontAwesome name="shopping-basket" size={23} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{ width: '90%', padding: 8, paddingBottom: 28, marginTop: 20, borderRadius: 8, borderColor: '#732663', borderWidth: 1 }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Giao hàng tới</Text>
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: "300", marginTop: 6 }}>Bạn chưa có địa chỉ giao hàng</Text>
          <Icon style={{ position: 'absolute', top: 22, right: 8 }} size={30} color={'#fff'} name="chevron-forward-sharp" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', paddingVertical: 20, backgroundColor: '#fff', marginTop: 15, borderRadius: 10, shadowColor: '#CCC3C3', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 4, shadowRadius: 3 }}>
          <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center' }}>
            <Icon name="search" color={COLORS.primary} size={50} />
            <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.titleColor }}>Tìm kiếm</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center' }}>
            <Icon name="grid-outline" color={COLORS.primary} size={50} />
            <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.titleColor }}>Danh mục</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center' }}>
            <Icon name="heart-outline" color={COLORS.primary} size={50} />
            <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.titleColor }}>Yêu thích</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center' }}>
            <Icon name="receipt-outline" color={COLORS.primary} size={50} />
            <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.titleColor }}>Đơn hàng</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ width: '90%', fontSize: 17, fontWeight: "500", color: COLORS.titleColor, marginTop: 30 }}>Cẩm nang mua sắm</Text>
        <TouchableOpacity activeOpacity={0.8} style={{ width: "90%", alignItems: 'center', backgroundColor: '#fff', height: 370, borderRadius: 8, marginTop: 20, shadowColor: '#CCC3C3', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 4, shadowRadius: 3 }}>
          <Image source={require('../assets/camnangmuasam.jpg')} style={{ width: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: 'hidden', resizeMode: 'stretch', height: 300 }} />
          <Text style={{ fontSize: 15, color: COLORS.titleColor, fontWeight: '500', textAlign: 'center', marginTop: 10 }}>[Cẩm nang mua sắm số 201] - Miền Bắc</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{ width: "95%", marginTop: 10, fontSize: 13 }}>Chào mừng Tết Nguyên Đán EAON mang đến cho quý khách những món quà thật tuyệt vời</Text>
        </TouchableOpacity>
        <View style={{ width: '90%', flexDirection: "row", marginTop: 30, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 17, fontWeight: "500", color: COLORS.titleColor }}>Top sản phẩm bán chạy</Text>
          <TouchableOpacity><Text style={{ color: COLORS.titleColor, fontWeight: '500' }}>Xem tất cả</Text></TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 20, paddingBottom: 12, marginTop: 20 }}
          data={productList}
          renderItem={({ item }) => (
            <View style={{ borderRadius: 8, padding: 8, backgroundColor: '#fff', height: 315, width: 170, marginRight: 12, shadowColor: '#CCC3C3', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 4, shadowRadius: 3 }}>
              <TouchableOpacity style={{ position: 'absolute', top: 5, left: 5, zIndex: 10 }} onPress={() => likeHandle(item.id)}>
                <Icon name={item.isLike ? 'heart' : 'heart-outline'} color={item.isLike ? 'red' : "#c1c1c1"} size={30} />
              </TouchableOpacity>
              <Image style={{ width: '100%', height: 180, resizeMode: 'stretch' }} source={item.productImage} />
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: '300', color: COLORS.titleColor }}>{item.productName}</Text>
                <Text style={{ fontSize: 13, color: '#c1c1c1', marginTop: 5 }}>Đơn vị: {item.donVi}</Text>
                <Text style={{ fontSize: 16, marginBottom: 5, color: COLORS.primary, marginTop: 5, fontWeight: "600" }}>{item.price}₫</Text>
              </View>
              <TouchableOpacity onPress={() => addToCart(item.id)} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary, padding: 5, borderRadius: 5 }}><Text style={{ color: '#fff', fontWeight: '300' }}>Thêm vào giỏ</Text></TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity activeOpacity={0.7} style={{ width: '85%', marginBottom: 15, marginTop: 20, height: 35, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            XEM THÊM DANH MỤC KHÁC
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default MuaSam;