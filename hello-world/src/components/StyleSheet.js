import React from 'react'
import './MyStyles.css'

                // props comes from App.js
function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default StyleSheet