// This file show how to implement useEffect hook

            // import hooks
import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)

    const[name, setName] = useState('')

        // parameter is a function that gets excecuted after every render of the component.
    useEffect(() => {
        console.log('useEffect - Updating document title.')
        document.title = `You clicked ${count} times`
    }, [count]) //for conditionally executing an effect, you pass in an array as a second parameter. In the array, specify the props or state to watch for.
                //Only if the props or states specified in the array were to change, the effect would be executed.
    return (
        <div>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne