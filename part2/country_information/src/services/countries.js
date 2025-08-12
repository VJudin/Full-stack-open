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

export default {getAll, getInfoOnCountry}