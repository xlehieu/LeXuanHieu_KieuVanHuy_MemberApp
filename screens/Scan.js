import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from './background/Background';
const Voucher = () => {
    
  return (
    <View style={styles.container}>
        <Background/>
        <View style={{position:'absolute',top:35}}>
          <Text style={{fontSize:16,fontWeight:'600',color:'#fff'}}>Tích lũy điểm thưởng EAON VN</Text>
        </View>
        <View style={styles.qrcode}>
            <Image source={ require('../assets/scan.jpg.png')} style={styles.imageQR} />
            <Text style={{marginTop:50}}>Quét QA để tích điểm khi thanh toán</Text>
            <View style={styles.hr}></View>
        </View>
        
            <Text style={{fontSize: 18,fontWeight:'bold',color:'#7D1E66',position:'absolute',top: 360,left: 15,}}> Các bước nhận ưu đãi</Text>
            <View style={styles.content}>
                <View style={styles.colum}>
                <View style={styles.border1}>
                    <View style={styles.border2}>
                          <Text style={styles.Text}>1</Text>
                    </View>
                </View>
              </View>
              <View style={styles.row}>
                  <Text  style={{color:'#A20E7D',fontSize:16,fontWeight:'bold'}}>Mua sắm</Text>
              </View>
           </View>
           <View style={styles.line1} />
           <View style={styles.content1}>
                <View style={styles.colum}>
                <View style={styles.border1}>
                    <View style={styles.border2}>
                          <Text style={styles.Text}>2</Text>
                    </View>
                </View>
              </View>
              <View style={styles.row}>
                  <Text  style={{color:'#A20E7D',fontSize:16,fontWeight:'bold'}}>Tỷ lệ tích điểm thưởng AEON VN</Text>
                  <Text style={{color:'#A20E7D', fontSize:11}}>10.000đ = 1 điểm thưởng AEON VN</Text>
              </View>
           </View>
           <View style={styles.line2} />
           <View style={styles.content2}>
                <View style={styles.colum}>
                <View style={styles.border1}>
                    <View style={styles.border2}>
                          <Text style={styles.Text}>3</Text>
                    </View>
                </View>
              </View>
              <View style={styles.row}>
                  <Text  style={{color:'#A20E7D',fontSize:16,fontWeight:'bold'}}>Đổi phiếu điểm thưởng </Text>
                  <Text style={{color:'#A20E7D', fontSize:11}}>300 điểm thưởng AEON VN = Phiếu điểm thưởng 30.000đ</Text>
              </View>
           </View>
           



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrcode:{
    position:'absolute',
    top: 110,
    width: 400,
    height: 180,
    backgroundColor:'#B31E8D',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor:'#A20E7D'
  },
  imageQR:{
    width: 396,
    height:100,
    alignSelf:'center',
    marginTop:45
  },
  hr:{
    marginTop: 10,
    width: '100%',
    borderBottomWidth:1.5,
    borderBottomColor: '#D6D0D0'
  },
  content:{
    position:'absolute',
    top: 400,
    left: 35,
    flexDirection:'row',
  },
  line1: {
    width: 2,
    height: '6%',
    backgroundColor: '#A20E7D',
    borderWidth: 1,
    borderColor:'white',
    borderStyle: 'dashed',
    position:'absolute',
    top: 453,
    left: 60
  },
  line2: {
    width: 2,
    height: '6%',
    backgroundColor: '#A20E7D',
    borderWidth: 1,
    borderColor:'white',
    borderStyle: 'dashed',
    position:'absolute',
    top: 552,
    left: 60
  },
  content1:{
    position:'absolute',
    top: 500,
    left: 35,
    flexDirection:'row',
  },
  content2:{
    position:'absolute',
    top: 600,
    left: 35,
    flexDirection:'row',
  },
  row:{
    marginHorizontal: 25,
    marginVertical: 15
  },
  Text:{
    alignSelf:'center',
    color:'white'
  },
  border2:{
    width: 40,
    height: 40,
    borderRadius:'50%',
    backgroundColor:'#A20E7D',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  border1:{
    borderWidth:1,
    width: 50,
    height: 50,
    borderColor:'#A20E7D',
    borderRadius:'50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});

export default Voucher;