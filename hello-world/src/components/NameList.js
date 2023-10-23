import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Shrek', 'Donkey', 'Gingy']

    const persons = [
        {
            id:1,
            name: 'Shrek',
            age: 33,
            skill: 'Fighting'
        },
        {
            id: 2,
            name: 'Donkey',
            age: 36,
            skill: 'Pestering'
        },
        {
            id: 3,
            name: 'Gingy',
            age: 127,
            skill: 'Baking'
        }
    ]  
    const personList = persons.map(person => <Person key={person.id} person ={person}/>)
    
    return <div>{personList}</div>
}

export default NameList