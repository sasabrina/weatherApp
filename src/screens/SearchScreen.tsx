import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native'
import { SearchScreenProps, CityDetailsProps } from '../types'
import { useQuery } from "@apollo/client"
import { SEARCH_CITY } from '../graphql/request'
import { CityDetails, Loading, Error } from '../components';


export default function SearchScreen({ route }: SearchScreenProps): JSX.Element {
    const { searchValue } = route.params
    const { data, loading, error } = useQuery(SEARCH_CITY, { variables: { name: searchValue } })
    const [city, setCity] = useState<CityDetailsProps | null>()

    useEffect(() => {
        if (data) setCity(data.getCityByName)
        console.log(searchValue);

    }, [data])

    if (loading) return <Loading />

    if (error) return <Error message={error.message} />

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp8005235.jpg" }} resizeMode="cover" style={styles.background}>
                {city !== null ?
                    <CityDetails name={city?.name} country={city?.country} weather={city?.weather} />
                    : <Text style={styles.noResultsText}>There are no results for "{searchValue}" 😕</Text>
                }
            </ImageBackground>
        </View>
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
    noResultsText: {
        fontSize: 20,
        color: "#fff",
    }
})