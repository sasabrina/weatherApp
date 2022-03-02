import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { CityDetailsProps } from '../types';
import { WeatherIcon } from '../components';
import { formatDate, formatHour, formateTemp } from '../helpers';

export default function CityDetails({ name, country, weather }: CityDetailsProps): JSX.Element {
    const date = new Date(weather?.timestamp as any)

    return (
        <View style={styles.container}>
            <View style={styles.dateWrapper}>
                <Text style={styles.date}>{formatDate(date)}</Text>
                <Text style={styles.hour}>{formatHour(date)}</Text>
                <Text style={styles.cityName}> {name}, {country}</Text>
            </View>

            {weather && (
                <View style={styles.weatherIconWrapper}>
                    <WeatherIcon icon={weather.summary.icon} iconWidth={200} iconHeight={200} />
                    <Text style={styles.weatherTitle}>{weather.summary.title}</Text>
                </View>
            )}

            <View>
                <Text style={styles.actual}>{formateTemp(weather?.temperature?.actual)}</Text>
                <View style={styles.minMaxWrapper}>
                    <View>
                        <Text style={styles.minText}>MIN</Text>
                        <Text style={styles.minText} >{formateTemp(weather?.temperature?.min)}</Text>
                    </View>
                    <View>
                        <Text style={styles.minText}>MAX</Text>
                        <Text style={styles.maxText}>{formateTemp(weather?.temperature?.max)}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
        alignItems: "center",
        justifyContent: "center"
    },
    dateWrapper: {
        alignItems: "center"
    },
    date: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 15
    },
    hour: {
        fontSize: 36,
        color: "#fff",
        marginBottom: 15
    },
    cityName: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 15
    },
    weatherIconWrapper: {
        alignItems: "center",
        marginBottom: 30
    },
    weatherTitle: {
        fontSize: 20,
        color: "#fff",
    },
    weatherContainer: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center"
    },
    actual: {
        fontSize: 56,
        color: "#fff",
        textAlign: "center"
    },
    minMaxWrapper: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderTopWidth: 2,
        borderColor: "#fff",
        marginTop: 15,
        paddingTop: 15
    },
    minText: {
        fontSize: 32,
        color: "#fff",
        textAlign: "center"
    },
    maxText: {
        fontSize: 32,
        color: "#fff",
        marginLeft: 20,
        textAlign: "center"
    }
})