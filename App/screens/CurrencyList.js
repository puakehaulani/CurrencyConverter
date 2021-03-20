import React from 'react';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons";

import currencies from '../data/currencies.json';
import { RowItem, RowSeparator } from '../components/RowItem';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        backgroundColor: colors.blue,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default ({ navigation, route = {} }) => {
    const params = route.params || {};
    const insets = useSafeArea();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.white,
            }}
        >
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <FlatList
                data={currencies}
                renderItem={({ item }) => {
                    const selected = params.activeCurrency === item;
                    return (
                        <RowItem
                            title={item}
                            onPress={() => {
                                if (params.onChange) {
                                    params.onChange(item);
                                }
                                navigation.pop();
                            }}
                            rightIcon={
                                selected && (
                                    <View style={styles.icon}>
                                        <Entypo name="check" size={20} color={colors.white} />
                                    </View>
                                )
                            }
                        />
                    );
                }}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <RowSeparator />}
                ListFooterComponent={() => (
                    <View style={{ paddingBottom: insets.bottom }} />
                )}
            />
        </View>
    );
};