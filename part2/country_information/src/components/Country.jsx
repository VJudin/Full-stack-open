const Country = ({country, show}) => (
    <div>
        {country.name.common}
        <button onClick={() => show(country)}>show</button>
    </div>
)

export default Country