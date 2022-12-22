import React, { useEffect,useRef } from "react";
import "./Boxes.css";
// https://www.youtube.com/watch?v=oszUqCqTGHo&ab_channel=ProgramWithAbu    const services = useRef(null);
    const blog = useRef(null);
    const contact = useRef(null);
    const scrollToSection = (elementRef)=>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        })

    }
    return(
        <>
           <div className="hero">
                <li onClick={()=>scrollToSection(services)} className="showlink">Services</li>
                <li onClick={()=>scrollToSection(blog)}>Blog</li>
                <li onClick={()=>scrollToSection(contact)}>Contact</li>
           </div>
           <div ref={services} className="services">
                <h3>Services</h3>
           </div>
           <div ref={blog} className="Blog">
                <h3>Blog</h3>
           </div>
           <div ref={contact} className="contact">
                <h3>contact</h3>
           </div>
        </>
    )
}

export default Try;