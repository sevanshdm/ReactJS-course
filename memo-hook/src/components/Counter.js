import React, {useState, useMemo} from 'react'

function Counter() {
//  const [state, setState] = useState(initialState)    
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    // first param is the function whose return value needs to be cached. Second param is array of specified dependencies
    const isEven = useMemo(() => {
        let i = 0
        while (i <200000000) i++ //this is meant to slow down the speed of the function
        return counterOne % 2 === 0
    },[counterOne])

    // this is the function whos return value needs to be cached.
    // const isEven = () => {
    //     let i = 0
    //     while (i <200000000) i++ //this is meant to slow down the speed of the function
    //     return counterOne % 2 === 0
    // }

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter