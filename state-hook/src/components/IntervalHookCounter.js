import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {                                                          //now setCount keeps track of previous values
        setCount(count + 1) //If you don't want to use dependency list(line24) do setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        // Whenever you need to call a function within useEffect just go ahead and define the function in useEffect.
        // this is so it's easier to see there's a prop that needs to be specified as a dependency.
        // function doSomething(){
        //     console.log(someProp)
        // }

        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }

        //this array is the dependency list/array, you put in it what you want React to keep track of. It watches for changes for the - 
    }, [count]) // - thing in the list

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter