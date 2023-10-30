//This file shows how to implement "useCallback" hook

import React, {useState, useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {

    const [age, setAge] = useState(25)
    const[salary, setSalary] = useState(50000)

                        //callback funct as first param, array of dependencies as second param
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age]) //function depends on age.

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary]) 

    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
                                {/* callback function */}
            <Button handleClick={incrementAge}>Increment Age</Button>

            <Count text="Salary" count={salary}/>
                            {/* cached function returned from(lines 18-20) passed as a prop */}
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div> 
    )
}

export default ParentComponent