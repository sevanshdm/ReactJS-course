import React, {useState} from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    // const [firstName, setFirstName] = useState('') / was here before useInput() was implemented
    // const [lastName, setLastName] = useState('') / was here before useInput() was implemented

    const [firstName, bindFirstname, resetFirstname] = useInput('')
    const [lastName, bindlastname, resetLastname] = useInput('')

                    //"e" is event
    const submitHandler = e => {
        //keep page from refreshing
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        
        resetFirstname()
        resetLastname()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    <input // when specifying as an attribute, use the spread operator
                        {...bindFirstname}  // value={firstName} 
                                            // onChange={e => setFirstName(e.target.value)}   Line 24-25 replaced by "bind" function in useInput.js
                    type="text"
                    />
                </div>
                <div>
                    <label>Last name</label>
                    <input 
                        {...bindlastname}
                    type="text"
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm