import axios from 'axios'

const getPeople = () => {
    const request = axios.get('http://localhost:3001/persons')
    return request.then(response => response.data)
}

const setPerson = (id, person) => {
    const request = axios.patch(`http://localhost:3001/persons/${id}`, person)
    return request.then(response => response.data)
}

const createPerson = (person) => {
    const request = axios.post(`http://localhost:3001/persons`, person)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`)
    return request.then(response => {
        console.log(response.data)
        return response.data
    })
}

export default { getPeople, setPerson, createPerson, deletePerson }