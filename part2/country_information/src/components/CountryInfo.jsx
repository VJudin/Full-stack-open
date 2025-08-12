import Languages from "./Languages"

const CountryInfo = ({country}) => {
    console.log("info reached")
    console.log(country)
    const imageURL = `${country.flag[0]}`
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

/* <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h2>Languages</h2>
        {country.languages.map(language => <p>{language}</p>)}
        <img className="flag"
        src={country.flag.png} />
    </div>*/