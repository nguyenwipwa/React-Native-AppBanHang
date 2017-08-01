import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import CartView from './CartView';


class Cart extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'CART_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART_VIEW': return <CartView navigator={navigator} />;
                        default: return;
                    }
                }}
            />
        );
    }
}

export default Cart;
