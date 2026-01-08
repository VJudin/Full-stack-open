import axios from  'axios'

const baseURL = `https://studies.cs.helsinki.fi/restcountries/api`

const getAll = () => {
    const request = axios.get(`${baseURL}/all`)
    return request.then(response => {
        return response.data
    })
}

const getInfoOnCountry = (country) => {
    const request = axios.get(`${baseURL}/name/${country}`)
    return request.then(response => {
        return response.data
    })
}

const getWeather = ({key, city}) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    return request.then(response => {
            return  response.data
    })
}
export default {getAll, getInfoOnCountry, getWeather}