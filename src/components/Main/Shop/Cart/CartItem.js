import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import StylesAndroid from '../../../../Styles/StylesAndroid';


const styles = StylesAndroid.styleCart;
const { styleTxt, styleButton } = StylesAndroid;
class CartItem extends Component {
    render() {
        const { viewTop, viewBottom, viewImage, viewInfo, viewNumber, wrapper, imgStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={viewImage}>
                    <Image style={imgStyle} source={this.props.img} />
                </View>
                <View style={viewInfo}>
                    <View style={viewTop} >
                        <Text> San pham 1 </Text>
                        <TouchableOpacity>
                            <Text> X</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styleTxt.txtPrice}> 100$ </Text>
                    <View style={viewBottom}>
                        <View style={viewNumber}>
                            <TouchableOpacity>
                                <Text style={styleButton.buttonSmall}> + </Text>
                            </TouchableOpacity>
                            <Text> 3 </Text>
                            <TouchableOpacity>
                                <Text style={styleButton.buttonSmall}> - </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Text style={styleTxt.txtShow}> {'Show Details'.toUpperCase()} </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default CartItem;
