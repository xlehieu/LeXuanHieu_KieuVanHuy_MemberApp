import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

const VoucherQuaScreen =()=>{
    return (
      <View style={{flex:1,alignItems:'center'}}>
      <Image style={{width:'88%',resizeMode:'contain'}} source={require('../assets/image/voucher30k.png')} />
    </View>
    )
}
export default VoucherQuaScreen;
