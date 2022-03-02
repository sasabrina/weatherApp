import { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, Text, View, FlatList, Platform, StatusBar } from 'react-native';
import { useQuery } from "@apollo/client"
import { GET_CITIES } from '../graphql/request'
import { useNavigation } from "@react-navigation/native";
import { citiesArray } from '../components/constants';
import { City, SearchInput, Loading, Error } from '../components';

export default function HomeScreen() {
  const navigation = useNavigation()
  const { data, loading, error } = useQuery(GET_CITIES, { variables: { id: citiesArray } })
  const [cities, setCities] = useState(null)

  useEffect(() => {
    if (data) setCities(data.getCityById)
  }, [data])

  if (loading) return <Loading />
  if (error) return <Error message={error.message} />
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp8005235.jpg" }} resizeMode="cover" style={styles.background}>

        <Text style={styles.text}>Weather</Text>
        <SearchInput />
        <View style={styles.citiesContainer}>
          <FlatList data={cities} renderItem={({ item }) => <City id={item.id} name={item.name} weather={item.weather.temperature.actual} icon={item.weather.summary.icon} time={item.weather.timestamp} />} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#fff",
    marginTop: 30,
    marginBottom: 15,
    width: "90%"
  },
  citiesContainer: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    width: "90%"
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
})