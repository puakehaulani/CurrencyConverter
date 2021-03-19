import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native';
import { ConversionInput } from '../components/ConversionInput';
import { format } from 'date-fns';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: "center"
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.width * 0.45
    },
    logo: {
        position: "absolute",
        width: screen.width * 0.25,
        height: screen.width * 0.25
    },
    textHeader: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 30,
        marginVertical: 20,
        textAlign: "center"

    },
    text: {
        color: colors.white,
        fontSize: 14,
        textAlign: "center"
    }
})

export default () => {
    const baseCurrency = 'USD';
    const quoteCurrency = 'GPB';
    const conversionRate = 0.8345;
    const date = '2021-03-18';

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/background.png')} style={styles.logoBackground}
                    resizeMode="contain" />
                <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.textHeader}>Currency Converter</Text>
            <ConversionInput
                text={baseCurrency}
                value="123"
                onButtonPress={() => alert('todo!')}
                keyboardType="numeric"
                onChangeText={(text) => console.log("text", text)}
            />

            <ConversionInput
                text={quoteCurrency}
                value="123"
                editable={false}
                onButtonPress={() => alert('todo!')}
            />
            <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
                    new Date(date),
                    'MMM do, yyyy'
                )}`}
            </Text>
        </View>
    )
}