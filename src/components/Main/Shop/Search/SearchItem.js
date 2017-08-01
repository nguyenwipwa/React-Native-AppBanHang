import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import StylesAndroid from '../../../../Styles/StylesAndroid';

const { stylesSearch } = StylesAndroid;

class CartItem extends Component {
    render() {
        return (
            <View style={stylesSearch.wrapper}>
                <View style={stylesSearch.productInfo}>
                    <View style={stylesSearch.viewImage}>
                        <Image style={stylesSearch.imageStyle} source={this.props.img} />
                    </View>
                    <View style={stylesSearch.viewInfo}>
                        <Text style={stylesSearch.txtName}> Nguyen Van Trong</Text>
                        <Text style={stylesSearch.textPrice}> 117$ </Text>
                        <Text style={stylesSearch.txtMaterial}> Mariter</Text>
                        <View style={stylesSearch.infoBottom}>
                            <Text> Color </Text>
                            <View style={stylesSearch.circleColor} />
                            <Text style={stylesSearch.txtShow}> {'Show detail'.toUpperCase()} </Text>
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

export default CartItem;
