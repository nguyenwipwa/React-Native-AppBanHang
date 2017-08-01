import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Product from './Model/Product';
import URL from '../../../URL';


import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const { height } = Dimensions.get('window');
const imageHeight = (height) * 0.3;
const styles = EStyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        flex: 1,
        borderRadius: 5,
        flexDirection: 'column'
    },
    tittle: {
        color: '#dad9da',
    },
    tittleContain: {
        height: height * 0.05,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'


    },
    producContainer: {
        width: '45%',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderRadius: 4,
        marginBottom: 5
    },
    productImage: {
        width: '100%',
        height: imageHeight,

    },
    productName: {
        marginLeft: 5
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#f12b24',
        marginLeft: 5,
        marginBottom: 5
    }

});
export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { topProduct } = this.props;
        const { URL_IMAGES } = URL;
        return (
            <View style={styles.container}>
                <View style={styles.tittleContain}>
                    <Text style={styles.tittle} >  TOP PRODUCT </Text>
                </View>
                <View style={styles.body}>
                    {topProduct.map(e => (
                        <Product
                            id={e.id}
                            key={e.id} navigator={this.props.navigator}
                            price={`${e.price}$`}
                            urlImage={{ uri: `${URL_IMAGES}${e.images[0]}` }}
                        > {e.name.toUpperCase()} </Product>
                    ))}
                </View>
            </View>
        );
    }
}
