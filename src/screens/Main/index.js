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
                <Facebook/>
                <Footer/>
            </div>
        )
    }
}

const Facebook = () => 
    (<div className="container">
        <hr/>
        <div class="fb-page" data-href="https://www.facebook.com/AmitMantoOfficial" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/AmitMantoOfficial" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AmitMantoOfficial">Amit Manto</a></blockquote></div>
                {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAmitMantoOfficial&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
    </div>)



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