import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, isSelected } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { images, icons, colors, fontSizes } from '../constants';
function UIHeader(props) {
    const{title} =props
    return <View style={{
        height: 60,
        backgroundColor: colors.primary,
    }}>
        <Text style={{
            color: 'white',
            fontSize: fontSizes.h2,
            alignSelf: 'center',
            lineHeight: 55,
        }}>{title}</Text>
    </View>
}
export default UIHeader