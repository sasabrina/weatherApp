import { weekdaysArray, monthsArray } from "./components/constants";

export const formatDate = (date: Date) => `${weekdaysArray[date.getDay()]}, ${date.getDate()} ${monthsArray[date.getMonth()]}`

export const formatHour = (date: Date) => date.toLocaleString([], { hour: '2-digit', minute: '2-digit' })

export const formateTemp = (temp: any) => `${Math.round(temp - 273.15)}°`;