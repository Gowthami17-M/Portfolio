import React from "react";
import './Page.css';
import Home from "./Home/Home";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Personal from "./PersonalInfo/Personal";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Certifications from "./Certifications/Certifications";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";


function Page(props){
    const {theme,setTheme} = props

    return(
        <div>
            <section id="home" style={{background:theme==='dark'?'white':'black'}}>
                <div style={{color:theme==='dark'?'black':'white'}}>
                    <Home theme={theme}/>
                </div>
            </section>
            <section id="about" style={{background:theme==='dark'?'white':'black'}}>
                <div style={{color:theme==='dark'?'black':'white'}}>
                    <About theme={theme}/>
                </div>
            </section>
            <section id="personaldetails" style={{background:theme==='dark'?'white':'black'}}>
                <div style={{color:theme==='dark'?'black':'white'}}>
                    <Personal theme={theme}/>
                </div>
            </section>
            <section id="education" style={{background:theme==='dark'?'white':'black'}}>
                <div style={{color:theme==='dark'?'black':'white'}}>
                    <Education theme={theme}/>
                </div>
            </section>
            <section id="projects" style={{background:theme==='dark'?'white':'black'}}>
                <div style={{color:theme==='dark'?'black':'white'}}>
                    <Projects theme={theme}/>
                </div>
            </section>
            <section id="skills" style={{background:theme==='dark'?'white':'black'}}>
                <div style={{color:theme==='dark'?'black':'white'}}>
                    <Skills theme={theme} />
                </div>            
            </section>
            <section id="certifications" style={{background:theme==='dark'?'white':'black'}}>
                <div style={{color:theme==='dark'?'black':'white'}}>
                    <Certifications theme={theme} />
                </div>            
            </section>
            <section id="contact" style={{background:theme==='dark'?'white':'black'}}>
                <div style={{color:theme==='dark'?'black':'white'}}>
                    <Contact theme={theme}/>
                </div> 
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Page;