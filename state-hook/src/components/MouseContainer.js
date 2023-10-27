// This is a container function file that removes the X and Y display. But(doesn't remove the event or data.)
// See HookMouse.js lines 22-24

import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {

                                //initial value
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer