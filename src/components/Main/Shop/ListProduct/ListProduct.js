import React, { Component } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import sp1 from '../../../../media/temp/sp1.jpeg';

import backIcon from '../../../../media/appIcon/backList.png';

const { height } = Dimensions.get('window');
export default class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backIcon}
                        onPress={this.goBack.bind(this)}
                    >
                        <Image
                            style={styles.backSytle}
                            source={backIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}> Shop </Text>
                    <View style={styles.both} />
                </View>
                <ScrollView style={styles.wrapper}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.productInfo}>
                            <View style={styles.viewImage}>
                                <Image style={styles.imageStyle} source={sp1} />
                            </View>
                            <View style={styles.viewInfo}>
                                <Text style={styles.txtName}> Nguyen Van Trong</Text>
                                <Text style={styles.textPrice}> 117$ </Text>
                                <Text style={styles.txtMaterial}> Mariter</Text>
                                <View style={styles.infoBottom}>
                                    <Text> Color </Text>
                                    <View style={styles.circleColor} />
                                    <Text style={styles.txtShow}> {'Color 1'.toUpperCase()} </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productInfo}>
                            <View style={styles.viewImage}>
                                <Image style={styles.imageStyle} source={sp1} />
                            </View>
                            <View style={styles.viewInfo}>
                                <Text style={styles.txtName}> Nguyen Van Trong</Text>
                                <Text style={styles.textPrice}> 117$ </Text>
                                <Text style={styles.txtMaterial}> Mariter</Text>
                                <View style={styles.infoBottom}>
                                    <Text> Color </Text>
                                    <View style={styles.circleColor} />
                                    <Text style={styles.txtShow}> {'Color 1'.toUpperCase()} </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productInfo}>
                            <View style={styles.viewImage}>
                                <Image style={styles.imageStyle} source={sp1} />
                            </View>
                            <View style={styles.viewInfo}>
                                <Text style={styles.txtName}> Nguyen Van Trong</Text>
                                <Text style={styles.textPrice}> 117$ </Text>
                                <Text style={styles.txtMaterial}> Mariter</Text>
                                <View style={styles.infoBottom}>
                                    <Text> Color </Text>
                                    <View style={styles.circleColor} />
                                    <Text style={styles.txtShow}> {'Color 1'.toUpperCase()} </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productInfo}>
                            <View style={styles.viewImage}>
                                <Image style={styles.imageStyle} source={sp1} />
                            </View>
                            <View style={styles.viewInfo}>
                                <Text style={styles.txtName}> Nguyen Van Trong</Text>
                                <Text style={styles.textPrice}> 117$ </Text>
                                <Text style={styles.txtMaterial}> Mariter</Text>
                                <View style={styles.infoBottom}>
                                    <Text> Color </Text>
                                    <View style={styles.circleColor} />
                                    <Text style={styles.txtShow}> {'Color 1'.toUpperCase()} </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productInfo}>
                            <View style={styles.viewImage}>
                                <Image style={styles.imageStyle} source={sp1} />
                            </View>
                            <View style={styles.viewInfo}>
                                <Text style={styles.txtName}> Nguyen Van Trong</Text>
                                <Text style={styles.textPrice}> 117$ </Text>
                                <Text style={styles.txtMaterial}> Mariter</Text>
                                <View style={styles.infoBottom}>
                                    <Text> Color </Text>
                                    <View style={styles.circleColor} />
                                    <Text style={styles.txtShow}> {'Color 1'.toUpperCase()} </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productInfo}>
                            <View style={styles.viewImage}>
                                <Image style={styles.imageStyle} source={sp1} />
                            </View>
                            <View style={styles.viewInfo}>
                                <Text style={styles.txtName}> Nguyen Van Trong</Text>
                                <Text style={styles.textPrice}> 117$ </Text>
                                <Text style={styles.txtMaterial}> Mariter</Text>
                                <View style={styles.infoBottom}>
                                    <Text> Color </Text>
                                    <View style={styles.circleColor} />
                                    <Text style={styles.txtShow}> {'Color 1'.toUpperCase()} </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView >
                {/* <Text onPress={this.goBack.bind(this)}> Back </Text> */}
            </View >
        );
    }
}
const styles = EStyleSheet.create({
    txtName: {
        color: '#acabac',
        fontSize: 15,

    },
    textPrice: {
        color: 'red',

    },
    txtMaterial: {

    },
    txtShow: {
        color: '#b97b95',
        fontSize: 10,
        fontWeight: 'bold'

    },
    imageStyle: {
        width: '100%',
        height: height * 0.18,

    },
    viewImage: {
        width: '32%',
        padding: 5,

    },
    viewInfo: {
        width: '70%',
        justifyContent: 'space-between',
        padding: 5,


    },
    container: {
        flex: 1,
        backgroundColor: 'gray',
        padding: 10,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height * 0.05,
        padding: 5,
        backgroundColor: 'white',
    },
    wrapper: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    backSytle: {
        width: 30,
        height: '100%'
    },
    both: {
        width: '10%',
    },
    titleStyle: {
        color: '#e62117',
        fontWeight: 'bold'
    },
    productInfo: {
        padding: 10,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#edeced',
        width: '95%',

    },
    infoBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    circleColor: {
        width: 15,
        height: 15,
        backgroundColor: 'red',
        borderRadius: 100,
        marginTop: 3,

    }
});
