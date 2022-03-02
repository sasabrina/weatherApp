import { StyleSheet, Text, View } from 'react-native'
import { ErrorProps } from '../types'

export default function Error({ message }: ErrorProps): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Oops! Something went wrong 🥲</Text>
            <Text>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})