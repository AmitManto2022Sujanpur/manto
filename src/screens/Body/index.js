import React, { Component } from 'react'

import data from '../../assets/data'

export default class Body extends Component {
    render() {
        return (
            <div className="container-fluid ">
                {/* <span>Amit Singh Manto</span> */}
                
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
                {/* <div  className="container mt-sm-5">
                <DisplayTheJob/>
                </div> */}
            </div>
        )
    }
}

const DisplayTheJob = () => (
    <div className="container  ">
        {/* <span>
            Amit Singh Manto
        </span> */}
        {/* <span>Chahunda hai Sujanpur Manto Di Sarkar</span> */}
        <div className="row">
            <span>Videos</span>
        </div>
        <div className="row">
            <hr className="d-none "/>
        </div>
        <div className="row ">
            <div className="col-12 border mb-2">
                <div className="m-1  lg-m-7">
                    <div class="ratio ratio-16x9 ">
                        <iframe src="https://www.youtube.com/embed/Y-5Z5b-3Nl8"/>
                    </div>
                </div>
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
            <a href={"#"}><p>View All</p></a>
        </div>
    </div>
)

const DisplayTheImages = () => {
    return(
        <div className="container">
            <div className="row"> 
            <p>
            Images
            </p> </div>
            <div className="row">
                <div className="col-lg-10 col-sm-12 border m-2">
                <p>{"ਮੇਰਾ ਹਲਕਾ ਮੇਰਾ ਪਰਿਵਾਰ।"}</p>
                <img src="https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/p526x296/271176401_4827022340721752_3776882660327201344_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=ahcwaafJxPQAX8WdEXP&_nc_ht=scontent.fixc4-1.fna&oh=00_AT8sU1JSDjQmRhFZh3HRUy4B6aFFfHlugXCCVi3UTtXCVA&oe=61DEFA44" style={{
                            // height:"35%",
                            objectFit:'cover',
                            padding:10,
                            height:"20rem"
                        }} className="img-responsive w-100"/>
                        
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 col-sm-12 border m-2">
                <p className="text-justify">{"ਹਲਕਾ ਸੁਜਾਨਪੁਰ ਦੇ ਪਿੰਡ ਅਜੀਜਪੁਰ ਵਿੱਚ ਸਰਪੰਚ, ਪੰਚ ਤੇ ਪਿੰਡ ਵਾਸਿਆਂ ਨਾਲ ਮੁਲਾਕਾਤ ਕਿੱਤੀ।"}</p>  
                <img src="https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/271188517_4826687370755249_396329957526362417_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=A-z_TXibmaIAX_LSy4M&_nc_ht=scontent.fixc4-2.fna&oh=00_AT9TNmfBeARSyXURZd7YKTdQVTmw_DyvX1oYDOQUnpJFeg&oe=61DF8913" style={{
                            
                            objectFit:'cover',
                            padding:10,
                            height:"20rem"
                        }} className="img-responsive w-100"/>
                       
                </div>
                
            </div>
        </div>
    )
}


const DisplayTheWorkDone = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <DisplayTheImages/>
                <a href={"#"}><p>View All</p></a>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <DisplayTheJob/>
                </div>
            </div>
        </div>
    )
}