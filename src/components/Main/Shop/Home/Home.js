import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';


class Home extends Component {
    render() {
        const { types, topProduct } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView navigator={navigator} types={types} topProduct={topProduct} />;
                        case 'LIST_PRODUCT': return <ListProduct navigator={navigator} />;
                        case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator} idProduct={route.idProduct} />;
                        default: return;
                    }
                }}
            />
            // <ScrollView style={{ backgroundColor: '#d4d3d0' }}>
            //     <View style={{ flex: 1 }}>
            //         <Collection name='SPRING COLLECTION'> SPRING COLLECTION </Collection>
            //         <Category name='SPRING COLLECTION'> SPRING COLLECTION </Category>
            //         <TopProduct />
            //     </View >
            // </ScrollView >
        );
    }
}

export default Home;
