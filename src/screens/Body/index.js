import React, { Component } from 'react'

import data from '../../assets/data'

import Util from '../../utilities/data'

const {
    latestUpdates
} = Util

export default class Body extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="container-fluid ">
                {this.props.selected=='home'&&<Home/>}
                {this.props.selected=='social'&&<DisplayTheFullImages/>}
            </div>
        )
    }
}

const Home=() => {
    return(
        <React.Fragment>
                <div className="row ">
                    <div className="col p-0" style={{
                        height:'30vw'
                    }}>
                      
                    <img  src={require('../../assets/banner.jpeg')}
                        style={{
                            objectFit:'cover'
                            
                        }}
                            className="w-100 m-0 h-100"      
                        />
                      
                    </div>
                </div>
                <div className="row" style={{
                    background:'rgb(185,215,227)' 
                }}>
                    <div className="col-lg-2" ></div>
                    <div className="col-sm-12 col-lg-8 p-0">
                        <div className="container-fluid"
                      >
                    <p style={{
                        color:'white',
                        textAlign:'justify',
                        lineHeight:1.5,
                        color:'black'
                    }} className="p-3">{data.manto}</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-2"></div>
                </div>
                <div className="row ">
                    <div className="col-lg-2"/>
                    <div className="col-sm-12 col-lg-8">
                        <h1 className="p-2">ਮਹਿਕਾਂ ਵੰਡੇ ਅਮਿਤ ਮੰਟੋ ਸੁਜਾਨਪੁਰ ਪੰਜਾਬ ਦਾ</h1>
                        <div className="rounded">
                            <div className="m-1 p-3 lg-m-7">
                                <div class="ratio ratio-16x9 ">
                                    <iframe src="https://www.youtube.com/embed/Y-5Z5b-3Nl8"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"/>
                </div>
                
                <div class="container-fluid p-0 ">
                    <hr/>
                    <DisplayTheWorkDone/>
                </div>
                
                </React.Fragment>
    )
}



const DisplayTheJob = () => (
    <div className="container  ">
        {/* <span>
            Amit Singh Manto
        </span> */}
        {/* <span>Chahunda hai Sujanpur Manto Di Sarkar</span> */}
        {/* <div className="row">
            <span>Videos</span>
        </div> */}
        <div className="row">
            <hr className="d-none "/>
        </div>
        <div className="row ">
            
            <div className="col-12 border mb-2">
            <div class="fb-video" data-href="https://fb.watch/avwUiKevL5/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/KRTNews/videos/256628266475490/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/KRTNews/videos/256628266475490/">ਮਹਿਕਾਂ ਵੰਡੇ ਅਮਿਤ ਮੰਟੋ ਸੁਜਾਨਪੁਰ ਪੰਜਾਬ ਦਾ...ਕਾਂਗ੍ਰੇਸੀ ਨੇਤਾ ਅਮਿਤ ਸਿੰਘ ਮੰਟੋ ਦਾ ਨਵਾਂ ਗਾਣਾ</a><p>ਮਹਿਕਾਂ ਵੰਡੇ ਅਮਿਤ ਮੰਟੋ ਸੁਜਾਨਪੁਰ ਪੰਜਾਬ ਦਾ...कोंग्रेसी नेता अमित सिंह मंटू का नया गाना 
                Amit Manto #song #congress #punjab Sujanpur</p>Posted by <a href="https://www.facebook.com/KRTNews/">KRT News Network</a> on Friday, 22 October 2021</blockquote></div>
            </div>
            
            <div className="col-12 border mb-2">
                <div className="m-1  lg-m-7">
                    <div class="ratio ratio-16x9 ">
                        <iframe src="https://www.youtube.com/embed/VlySe3faffw"/>
                    </div>
                </div>
            </div>
            <div className="col-12 border mb-2">
                <div className="m-1  lg-m-7">
                    <div class="ratio ratio-16x9 ">
                        <iframe src="https://www.youtube.com/embed/XSocyyvomhs"/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
)

const DisplayTheFullImages = () => {
    return(
        <div className="container-fluid p-0">
            <hr/>
        <div className="row p-0"> 
            <p>
            Images
            </p> </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 col-sm-12 border m-2">
                <p>{"ਮੇਰਾ ਹਲਕਾ ਮੇਰਾ ਪਰਿਵਾਰ।"}</p>
                <img src="https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/p526x296/271176401_4827022340721752_3776882660327201344_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=ahcwaafJxPQAX8WdEXP&_nc_ht=scontent.fixc4-1.fna&oh=00_AT8sU1JSDjQmRhFZh3HRUy4B6aFFfHlugXCCVi3UTtXCVA&oe=61DEFA44" style={{
                            // height:"35%",
                            objectFit:'cover',
                            padding:10,
                            height:"20rem"
                        }} className="img-responsive w-100"/>
                        
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
            <div className="col-lg-3"></div>
                <div className="col-lg-6 col-sm-12 border m-2">
                <p className="text-justify">{"ਹਲਕਾ ਸੁਜਾਨਪੁਰ ਦੇ ਪਿੰਡ ਅਜੀਜਪੁਰ ਵਿੱਚ ਸਰਪੰਚ, ਪੰਚ ਤੇ ਪਿੰਡ ਵਾਸਿਆਂ ਨਾਲ ਮੁਲਾਕਾਤ ਕਿੱਤੀ।"}</p>  
                <img src="https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/271188517_4826687370755249_396329957526362417_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=A-z_TXibmaIAX_LSy4M&_nc_ht=scontent.fixc4-2.fna&oh=00_AT9TNmfBeARSyXURZd7YKTdQVTmw_DyvX1oYDOQUnpJFeg&oe=61DF8913" style={{
                            
                            objectFit:'cover',
                            padding:10,
                            height:"20rem"
                        }} className="img-responsive w-100"/>
                       
                </div>
                <div className="col-lg-3"></div>
                
            </div>
        </div>
    )
}

const DisplayTheImages = () => {
    return(
        <div className="container">
            <div className="row"> 
            <p>
            Latest Updates
            </p> </div>
            {/* <hr/> */}
            {latestUpdates.map(curr=>(            <div className="row">
                <div className="col-lg-10 col-sm-12 border m-2">
                <p>{curr.text}</p>
                <img src={curr.image} style={{
                            // height:"35%",
                            objectFit:'fit',
                            padding:10,
                            height:"20rem"
                        }} className="img-responsive w-100"/>
                        
                </div>
            </div>))}
        </div>
    )
}


const DisplayTheWorkDone = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <DisplayTheImages/>
                
                </div>
                <div className="col-sm-12 col-lg-6">
                    <DisplayTheJob/>
                </div>
            </div>
        </div>
    )
}