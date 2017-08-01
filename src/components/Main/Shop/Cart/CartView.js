import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import CartItem from './CartItem';
import StylesAndroid from '../../../../Styles/StylesAndroid';
import sp1 from '../../../../media/temp/sp1.jpeg';

const styles = StylesAndroid.styleCart;
const { styleButton, styleTxt } = StylesAndroid;
class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', }}>
                    <CartItem img={sp1} />
                    <CartItem img={sp1} />
                    <CartItem img={sp1} />
                    <CartItem img={sp1} />
                </ScrollView>
                <TouchableOpacity style={styleButton.buttonDisplay}>
                    <Text style={[styleTxt.txtWhite, styleTxt.txtBold]}> TỔNG TIỀN: 1000$ </Text>
                    <Text style={[styleTxt.txtWhite, styleTxt.txtBold]}>THANH TOÁN NGAY</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Cart;
