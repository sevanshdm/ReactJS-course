// This file shows how to run effects only once using useEffect hooks.

import React, {useState, useEffect} from 'react'

function HookMouse() {

    // initialize by using useState hooks
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

                        // (event)
    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)
    },[]) //this empty array tells React that this effect doesn't depend on any props or state. It's only called once on the inital render.

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse