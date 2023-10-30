import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)
    useEffect(() => {
        //Focus the input element.
        inputRef.current.focus()
        // current is something that React does, it sets the refs current property to the corresponding DOM node(line14)
    },[])

    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
        )
}

export default FocusInput