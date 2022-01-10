import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props){
        super(props)
        this.state={
            selected:"home"
        }
    }

    componentDidMount(){
        this.props.passProps("home")
    }
    render() {
        return (
            <div className="container ">
               <div className="row">
                   
                   <div className="col">
                   <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand text-success text-bold" href="#">
                            <img src={require('../../assets/logo.png')} height={60} width={60} className="rounded"/>
                            <span >Amit Manto </span>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-primary text-bold" aria-current="page" onClick={
                                ()=> this.setState({
                                    selected:"home"
                                }, ()=>{
                                    this.props.passProps("home")
                                })
                            } href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-primary text-bold"  onClick={
                                ()=> this.setState({
                                    selected:"social"
                                }, ()=>{
                                    this.props.passProps("social")
                                })
                            } href="#">Social Work</a>
                            </li>
                            {/* <li class="nav-item">
                            <a class="nav-link text-primary text-bold" onClick={
                                ()=> this.setState({
                                    selected:"contact"
                                }, ()=>{
                                    this.props.passProps("contact")
                                })
                            } href="#">Contact Us</a>
                            </li> */}
                            
                        </ul>
                        </div>
                    </div>
                    </nav>
                   </div>
                </div> 
               
            </div>
        )
    }
}
