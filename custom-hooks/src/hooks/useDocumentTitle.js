// This file has boilerplate code for a custom hook that auto-updates the document title. The purpose of custom hooks
// is to be able to re-use logic without having to copy/paste code all the time.

import {useEffect} from 'react'

// Make sure to include "use" in the function name for a custom hook. It's conventional and let's others know its purpose.
function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle