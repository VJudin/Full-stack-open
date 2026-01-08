import Languages from "./Languages"
import Weather from "./Weather"

const CountryInfo = ({country, weather}) => {
    if (!country) {
        return <div>No country selected</div>
    }
    console.log("info reached")
    console.log(country)
    console.log("languages are", country.languages)
    console.log("weather is", weather)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>
            <h2>Languages</h2>
            <Languages languages={Object.values(country.languages)} />
            <img src={country.flags.png} alt="flag"/>
            <h2>Weather in {country.capital}</h2>
            <Weather weather={weather}/>
        </div>
    )
}

export default CountryInfo