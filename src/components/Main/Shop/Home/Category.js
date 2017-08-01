import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swiper from 'react-native-swiper';
import ItemCategory from './ItemCategory';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';
import URL from '../../../URL';


const { height, width } = Dimensions.get('window');
const imageWitdh = width;
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'

    },
    viewImage: {
        flex: 8,
        justifyContent: 'flex-end'
    },
    textStyle: {
        fontSize: 15,
        color: '#d6d5d6',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cecbca',
    }

});
EStyleSheet.build();
export default class Category extends Component {
    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { navigator, types } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, padding: 5, paddingLeft: 0 }}>
                    <Text style={styles.textStyle}> {this.props.children}</Text>
                </View>
                <View style={styles.viewImage} >
                    <Swiper
                        autoplay
                        autoplayTimeout={2.5}
                        showsPagination
                        width={imageWitdh - 40} height={height / 4}
                    >
                        {types.map(e => (
                            <TouchableOpacity
                                key={e.id}
                                onPress={this.gotoListProduct.bind(this)}
                                style={{ height: height / 4, width: imageWitdh - 40 }}
                            >
                                <ItemCategory
                                    navigator={navigator} urlImages={littleIcon}
                                >
                                    {e.id}
                                </ItemCategory>
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                </View>
            </View >
        );
    }
}

