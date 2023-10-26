import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        //Create Refs in the constructor so that they can be referenced throughout the component.
        this.inputRef = React.createRef() //This allows you access to the object and it's properties(<input> on line 21)

        //Callback Refs (older practice)
        // this.cbRef = null
        // this.setCbRef = element => {
        //     this.cbRef = element
        // }

    }

    componentDidMount() {
        // When the page loads, this input element will automatically have the focus(it will be selected by default). 
        this.inputRef.current.focus()
        console.log(this.inputRef)

        // for Callback Refs
        // if (this.cbRef) {
        //     this.cbRef.focus()
        // }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
            return (
                <div> 
                    <input type='text' ref={this.inputRef}/>
                    {/* <input type='text' ref={this.setCbRef}></input> */}
                    <button onClick={this.clickHandler}>Click</button>
                </div>
            )
    }
}

export default RefsDemo