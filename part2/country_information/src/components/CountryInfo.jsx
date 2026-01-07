import Languages from "./Languages"

const CountryInfo = ({country}) => {
    if (!country) {
        return <div>No country selected</div>
    }
    console.log("info reached")
    console.log(country)
    console.log("languages are", country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>
            <h2>Languages</h2>
            <Languages languages={Object.values(country.languages)} />
            {console.log(country.languages)}
            <img src={country.flags.png} alt="flag"/>
        </div>
    )
}

export default CountryInfo