import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';

export default class App extends Component {
    render() {
        const AUTHENTICATION = 'AUTHENTICATION';
        return (
            <Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
                    }
                }}
                configureScene={
                    (route) => {
                        if (route.name === AUTHENTICATION) {
                            return Navigator.SceneConfigs.FloatFromRight;
                        }
                        return Navigator.SceneConfigs.FloatFromLeft;
                    }
                }
            />
        );
    }
}
