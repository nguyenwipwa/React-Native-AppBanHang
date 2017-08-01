import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class HomeView extends Component {
    state = {}
    render() {
        const { types, topProduct } = this.props;
        return (
            <ScrollView style={{ backgroundColor: '#d4d3d0' }}>
                <View style={{ flex: 1 }}>
                    <Collection name='SPRING COLLECTION'> SPRING COLLECTION </Collection>
                    <Category
                        navigator={this.props.navigator}
                        types={types}
                    > SPRING COLLECTION </Category>
                    <TopProduct topProduct={topProduct} navigator={this.props.navigator} />
                </View >
            </ScrollView >
        );
    }
}

export default HomeView;
