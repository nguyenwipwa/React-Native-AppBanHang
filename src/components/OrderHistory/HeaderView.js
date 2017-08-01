import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import StylesAndroid from '../../Styles/StylesAndroid';

const styleHeader = StylesAndroid.style1;

export default class HeaderView extends Component {
    buttonLeft() {
        const { clickLeft } = this.props;
        clickLeft();
    }
    buttonRight() {
        const { clickRight } = this.props;
        clickRight();
    }
    render() {
        return (
            <View style={styleHeader.header}>
                <TouchableOpacity onPress={this.buttonLeft.bind(this)}>
                    <Image source={this.props.imgLeft} style={styleHeader.iconStyle} />
                </TouchableOpacity>
                <Text style={{ color: 'white' }}> {this.props.children}</Text>
                <TouchableOpacity onPress={this.buttonRight.bind(this)}>
                    <Image source={this.props.imgRight} style={styleHeader.iconStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}
