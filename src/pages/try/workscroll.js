import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Boxes.css";
import Pictureslide from '../components/pictureslide'
import Productiondemo from '../components/productdemo'
// https://www.youtube.com/watch?v=JcHLxzrsRS4&ab_channel=Arslan
const Try = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        });},[]);
    return(
        <>
           <div>
                <h1>Pricing</h1>
                <div className="grids">
                    <div className="boxes">1</div>
                    <div className="boxes">2</div>
                    <div data-aos="fade-up" className="boxes">3</div>
                    <div data-aos="fade-right" className="boxes">4</div>
                    
                </div>
                <div data-aos="fade-left">
                        <Productiondemo/>
                    </div>
           </div>
        </>
    )
}

export default Try;