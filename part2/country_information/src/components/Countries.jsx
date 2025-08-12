import Country from "./Country"

const Countries = ({countries, show}) => (
    <div>
        { countries.length > 10 
        ? "Too many matches, specify another filter"
        : countries.map(country => <Country key={country.name.official} show={show} country={country}/>)}
    </div>
)

export default Countries