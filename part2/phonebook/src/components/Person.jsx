const Person = ({ person }) => {
    return (
        <p>{person.name} {person.number}</p>
    )
}

const People = ({people, filter}) => {
    return (
        <div>
            {
                filter ? people.filter(person => person.name === filter).map(person => <Person key={person.name} person={person} />) : people.map(person => <Person key={person.name} person={person} />)
            }
      </div>
    )
}

export default People