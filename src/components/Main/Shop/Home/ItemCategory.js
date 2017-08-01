import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    imageBanner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cecbca',
    }
});

export default class extends Component {
   
    render() {
        return (
            <Image
                source={this.props.urlImages} style={styles.imageBanner}
            >
                <Text style={styles.title}> {this.props.children} </Text>
            </Image>
        );
    }
}
