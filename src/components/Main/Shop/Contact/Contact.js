import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import StylesAndroid from '../../../../Styles/StylesAndroid';

import profile from '../../../../media/profile/profile.jpg';
import icLocation from '../../../../media/appIcon/location.png';
import icPhone from '../../../../media/appIcon/phone.png';
import icMail from '../../../../media/appIcon/mail.png';
import icMessage from '../../../../media/appIcon/message.png';


const { styleContact, styleTxt } = StylesAndroid;
class Contact extends Component {
    render() {
        const { viewImage, viewInfo, imageStyle, rowSpaceBetween, iconStyle } = styleContact;
        return (
            <View style={styleContact.containerGray}>
                <View style={viewImage}>
                    <Image style={imageStyle} source={profile} />
                </View>
                <View style={viewInfo} >
                    <View style={rowSpaceBetween}>
                        <Image style={iconStyle} source={icLocation} />
                        <Text style={styleTxt.txtContact}> 84 Gò dưa, Tam Bình, Thủ Đức </Text>
                    </View>
                    <View style={rowSpaceBetween}>
                        <Image style={iconStyle} source={icPhone} />
                        <Text style={styleTxt.txtContact} > 0163 263 5825 </Text>
                    </View>
                    <View style={rowSpaceBetween}>
                        <Image style={iconStyle} source={icMail} />
                        <Text style={styleTxt.txtContact}> nguyenwipwa@gmail.com </Text>
                    </View>
                    <View style={[rowSpaceBetween, { borderBottomWidth: 0 }]}>
                        <Image style={iconStyle} source={icMessage} />
                        <Text style={styleTxt.txtContact}s> 0167 251 6493 </Text>
                    </View>
                </View>

            </View>
        );
    }
}

export default Contact;
