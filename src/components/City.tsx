import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CityProps, RootStackParamList } from '../types'
import { WeatherIcon } from '../components';
import { formateTemp } from '../helpers';

export default function City({ id, name, weather, icon }: CityProps): JSX.Element {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <TouchableOpacity
            key={id}
            onPress={() => navigation.navigate("City", { itemId: id, name })}
            style={styles.container}
        >
            <Text style={styles.title}>{name}</Text>

            <View style={styles.weatherWrapper}>
                <WeatherIcon icon={icon} iconWidth={40} iconHeight={40} />
                <Text style={styles.weather}>{formateTemp(weather)}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 5,
        backgroundColor: '#ffffff47',
        borderRadius: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#fff"
    },
    weatherWrapper: {
        alignItems: "center"
    },
    weather: {
        color: "#fff",
        fontSize: 18
    },
});
