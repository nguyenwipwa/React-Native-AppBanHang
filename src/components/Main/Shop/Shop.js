import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';
import URL from '../../URL';

import homeIcon0 from '../../../media/appIcon/home0.png';
import homeIcon from '../../../media/appIcon/home.png';
import cart0 from '../../../media/appIcon/cart0.png';
import cart from '../../../media/appIcon/cart.png';
import search0 from '../../../media/appIcon/search0.png';
import search from '../../../media/appIcon/search.png';
import contact0 from '../../../media/appIcon/contact0.png';
import contact from '../../../media/appIcon/contact.png';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProduct: [],
        };
    }
    componentDidMount() {
        fetch(URL.URL_INDEX) // eslint-disable-line
            .then(res => res.json())
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({ types: type, topProduct: product });
            })
            .catch(err => console.log(err));
    }
    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { types, topProduct } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        renderIcon={() => <Image style={styleApp.iconStyle} source={homeIcon0} />}
                        renderSelectedIcon={() =>
                            <Image style={styleApp.iconStyle} source={homeIcon} />}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home types={types} topProduct={topProduct} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        renderIcon={() => <Image style={styleApp.iconStyle} source={cart0} />}
                        renderSelectedIcon={() =>
                            <Image style={styleApp.iconStyle} source={cart} />}
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        badgeText='1'
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        renderIcon={() => <Image style={styleApp.iconStyle} source={search0} />}
                        renderSelectedIcon={() =>
                            <Image style={styleApp.iconStyle} source={search} />}
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        renderIcon={() => <Image style={styleApp.iconStyle} source={contact0} />}
                        renderSelectedIcon={() =>
                            <Image style={styleApp.iconStyle} source={contact} />}
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styleApp = StyleSheet.create({
    iconStyle: {
        width: 20, height: 20
    }
});
export default Shop;
