// This file shows how useState with object

//Import useState hook
import React, {useState} from 'react'

function HookCounterThree() {

    const[name, setName] = useState({firstName: '', lastName: ''}) //default value will be an obj

    return (
        <form>                                               
            <input type='text'
                value= {name.firstName}  //setName is setter funct for the name state variable
                onChange={(event) => setName({ ...name, firstName: event.target.value})} //sets inputed values from form as firstName value
                placeholder='First Name'   //spread operator is so that you can update existing values. The spread copies the old values so you can add the updated value over them.
            />
            <input type='text'
                value={name.lastName} 
                onChange={event => setName({ ...name, lastName: event.target.value})}
                placeholder='Last Name'
            />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounterThree