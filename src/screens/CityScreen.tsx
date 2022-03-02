import { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { useQuery } from "@apollo/client"
import { GET_CITY } from '../graphql/request'
import { CityDetails, Loading, Error } from '../components';
import { CityDetailsProps, CityScreenProps } from '../types';

export default function CityScreen({ route }: CityScreenProps): JSX.Element {
    const { itemId } = route.params
    const { data, loading, error } = useQuery(GET_CITY, { variables: { cityId: itemId } })
    const [city, setCity] = useState<CityDetailsProps | null>()

    useEffect(() => {
        if (data) setCity(data.getCityById[0])
    }, [data])

    if (loading) return <Loading />

    if (error) return <Error message={error.message} />

    return (
        <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp8005235.jpg" }} resizeMode="cover" style={styles.background}>
            {city && <CityDetails name={city.name} country={city.country} weather={city.weather} />}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
})