import React, { Component } from 'react'

 class Box extends Component {
constructor(props){
    super(props)
        this.state={
            background:'red'
        }
    // this.changeColor=this.changeColor.bind(this)
}

changeColor = () => {
    this.setState({
        background:'gray'
    })
}

    render() {
        return (
            <div>
                <h1>Reactjs</h1>
                <div style={{ background:this.state.background, width:156, marginLeft:615 , height:127, cursor: 'pointer'}} onClick={this.changeColor}></div>
            </div>
        )
    }
}


export default Box
