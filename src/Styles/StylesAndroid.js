import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

class StylesAndroid {
    static style1 = EStyleSheet.create({
        header: {
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#329576',
        },
        iconStyle: {
            height: 25,
            width: 25
        },
        container: {
            flex: 10,
            backgroundColor: '#329576',
            padding: 6,
            justifyContent: 'space-between',
        },
        containerGray: {
            backgroundColor: '#d4d3d0',
            flex: 1

        }
    })
    static styleCart = EStyleSheet.create({
        container: {
            backgroundColor: '#d4d3d0',
            padding: 6,
            flex: 1,
            alignItems: 'center',

        },
        wrapper: {
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 5,
            padding: 5,
            flexDirection: 'row',


        },
        viewImage: {
            width: '25%',
            // padding: 5
        },
        viewInfo: {
            width: '75%',
            paddingLeft: 10,
            paddingRight: 5,
            paddingTop: 0,
            justifyContent: 'space-around',

        },
        viewNumber: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '30%',

        },
        imgStyle: {
            width: '100%',
            height: height / 6,
        },
        viewBottom: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        viewTop: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -5
        }
    })
    static styleTxt = EStyleSheet.create({
        txtPrice: {
            color: '#f12b24',
            fontWeight: 'bold'
        },
        txtShow: {
            color: '#fe00a6',
            fontSize: 10,
            marginTop: 5,

        },
        txtWhite: {
            color: 'white'
        },
        txtBold: {
            fontWeight: 'bold'
        },
        txtContact: {
            color: '#fe0191',
        }
    })
    static styleButton = EStyleSheet.create({
        buttonSmall: {
            width: 20,
            height: 20,
            borderWidth: 0.5,
            borderColor: '#9f9e9f',
            textAlign: 'center',
            borderRadius: 3,
            // paddingHorizontal: 4
        },
        buttonDisplay: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#2aa18b',
            width: '100%',
            paddingVertical: 5,
            borderRadius: 5,
            alignItems: 'center',
            paddingHorizontal: 5,

        }
    })
    static stylesSearch = EStyleSheet.create({
        txtName: {
            color: '#acabac',
            fontSize: 15,

        },
        textPrice: {
            color: 'red',

        },
        txtMaterial: {

        },
        txtShow: {
            color: '#b97b95',
            fontSize: 10,
            fontWeight: 'bold'

        },
        imageStyle: {
            width: '100%',
            height: '100%',
        },
        viewImage: {
            width: '25%',
            padding: 5,

        },
        viewInfo: {
            width: '75%',
            justifyContent: 'space-between',
            padding: 5,

        },
        container: {
            flex: 1,
            backgroundColor: 'gray',
            padding: 10,

        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: height * 0.05,
            padding: 5,
            backgroundColor: 'white',
        },
        wrapper: {
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 5,
            padding: 5,
            flexDirection: 'row',
            height: height / 6,
        },
        backSytle: {
            width: 30,
            height: '100%'
        },
        both: {
            width: '10%',
        },
        titleStyle: {
            color: '#e62117',
            fontWeight: 'bold'
        },
        productInfo: {
            flexDirection: 'row',
            borderColor: '#edeced',
            width: '95%',

        },
        infoBottom: {
            flexDirection: 'row',
            justifyContent: 'space-between',

        },
        circleColor: {
            width: 15,
            height: 15,
            backgroundColor: 'red',
            borderRadius: 100,
            marginTop: 3,

        }
    })
    static styleContact = EStyleSheet.create({
        viewImage: {
            flex: 6,
            marginBottom: 10
        },
        viewInfo: {
            flex: 5,
            backgroundColor: 'white',
            borderRadius: 5,
            paddingHorizontal: 5
        },
        imageStyle: {
            width: '100%',
            height: '100%',
            borderRadius: 5,
        },
        containerGray: {
            backgroundColor: '#f1f1f1',
            flex: 1,
            padding: 5,
        },
        rowSpaceBetween: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            flex: 1,
            borderColor: '#f1f1f1',
            borderBottomWidth: 3,
            margin: 5,
            alignItems: 'center'
        },
        iconStyle: {
            width: '10%',
            height: '80%',
        }
    })
    static styleProductDetail = EStyleSheet.create({
        wrapper: {
            backgroundColor: 'white',
            flex: 1,
            margin: 8,
            alignItems: 'center',
            borderRadius: 5
        },
        header: {
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: '#f1f1f1',
            padding: 5,
        },
        content: {
            flex: 13,
            width: '100%',
        },
        imageStyle: {
            width: 30,
            height: 30
        },
        viewImage: {
            margin: 3,
        },
        imageViewStyle: {
            width: '100%',
            height: '100%',
            borderRadius: 5,
        },
        viewInfo: {
            width: '55%',
            backgroundColor: '#f1f1f1',
            padding: 8,
            margin: 3,
            borderRadius: 3,
            justifyContent: 'space-around'
        },
        viewDescription: {
            backgroundColor: '#f1f1f1',
            padding: 8,
            margin: 5,
            borderRadius: 3,
        },
        viewTop: {
            flex: 1, flexDirection: 'row',
        }
    })
}
export default StylesAndroid;

