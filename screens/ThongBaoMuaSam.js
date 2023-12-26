import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ThongBaoMuaSam = () => {
   return (
      <View style={styles.container}>

         <View style={styles.Icon}>
            <Icon name='bell-o' size={150} color={'#B31E8D'} />
         </View>
         <View style={styles.Text}>
            <Text style={styles.text}>Kính chào quý khách!</Text>
         </View>
         <View>
            <Text style={{ margin: 40 }}>Hiện tại quý khách chưa có thông báo nào! Xin quý khách quay lại sau.</Text>
         </View>
      </View>
   )
};

const styles = StyleSheet.create({
   container: {
    flex:1,
      alignSelf: 'center'
   },
   Icon: {
      alignSelf: 'center',
      marginTop: 100
   },
   Text: {
      alignSelf: 'center'
   },
   text: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#B31E8D',
      marginTop: 30
   },
});



export default ThongBaoMuaSam;