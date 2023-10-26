import React from 'react'
import ReactDOM from 'react-dom' // This needs to imported to work with portals and DOM manipulation

function PortalDemo() {  // Parameters are 1.)jsx you want to render, 2.) DOM node to mount the element onto
    return ReactDOM.createPortal(
        <h1>Portals demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo