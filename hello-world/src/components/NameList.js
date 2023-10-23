import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Shrek', 'Donkey', 'Gingy', 'Shrek']

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

    // arrow funct can take 2 params. (This is how to assign the index as the key for list rendering.)
    const nameList = names.map((name, index) => <h2 key={index}> {index} {name} </h2>)
    //Using an index as a key can cause big UI issues, Use as a last resort.
    //Only use if 1.) the items in your list don't have a unique ID 2.) The list is a static list and won't change 3.) The list will never be reordered or filtered.
    
    return <div>{nameList}</div>

    // Below works if the objects have an ID attribute.
    // const personList = persons.map(person => <Person key={person.id} person ={person}/>)
    
    // return <div>{personList}</div>
}

export default NameList