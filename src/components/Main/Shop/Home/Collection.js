import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';
import EStyleSheet from 'react-native-extended-stylesheet';

const { height } = Dimensions.get('window');
const styles = EStyleSheet.create({
    wrapper: {
        height: height / 3.2,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    imageBanner: {
        width: '100%',
        height: '100%'
    },
    viewImage: {
        flex: 8,
    },
    textStyle: {
        fontSize: 15,
        color: '#d6d5d6',
    }

});
EStyleSheet.build();
export default class Collection extends Component {
    state = {}
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, padding: 5, paddingLeft: 0 }}>
                    <Text style={styles.textStyle}> {this.props.name}</Text>
                </View>
                <View style={styles.viewImage}>
                    <Image source={bannerImage} style={styles.imageBanner} />
                </View>
            </View>
        );
    }
}

