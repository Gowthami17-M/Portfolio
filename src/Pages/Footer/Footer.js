import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer(){
    return(
        <div className="FooterContainer">
                <div>
                    <a href="#home"><FontAwesomeIcon icon={faAngleUp} className="uparrow"></FontAwesomeIcon></a>
                </div>
                <div className="socialmedia">
                        
                    
                        <Link to="https://www.linkedin.com/in/madhu-gowthami/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="uparrow linkedin"></FontAwesomeIcon></Link>
                        <Link to="https://github.com/Gowthami17-M" target="blank"><FontAwesomeIcon icon={faGithub} className="uparrow github"></FontAwesomeIcon></Link>
                </div>
                <hr/>
                <p className="footer_text"> Copyright © 2025 Madhu Gowthami. All Rights Reserved</p>
        </div>
    )
}

export default Footer;