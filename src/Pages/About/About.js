import React, { useEffect, useState } from "react";
import './About.css';
import { Link } from "react-router-dom";

function About(props){
    const {theme} = props
    const [typing,settyping] = useState('')   
    const [ind,setind] = useState(0)   
    const about = "To secure a challenging position in software engineering that utilizes my technical skills and knowledge in programming languages such as Java, Python, and C++, and help me to gain knowledge in emerging technologies such as AI and machine learning. As a BTech student, I am passionate about software development. I am seeking a role that allows me to work with a team of experts to solve complex problems, develop innovative solutions, and contribute to the growth and success of the organization."
    useEffect(()=>{
        if(ind!=about.length){
            setTimeout(()=>{
                settyping(typing+about[ind]);
                setind(ind+1)
            },40)
        }
    },[typing,ind])

    return(
        <div className="AboutContainer">
            <div className={theme==='dark'?'about_light':"bgAboutimg"}></div>
            <header style={{width:"auto", marginLeft:"5%"}} className="Abouttext">
                <h1>About</h1>
                <div className="aboutimage">
                    <img src={require("./image1.jpg")}></img>
                    <p>
                        {typing}<span></span>
                    </p>
                </div>

                <div>
                  <Link to="https://drive.google.com/file/d/1xiIO-81Tc5f3MI0xOshGjU4oGi-Gz-po/view?usp=sharing" target="_blank"><button className="resumebutton" style={{borderColor:theme==='dark'?'black':''}}><span style={{color:theme==='dark'?'black':''}}>View Resume</span></button></Link>
                </div>
            </header>
        </div>
    )
}

export default About;