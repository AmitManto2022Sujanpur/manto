import React, { Component } from 'react'
import Body from '../Body'
import Header from '../Home'

export default class Main extends Component {

    constructor(props){
        super(props)
        this.state={
            selected:''
        }
    }
    
    render() {
        return (
            <div>
                <Header passProps={
                    (value)=> this.setState({
                        selected: value
                    })
                }/>
                <Body selected={this.state.selected}/>
                <Footer/>
            </div>
        )
    }
}


const Footer = () => {
    return(
        <div className="container-fluid " style={{
            background:'skyblue'
        }}>
            <div className="row mt-4">
                <hr/>
                <div className="col">
                    <p>Copyright © 2022 Amit Manto All Rights Reserved.</p>
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div >
                        <p className="d-inline">Site Built by</p>
                        <p className="d-inline">GrowWithAj</p>
                        <img className="d-inline px-2 " src={require("../../assets/GrowWithAJ.png")} style={{
                            height:80,
                            width:80,
                            borderRadius:40
                        }}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}