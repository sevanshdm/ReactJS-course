// This document also auto-updates the Doc title

import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitleTwo() {
    //state variable
    const [count, setCount] = useState(0)

    // custom hook
    useDocumentTitle(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1) }>Count - {count}</button>
        </div>
    )
}

export default DocTitleTwo