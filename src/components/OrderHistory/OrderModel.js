import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    order: {
        width: '90%',
        backgroundColor: 'white',
        margin: 10,
        padding: 5,
        borderRadius: 5,

    },
    txtId: {
        color: '#2aa18b'
    },
    txtTime: {
        color: '#f12b24'
    },
    txtStatus: {
        color: '#2aa18b'
    },
    txtTotal: {
        color: '#9e3b66',
        fontWeight: 'bold'
    }
});

export default class OrderModel extends Component {
    state = {}
    render() {
        return (
            <View style={styles.order} >
                <View style={styles.row}>
                    <Text> Order ID: </Text>
                    <Text style={styles.txtId}> {this.props.id} </Text>
                </View>
                <View style={styles.row}>
                    <Text> Order Time: </Text>
                    <Text style={styles.txtTime}> {this.props.time} </Text>
                </View>
                <View style={styles.row}>
                    <Text> Status: </Text>
                    <Text style={styles.txtStatus}> {this.props.status} </Text>
                </View>
                <View style={styles.row}>
                    <Text> Total: </Text>
                    <Text style={styles.txtTotal}> {this.props.total} </Text>
                </View>
            </View>
        );
    }
}
