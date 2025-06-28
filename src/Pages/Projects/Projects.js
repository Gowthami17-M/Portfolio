import React from "react";
import './Projects.css'
import { Link } from "react-router-dom";
function Projects(props){
    const {theme} = props;
    return(
        <div className={theme==='dark'?"projectContainer projectlight":"projectContainer"}>
                <h2 className="projecttitle">Projects</h2>
                <div className="projects">
                    <div className="projectblock">
                        <video autoPlay muted loop>
                            <source src={require('./videos/clock.mp4')}/>
                        </video>
                        <div className="aboutproject">
                            <p className="projectdescription">
                                A web application that displays the current
                                time in digital and analog format and can be configured
                                to display the time in user preferable format. This clock
                                application is responsive and accessible from any
                                browser. This application also equipped with a variety of
                                features like stopwatch and timer.
                            </p>
                            <div className="projectlinks">
                                <Link to="https://github.com/Gowthami17-M/Timer_Stopwatch" target="_blank" className="links from-top">View Code</Link>
                            
                                <Link to="https://gowthami17-m.github.io/Timer_Stopwatch/" target="_blank" className="links">View Demo</Link>
                            </div>
                        </div>
                    </div>

                    <div className="projectblock">
                        <video autoPlay muted loop>
                            <source src={require('./videos/prediction.mp4')}/>
                        </video>
                        <div className="aboutproject">
                            <p className="projectdescription" style={{color:"black"}}>
                                Heart Disease Prediction System helps users assess their risk of 
                                heart disease based on personal health data.
                                Predicts risk of heart disease based on user health inputs
                                Uses machine learning for quick and efficient prediction
                            </p>
                            <div className="projectlinks">
                                
                                <Link to="https://github.com/Gowthami17-M/heart_disease_predicton-project" target="_blank" className="links" style={{color:"black"}}>View Demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Projects;