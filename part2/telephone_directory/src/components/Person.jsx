const Person = ({person, deletePerson}) => {
    return (
        <div>
            {person.name} {person.number}
            <button id="deleteButton" onClick={() => deletePerson(person.id)}>delete</button>
        </div>
)}

export default  Person