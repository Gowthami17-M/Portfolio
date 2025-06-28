import React from "react";
import './Personal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faLocationDot, faCamera, faPaintBrush} from '@fortawesome/free-solid-svg-icons'

function Personal(props){
    const {theme}=props;
    return(
        <div className={theme==='dark'?'Personal_light':"PersonalContainer"}>
            <h1 className="personallabel" style={{filter:theme==="dark"?'drop-shadow(5px 3px 4px black)':''}}>Personal Details</h1>
            <header className="personalContent">
                <div>
                    <img src={require('./infopng/Myinfo.png')} alt="My Info!"></img>
                    <ul>
                        <li className="PersonalCaption">My Info</li>
                        <li>
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> 17-JUNE-2003
                        </li>
                        <li>
                           <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Vijayawada, AndhraPradesh
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={require('./infopng/hobby.png')} alt="My Info!"></img>
                    <ul>
                        <li className="PersonalCaption">Interests</li>
                        <li>
                            <FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon> Drawing(Sketching)
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Photography
                        </li>
                    </ul>
                </div>
                <div className="language">
                    <img src={require('./infopng/translate.png')} alt="My Info!"></img>
                    <ul style={{listStyleType:"disc"}}>
                        <li className="PersonalCaption" style={{listStyleType:"none"}}>Languages Known</li>
                            <li className="li-align">
                                Telugu
                            </li>
                            <li className="li-align">
                                English
                            </li>
                            <li className="li-align">
                                Hindi
                            </li>
                    </ul>
                </div>
                <div>
                    <img src={require('./infopng/hands-up.png')} alt="My Info!"></img>
                    <ul>
                        <li className="PersonalCaption">Volunteer</li>
                            <li style={{listStyleType:"disc", marginLeft:"30px"}}>
                                Member in Anti-Ragging Awareness - PVPSIT
                            </li>

                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Personal;