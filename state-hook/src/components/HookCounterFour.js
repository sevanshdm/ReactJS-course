// This file shows how to hooks with arrays

//Import useState hook
import React, {useState} from 'react'

function HookCounterFour() {

    const [items, setItems] = useState([])

    const addItem = () => {
        //call setter function,(remember it doesn't remember or auto update values, that's why spread operator is there)
        setItems([...items, { // push or append another object to not overwrite original array
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1 // random number between 1 and 10
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                   <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterFour