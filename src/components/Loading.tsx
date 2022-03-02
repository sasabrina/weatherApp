import { StyleSheet, Text, View } from 'react-native'

export default function Loading(): JSX.Element {
    return (
        <View style={styles.loading}><Text style={styles.text}>Loading...</Text></View>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24
    }
})