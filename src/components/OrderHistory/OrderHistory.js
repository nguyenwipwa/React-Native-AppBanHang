import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import StylesAndroid from '../../Styles/StylesAndroid';
import HeaderView from './HeaderView';
import OrderModel from './OrderModel';

import icRight from '../../media/appIcon/backs.png';

const styleHeader = StylesAndroid.style1;

export default class OrderHistory extends Component {
    componentDidMount = () => {
        // this.drawer.open();
        // console.log(styleHeader);
    }
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={styleHeader.containerGray}>
                <HeaderView
                    imgRight={icRight} clickRight={this.goBackToMain.bind(this)}
                >  OrderHistory
                </HeaderView>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <OrderModel id={'ORD0001'} time={'2017-07-39 08:30:13'} status={'Pending'} total={'392$'} />
                        <OrderModel id={'ORD0001'} time={'2017-07-39 08:30:13'} status={'Pending'} total={'392$'} />
                        <OrderModel id={'ORD0001'} time={'2017-07-39 08:30:13'} status={'Pending'} total={'392$'} />
                        <OrderModel id={'ORD0001'} time={'2017-07-39 08:30:13'} status={'Pending'} total={'392$'} />
                        <OrderModel id={'ORD0001'} time={'2017-07-39 08:30:13'} status={'Pending'} total={'392$'} />
                        <OrderModel id={'ORD0001'} time={'2017-07-39 08:30:13'} status={'Pending'} total={'392$'} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
