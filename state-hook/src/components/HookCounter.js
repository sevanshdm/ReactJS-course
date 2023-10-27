        //Import state hooks
import React, {useState} from 'react'

function HookCounter() {

    // accepts an argument which is the intial value of the state property and returns the current value of the state property 
    // and method which is capable of updating that state property.
    const [count, setCount] = useState(0)//count initialized to zero (default value).
        //This is array destructuring

    return (
        <div>    {/*pass in the new count value, and because it's a function call, convert into arrow funct*/}
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter 