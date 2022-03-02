import { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";


export default function SearchInput(): JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = () => {
        navigation.navigate('Search', { searchValue })
        setSearchValue('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Search for a city...'
                placeholderTextColor="#fff"
                onChangeText={(text) => setSearchValue(text)}
            />
            <TouchableOpacity style={styles.button} disabled={searchValue.length < 3} onPress={() => handleSearch()} >
                <Text style={styles.text}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        flex: 3,
        backgroundColor: "#ffffff47",
        height: 40,
        paddingHorizontal: 10,
        color: '#fff',
        borderRadius: 8,
    },
    button: {
        flex: 1,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        backgroundColor: "#222",
        borderRadius: 8
    },
    text: {
        color: "#fff"
    }
})