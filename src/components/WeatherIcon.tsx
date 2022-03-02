import { StyleSheet, View, Image } from 'react-native'
import { WeatherIconProps } from '../types'

export default function WeatherIcon({ icon, iconWidth, iconHeight }: WeatherIconProps): JSX.Element {
    const iconSource = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <View>
            <Image style={{ width: iconWidth, height: iconHeight }} source={{ uri: iconSource }} />
        </View>
    )
}
