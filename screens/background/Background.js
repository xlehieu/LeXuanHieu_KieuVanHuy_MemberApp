import React from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'
import { COLORS } from '../../assets/constants'
const Background = () => {
    return (
        <View style={styles.main}>
            <View style={styles.bubbleLeft}></View>
            <View style={styles.bubbleRight}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        display: 'flex',
        width: 800,
        height: 800,
        borderRadius: 1000,
        backgroundColor: '#8A1970',
        position: 'absolute',
        top: -580,
        zIndex: 0,
        overflow:'hidden',
    },
    bubbleLeft:{
        width:400,
        height:400,
        borderRadius:400,
        backgroundColor:'#94227a',
        position:'absolute',
        bottom:-180,
        left:-30,
    },
    bubbleRight:{
        width:600,
        height:600,
        borderRadius:600,
        backgroundColor:'#7c286c',
        position:'absolute',
        bottom:-90,
        right:-200,
    }
})
export default Background;
