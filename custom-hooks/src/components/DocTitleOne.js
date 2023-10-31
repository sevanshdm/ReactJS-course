// This file auto-updates the document title

import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitleOne() {
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

export default DocTitleOne