import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    View, Text, TouchableOpacity, Dimensions, Image, StyleSheet
    , TextInput
} from 'react-native';
import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#329576',
        padding: 6,
        justifyContent: 'space-between',
    },
    viewInput: {
        flex: 1,
        alignItems: 'center',
        marginTop: '30%'

    },
    viewButton: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    styleTextInput: {
        width: '80%',
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 15,
        // textShadowColor: 'red',
        // textShadowOffset: { width: 0, height: 5 }

    },
    styleButtonLeft: {
        borderColor: 'white',
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    styleButtonRight: {
        borderColor: 'white',
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1,
    },
    styleButtonTransfer: {
        borderRadius: 20,
        borderWidth: 0.6,
        borderColor: 'white',
        width: '80%',
        height: '13%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },
    inactiveStyle: {
        color: '#34aa77'
    },
    activeStyle: {
        color: '#d0cfd0'
    },
    buttonText: {
        color: 'white'
    }

});

const { height } = Dimensions.get('window');
export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }
    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const isSignIn = this.state.isSignIn;
        const signInJSX =
            (
                <View style={styles.viewInput}>
                    <TextInput
                        placeholderTextColor='#e4e2e4'
                        placeholder='Nhập tài khoản' underlineColorAndroid='transparent'
                        style={styles.styleTextInput}
                    />
                    <TextInput
                        secureTextEntry
                        placeholderTextColor='#e4e2e4'
                        placeholder='Nhập mật khẩu' underlineColorAndroid='transparent'
                        style={styles.styleTextInput}
                    />
                    <TouchableOpacity style={styles.styleButtonTransfer}>
                        <Text style={styles.buttonText}> ĐĂNG NHẬP NGAY </Text>
                    </TouchableOpacity>
                </View>
            );
        const signUpJSX =
            (
                <View style={styles.viewInput}>
                    <TextInput
                        placeholderTextColor='#e4e2e4'
                        placeholder='Nhập tên của bạn' underlineColorAndroid='transparent'
                        style={styles.styleTextInput}
                    />
                    <TextInput
                        placeholderTextColor='#e4e2e4'
                        placeholder='Nhập tài khoản email' underlineColorAndroid='transparent'
                        style={styles.styleTextInput}
                    />
                    <TextInput
                        secureTextEntry
                        placeholderTextColor='#e4e2e4'
                        placeholder='Nhập mật khẩu' underlineColorAndroid='transparent'
                        style={styles.styleTextInput}
                    />
                    <TextInput
                        secureTextEntry
                        placeholderTextColor='#e4e2e4'
                        placeholder='Nhập lại mật khẩu' underlineColorAndroid='transparent'
                        style={styles.styleTextInput}
                    />
                    <TouchableOpacity style={styles.styleButtonTransfer}>
                        <Text style={styles.buttonText}> ĐĂNG KÍ NGAY </Text>
                    </TouchableOpacity>
                </View>
            );
        const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;
        return (
            <View style={styles.container}>
                {/*header  */}
                <View style={styleHeader.headr}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={icBack} style={styleHeader.iconStyle} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}> Shop Nguyễn Văn Trọng </Text>
                    <Image source={icLogo} style={styleHeader.iconStyle} />
                </View>
                {/*Content  */}
                {mainJSX}
                {/*bottom  */}
                <View style={styles.viewButton}>
                    <TouchableOpacity
                        style={styles.styleButtonLeft}
                        onPress={this.signIn.bind(this)}
                    >
                        <Text
                            style={isSignIn ? styles.inactiveStyle : styles.activeStyle}
                        >
                            ĐĂNG NHẬP </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.styleButtonRight}
                        onPress={this.signUp.bind(this)}
                    >
                        <Text
                            style={isSignIn ? styles.activeStyle : styles.inactiveStyle}
                        >
                            ĐĂNG KÍ </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styleHeader = StyleSheet.create({
    wrapp: {
        height: height / 8,
        padding: 10,
        justifyContent: 'space-around',
        backgroundColor: '#329576'
    },
    headr: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        height: height / 25,
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 10,
        color: 'gray'

    },
    iconStyle: {
        height: 25,
        width: 25
    }
});
