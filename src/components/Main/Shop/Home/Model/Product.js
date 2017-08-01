import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
export default class Product extends Component {
    gotoDetail(idProduct) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', idProduct });
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.gotoDetail(this.props.id)} style={styles.producContainer}>
                <Image source={this.props.urlImage} style={styles.productImage} />
                <Text style={styles.productName}> {this.props.children} </Text>
                <Text style={styles.price}> {this.props.price} </Text>
            </TouchableOpacity>
        );
    }
}
