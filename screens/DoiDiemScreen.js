import React, { useState } from 'react';
import { Text, StyleSheet, View,TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRoute } from '@react-navigation/native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../assets/constants';
const voucher30k = require('../assets/image/voucher30k.png');

const DoiDiemScreen = () => {
  const user = useRoute();
  const score = 300;
  const voucher = 0;
  const amountVoucher = parseInt(score / 300);
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={{ color: COLORS.primary, fontSize: 25, fontWeight: '600' }}>{score}</Text>
        <Text style={{ color: COLORS.titleColor, marginTop: 8, fontSize: 18 }}>Điểm</Text>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.sliderStyle}
            value={score}
            minimumValue={0}
            step={1}
            maximumValue={450}
            minimumTrackTintColor={COLORS.primary}
            thumbTintColor='transparent'
          />
          <View style={{height:10,width:1.5,backgroundColor:COLORS.titleColor,position:'absolute',left:204}}></View>
          <View style={styles.iconVoucherStyle} >
            <IconMaterial name='ticket-percent' size={19} color={COLORS.primary} />
          </View>
        </View>
        <Text style={styles.noteStyle}>Số voucher có thể đổi {amountVoucher}</Text>
        <Text style={styles.noteStyle}>{score} điểm sẽ hết hạn vào ngày 30/06/2024</Text>
      </View>
      <View style={{width:'100%', alignItems:'center',flex:1,justifyContent:'space-around'}}>
        <View style={styles.voucherContainerStyle}>
          <Image style={styles.voucherImageStyle} source={voucher30k} />
        </View>
        <Text style={styles.voucherNoteStyle}>Nhanh tay đổi voucher. Chỉ sau 30 phút, Bạn đã có thể sử dụng và trải nghiệm mua sắm  thỏa thích tại EAON</Text>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={{color:'#fff',fontSize:16}}>ĐỔI VOUCHER NGAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  infoContainer: {
    width: '100%',
    height:'28%',
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  sliderContainer: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  sliderStyle: {
    width: '90%'
  },
  iconVoucherStyle: {
    width: 26,
    height: 26,
    backgroundColor: '#FFD2F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  noteStyle: {
    color: COLORS.titleColor,
    lineHeight: 24,
    width: '85%'
  },
  voucherContainerStyle: {
    height: '65%',
    paddingVertical:12,
  },
  voucherImageStyle: {
    width: 360,
    height: 250,
    resizeMode: 'contain',
  },
  voucherNoteStyle:{
    marginTop:10,
    width:'85%',
    fontSize:15,
    textAlign:'center',
    fontWeight:'700',
    color:COLORS.titleColor
  },
  buttonStyle:{
    width:'85%',
    height:55,
    backgroundColor:COLORS.primary,
    borderRadius:6,
    shadowColor:'#ccc',
    shadowOpacity:1,
    shadowOffset:{width:0,height:6},
    shadowRadius:3,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:12,
  },
})
export default DoiDiemScreen;
