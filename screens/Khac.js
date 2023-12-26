import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../assets/constants';
import { useNavigation } from '@react-navigation/native';
const Khac = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then(value => {
        if (value != null) {
          setName(value);
        }
      });
    }
    catch { }
  }
  const navigation = useNavigation();
  const logout = ()=>{
    async function clearItem(){
      try{
        AsyncStorage.clear();
        navigation.navigate("Landing");
      }
      catch(err){
        console.warn("Lỗi khi xóa");
      }
    }
    clearItem();
  }
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <View style={styles.iconAccount}>
          <Icon name='user-circle-o' size={60} />
        </View>
        <View style={styles.contentAccount}>
          <Text style={{ fontSize: 20 }}>{name.toUpperCase()}</Text>
          <Text>Xem thông tin tài khoản</Text>
        </View>
      </View>
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='map' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Đường tới AEON</Text>
        </View>
        <View style={styles.icon_check}>
          <Icon name='angle-right' size={20} />
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='eercast' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>AEON Channel</Text>
        </View>

      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='volume-control-phone' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Trợ giúp</Text>
        </View>
        <View style={styles.icon_check}>
          <Icon name='angle-right' size={20} />
        </View>

      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='list-alt' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Khảo sát</Text>
        </View>

      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='share-alt' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Mời bạn bè</Text>
        </View>

      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='address-book-o' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Thông tin pháp lý</Text>
        </View>

      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='asl-interpreting' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Những dịch vụ của AEON</Text>
        </View>
        <View style={styles.icon_check}>
          <Icon name='angle-right' size={20} />
        </View>

      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='history' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Lịch sử điểm</Text>
        </View>
        <View style={styles.icon_check}>
          <Icon name='angle-right' size={20} />
        </View>

      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='ticket' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Tích điểm mua sắm</Text>
        </View>
        <View style={styles.icon_check}>
          <Icon name='angle-right' size={20} />
        </View>

      </View>
      <View style={styles.hr} />
      <View style={styles.contentKhac}>
        <View style={styles.content_left}>
          <Icon name='history' size={25} color={"#B31E8D"} />
        </View>
        <View style={styles.content_right}>
          <Text style={{ fontSize: 16 }}>Lịch sử điểm mua sắm</Text>
        </View>
        <View style={styles.icon_check}>
          <Icon name='angle-right' size={20} />
        </View>
      </View>
      <View style={styles.hr} />
    <TouchableOpacity onPress={()=>logout()} style={{width:'90%',borderRadius:8,position:'absolute',alignSelf:'center',bottom:10,height:40,borderColor:'#ccc',justifyContent:'center',alignItems:'center',backgroundColor:COLORS.primary}}>
      <Text style={{color:'#fff',fontSize:16}}>ĐĂNG XUẤT</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  account: {
    flexDirection: 'row'
  },
  iconAccount: {
    marginHorizontal: 20,
    marginTop: 40
  },
  contentAccount: {
    marginTop: 50
  },
  contentKhac: {
    flexDirection: 'row',
    alignItems:'center'
  },
  content_left: {
    marginHorizontal: 30,
    marginTop: 10
  },
  content_right: {
    marginTop: 10
  },
  icon_check: {
    position:'absolute',
    right:20
  },
  hr: {
    marginTop: 15,
    width: '100%',
    borderBottomColor: "#D6D0D0",
    borderBottomWidth: 1.5,

  },
});

export default Khac;