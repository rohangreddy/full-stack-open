const Person = ({ person, handleClick }) => {
    return (
        <div>
            <p>{person.name} {person.number} <button onClick={handleClick}>Delete</button> </p>
        </div>
    )
}

const People = ({people, filter, handleClick}) => {
    return (
        <div>
            {
                filter 
                ? people.filter(person => person.name === filter).map(person => <Person key={person.id} person={person} handleClick={() => handleClick(person.id)} />) 
                : people.map(person => <Person key={person.id} person={person} handleClick={() => handleClick(person.id)}/>)
            }
        </div>
    )
}

export default People