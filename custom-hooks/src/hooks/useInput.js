// this file creates a custom hook for binding inputs to values in UserForm.js

import {useState} from 'react'

function useInput(initialValue) {

    const [value, setValue] = useState(initialValue)

    // set the "value" back to "initialValue"
    const reset = () => {
        setValue(initialValue)
    }


    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    // ex [firstName, bindFirstname, resetFirstName]
    return [value, bind, reset]
}

export default useInput