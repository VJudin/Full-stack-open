const Languages = ({languages}) =>{
    const jsonData = JSON.stringify(languages)
    return (
        <ul>
            {languages.map(language => <li>{language}</li>)}
        </ul>
    )
}

export default Languages