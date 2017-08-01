import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import StylesAndroid from '../../../../Styles/StylesAndroid';
import SearchItem from './SearchItem';


const styles = StylesAndroid.styleCart;
export default class Search extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', }}>
                    <SearchItem img={sp1} />
                    <SearchItem img={sp1} />
                    <SearchItem img={sp1} />
                    <SearchItem img={sp1} />
                </ScrollView>
            </View>

        );
    }
}

