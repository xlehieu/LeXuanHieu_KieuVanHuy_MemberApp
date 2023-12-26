import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Linking } from 'react-native'
const KenhEaon = () => {
    const [urlFacebook] = useState([
        {
            url: 'https://www.facebook.com/lexuan.hieu.92167',
            name: 'Lê Xuân Hiếu',
        },
        {
            url: 'https://www.facebook.com/profile.php?id=100033398445895&mibextid=LQQJ4d',
            name: 'Kiều Văn Huy',
        }
    ])
    const [urlInstagram] = useState([
        {
            url: 'https://www.instagram.com/lxhhhieu/',
            name: 'Lê Xuân Hiếu '
        },
        {
            url:'https://www.instagram.com/key.ver_h',
            name:'Kiều Văn Huy'
        }
    ])
    const openFacebook = (name) => {
        urlFacebook.map((item) => {
            if (item.name == name) {
                Linking.openURL(item.url).catch((err) => alert("Error: " + err));
            }
        })
    }
    const openInstagram = (name) => {
        urlInstagram.map((item) => {
            if (item.name == name) {
                Linking.openURL(item.url).catch((err) => alert("Error: " + err));
            }
        })
    }
    return (
        <View style={styles.container}>
            {urlFacebook.map((item) => {
                return <TouchableOpacity key={item.name}
                    activeOpacity={0.8}
                    onPress={() => openFacebook(item.name)}
                    style={[styles.buttonContainerStyle, { backgroundColor: '#0766ff' }]}>
                    <View style={styles.buttonViewStyle}>
                        <Image style={styles.logoImage} source={require('../assets/image/Facebook_Logo.png')} />
                        <Text style={styles.titleStyle}>Đến Facebook của {item.name}</Text>
                    </View>
                </TouchableOpacity>
            })}
            {urlInstagram.map((item) => {
                return <TouchableOpacity key={item.name}
                    activeOpacity={0.8}
                    onPress={() => openInstagram(item.name)}
                    style={[styles.buttonContainerStyle, { backgroundColor: '#AA1Ae3' }]}>
                    <View style={styles.buttonViewStyle}>
                        <Image style={styles.logoImage} source={require('../assets/image/Instagram_Logo.png')} />
                        <Text style={styles.titleStyle}>Đến Facebook của {item.name}</Text>
                    </View>
                </TouchableOpacity>
            })}
        </View>
    )
}
export default KenhEaon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonContainerStyle: {
        marginTop: 20,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 10
    },
    logoImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    titleStyle: {
        alignSelf: 'center',
        flex: 1,
        textAlign: 'center',
        color: '#fff'
    }
})