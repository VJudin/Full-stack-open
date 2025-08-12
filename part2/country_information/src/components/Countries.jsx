import Country from "./Country"

const Countries = ({countries}) => (
    <div>
        { countries.length > 10 ? "Too many matches, specify another filter": countries.map(country => <Country key={country.name.official} country={country} />)}
    </div>
)

export default Countries