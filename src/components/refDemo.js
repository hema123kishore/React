import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props)
      this.inputRef = React.createRef() //one way
      this.cbRef = null
      this.setCbRef = element => {this.cbRef = element}

    }
    
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus() //one way
        // console.log(this.inputRef)

    }

clickHandler = () => {
    alert(this.inputRef.current.value)
    
}

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Demo
