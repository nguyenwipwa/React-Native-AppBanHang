import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import profileIcon from '../../media/temp/profile.png';

const styles = EStyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#329576',
    },
    imageProfile: {
        width: '70%',
        height: '100%',
        borderRadius: 100,

    },
    viewImage: {
        flex: 2,
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    buttonStyle: {
        backgroundColor: 'white',
        height: '10%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5


    },
    viewButton: {
        margin: 10,
        alignItems: 'center',
        flex: 6,
        marginTop: 30
    },
    textButton: {
        color: '#329576'
    },
    nameUser: {
        marginBottom: '50%',
        color: 'white'
    }
});


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogIn: true };
    }
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }
    render() {
        const logoutJSX =
            (
                <View style={styles.viewButton}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.gotoAuthentication.bind(this)}
                    >
                        <Text style={styles.textButton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            );
        const loinJSX =
            (
                <View style={styles.viewButton}>
                    <Text style={styles.nameUser}>Nguyen Van Trong </Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.gotoOrderHistory.bind(this)}
                    >
                        <Text style={styles.textButton}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.gotoChangeInfo.bind(this)}
                    >
                        <Text style={styles.textButton}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.gotoAuthentication.bind(this)}
                    >
                        <Text style={styles.textButton}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            );
        const mainJSX = this.state.isLogIn ? loinJSX : logoutJSX;
        return (
            <View style={styles.container}>
                <View style={styles.viewImage}>
                    <Image source={profileIcon} style={styles.imageProfile} />
                </View>
                {mainJSX}
            </View>
        );
    }
}

export default Menu;
