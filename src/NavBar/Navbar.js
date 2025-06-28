import React, { useState, useEffect } from "react";
import './Navbar.css';

function Navbar(props){
    const [activeSection, setActiveSection] = useState("#home");
    const {theme,setTheme} = props
    const [menustatus,setmenustatus] = useState(false); 

    const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let currentSection = "#home";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
                currentSection = `#${section.id}`;
            }
        });
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuIsActive = () =>{
        const hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle('active');
        setmenustatus(!menustatus)
    }

    const handleTheme = ()=>{
        setTheme(theme==='dark'?'light':'dark')
    }

    // 
    // style={{background:theme==='dark'?'white':'#1d1e26'}}

    return(
        <nav className="Menubar" style={{background:theme==='dark'?'rgba(255, 255, 255,0.6)':'#1d1e2685'}} >
            <input type="checkbox" className="checkbox1" checked={menustatus} onChange={(e)=>{}}></input>
            <button type="button" className="hamburger" onClick={menuIsActive}>
                <span className="line" style={{backgroundColor:theme==='dark'?'black':''}}></span>
                <span className="line" style={{backgroundColor:theme==='dark'?'black':''}}></span>
                <span className="line" style={{backgroundColor:theme==='dark'?'black':''}}></span>
            </button>
            <ul className="MenuList" >
                <label onClick={menuIsActive} className="bgfilter" style={{background:theme==='dark'?'rgba(255, 255, 255, 0.83)':''}}></label>
                <li>
                    <button
                        onClick={() => scrollToSection("#home")}
                        className={activeSection === "#home" ? "active" : ""}
                        style={{color:theme==='dark'? activeSection === "#home"?'black':'rgb(57, 57, 57)' : activeSection === "#home"?'white':'rgb(157, 157, 157)'}}
                    >   
                        Home
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("#about")}
                        className={activeSection === "#about" ? "active" : ""}
                        style={{color:theme==='dark'?activeSection === "#about"?'black':'rgb(57, 57, 57)': activeSection === "#about"?'white':'rgb(157, 157, 157)'}}
                    >
                        About
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("#personaldetails")}
                        className={activeSection === "#personaldetails" ? "active" : ""}
                        style={{color:theme==='dark'?activeSection === "#personaldetails"?'black':'rgb(57, 57, 57)': activeSection === "#personaldetails"?'white':'rgb(157, 157, 157)'}}
                    >
                        Personal Info
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("#education")}
                        className={activeSection === "#education" ? "active" : ""}
                        style={{color:theme==='dark'? 
                            activeSection === "#education"?
                                    'black'
                                :
                                    'rgb(57, 57, 57)'
                            : 
                            activeSection === "#education"?
                                    'white'
                                :
                                    'rgb(157, 157, 157)'}}
                    >
                        Education
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("#projects")}
                        className={activeSection === "#projects" ? "active projectmenu" : "projectmenu"}
                        // style={{color:theme==='dark'?activeSection === "#skills"?'black':'rgb(57, 57, 57)': activeSection === "#skills"?'white':'rgb(157, 157, 157)'}}
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("#skills")}
                        className={activeSection === "#skills" ? "active" : ""}
                        style={{color:theme==='dark'?activeSection === "#skills"?'black':'rgb(57, 57, 57)': activeSection === "#skills"?'white':'rgb(157, 157, 157)'}}
                    >
                        Skills
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("#certifications")}
                        className={activeSection === "#certifications" ? "active" : ""}
                        style={{color:theme==='dark'?activeSection === "#certifications"?'black':'rgb(57, 57, 57)': activeSection === "#certifications"?'white':'rgb(157, 157, 157)'}}
                    >
                        Certifications
                    </button>
                </li>
                <li style={{border:"none"}}>
                    <button
                        onClick={() => scrollToSection("#contact")}
                        className={activeSection === "#contact" ? 'active' : "" }
                        style={{color:theme==='dark'? activeSection === "#contact"?'black':'rgb(57, 57, 57)':  activeSection === "#contact"?'white':'rgb(157, 157, 157)'}}
                    >
                        Contact
                    </button>
                </li>
            </ul>
            <div className="themeplace">
                    <input type="checkbox" id="checkbox_toggle_theme" className="checkbox2" onClick={handleTheme}/>
                    <label htmlFor="checkbox_toggle_theme" className="themebackground">
                        <span className="themeforground"></span>
                    </label>

            </div>

        </nav>
    )
}

export default Navbar;
