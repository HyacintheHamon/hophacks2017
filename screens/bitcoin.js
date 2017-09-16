import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import { Camera, BarCodeScanner, Permissions } from 'expo';

const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable'

import Colors from '../constants/colors';

class BoxView extends Component {
    render() {
        const { source, text, onPress } = this.props;
        return (
            <Animatable.View animation='fadeInUp' delay={1000}>
                <TouchableOpacity onPress={onPress}>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center', width: width / 3.5, height: width / 3.5, backgroundColor: Colors.white, margin: 4, borderRadius: 32,
                        borderWidth: 1, borderColor: Colors.main
                    }}>
                        <Image source={source} style={{width: width / 5, height: width / 5}} />

                    </View>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.subtitle, textAlign: 'center' }}>{text}</Text>
                </TouchableOpacity>
            </Animatable.View>
        )
    }
}

export default class QRScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <Text style={{ color: Colors.text, fontWeight: '600', fontSize: 32 }}>I want to</Text> */}
                <Animatable.Text animation='fadeIn' duration={2000} style={{ color: Colors.text, fontWeight: '600', fontSize: 28 }}>Select an option below</Animatable.Text>

                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <BoxView onPress={() => navigate('Scanner')} source={require('../assets/cash-buy.png')} text='Buy' />
                    <BoxView onPress={() => navigate('QR')} source={require('../assets/cash-sell.png')} text='Sell' />
                    <BoxView onPress={() => navigate('QR')} source={require('../assets/cash-transfer.png')} text='Transfer' />
                </View>

            </View>
        )
    }
}