import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import countryService from './services/countries'
import CountryInfo from './components/CountryInfo'

function App() {
  const [value, setValue] = useState('')
  const [country, setCountry] = useState(null)
  const [countries, setCountries] = useState([])
  const [countryInfo, setCountryInfo] = useState(null)
  const [shown, setShown] =  useState(false)

  useEffect(() => {
    console.log('country  is now',  country)

    if (country) {
      console.log('fetching countries')
      countryService
      .getAll()
      .then(listOfCountries => {
        setCountries(listOfCountries)
      })
      console.log(countriesToShow[0])
      if (countriesToShow.length === 1) {
        console.log("Got to setting this")
        getInfoOnOne(countriesToShow[0])
      }
    } 
    console.log(countries)
  }, [country])

  const getInfoOnOne = (country) => {
      console.log("fetching info on one")
      countryService
      .getInfoOnCountry(country.name.common)
      .then(country => {
        setCountryInfo(country)
      })
      console.log("logged info", countryInfo)
      setShown(true)
    }

  const handleChange = (event) => {
    setValue(event.target.value)
    setCountry(event.target.value)
    setShown(false)
  }
  

  const countriesToShow = value.length === 0 
    ? countries 
    : countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
  
  return (
    <div>
      <form>
        find countries: <input value={value} onChange={handleChange} />
      </form>
      <div>
        {shown 
        ? <CountryInfo country={countryInfo}/> 
        :<Countries countries={countriesToShow} show={getInfoOnOne}/>}
      </div>
    </div>
  )
}

export default App
