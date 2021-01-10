import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
const ImageLogo = require('./assets/logo_black_white_lowres.gif');

export class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image
                    source={ImageLogo}
                    style={{
                        height:30,
                        width:30,
                        borderRadius: "50%",
                        transform:"rotate(-30deg)",
                        borderWidth:1,
                        borderColor:"red",
                        marginLeft: 20,
                    }}
                />
                <Text> Grocery-Gen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        position:"sticky",
        top:0,
        zIndex:1,
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        width: "100%",
        height: 40,
        backgroundColor:"white",
        marginBottom: 20,
        borderBottomWidth: 1,
    }
})

export default Header
