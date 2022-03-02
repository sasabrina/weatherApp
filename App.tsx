// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, CityScreen, SearchScreen } from './src/screens'
import { RootStackParamList } from './src/types'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql-weather-api.herokuapp.com/',
  }),
  cache: new InMemoryCache()
})
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="City" component={CityScreen} options={({ route }) => ({ title: route.params.name })} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}