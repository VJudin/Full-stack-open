const Languages = ({languages}) =>{
    return (
        <ul>
            {languages.map(language => <li>{language}</li>)}
        </ul>
    )
}

export default Languages