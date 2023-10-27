// This file show how to implement useEffect hook

            // import hooks
import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)

        // parameter is a function that gets excecuted after every render of the component.
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne