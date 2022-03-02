export type RootStackParamList = {
    Home: undefined;
    City: {
        itemId: string,
        name: string
    };
    Search: {
        searchValue: string
    }
};

export type CityScreenProps = {
    route: any,
    navigation: any
}

export type SearchScreenProps = {
    route: any,
    navigation: any
}

export type CityProps = {
    id: string,
    name: string,
    weather: number,
    icon: string,
    time: string
}

export type CityDetailsProps = {
    name?: string | null,
    country?: string | null,
    weather?: {
        summary: {
            icon: string,
            title: string,
            description: string
        }
        temperature?: {
            actual: number
            min: number
            max: number
        },
        timestamp?: string
    } | null,
}

export type ErrorProps = {
    message: string
}

export type WeatherIconProps = {
    icon: string,
    iconWidth: string | number,
    iconHeight: string | number
}