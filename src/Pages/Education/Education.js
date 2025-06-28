import React, { useState } from "react";
import './Education.css';
import { Link } from "react-router-dom";

function Education(props) {
    const { theme } = props;
    const [Education, setEducation] = useState(true);

    const handleRadioChange = () => {
        setEducation(!Education);
    };

    return (
        <div className={theme === "dark" ? 'Edu_light' : "EduContainer"}>
            <h1 className={!Education ? 'Educationheading' : 'Experienceheading'}>
                {Education ? 'Education' : 'Internships'}
            </h1>
            <div style={{ height: "max-content" }}>
                <div className="blockChanger">
                    <input type="radio" name="education" id="blockchanger1" onChange={handleRadioChange} />
                    <input type="radio" name="education" id="blockchanger2" onChange={handleRadioChange} />
                    <header className="labels">
                        <label htmlFor="blockchanger1">Education</label>
                        <label htmlFor="blockchanger2" className="label2">Internships</label>
                    </header>
                    <span style={{ background: theme === "dark" ? "" : 'linear-gradient(to right,rgba(124, 124, 255, 0.447),rgba(206, 161, 248, 0.589))' }}></span>
                </div>
            </div>

            <header className="eduandexp">
                {Education ? (
                    <div className="education">
                        <div className="edublocks">
                            <h1 className="title">PRASAD V POTLURI SIDDHARTHA INSTITUTE OF TECHNOLOGY</h1>
                            <label className="address">Kanuru, Vijayawada</label>
                            <label>Bachelor Degree of Information Technology</label>
                            <label>Batch: 2022-2026</label>
                            <label>CGPA: 8.9</label>
                        </div>
                        <div className="edublocks">
                            <h1 className="title">Narayana Junior College</h1>
                            <label className="address">Benz Circle, Vijayawada</label>
                            <label>Intermediate Education</label>
                            <label>Batch: 2018-2020</label>
                            <label>CGPA: 9.7</label>
                        </div>
                        <div className="edublocks">
                            <h1 className="title">Sravanthi High School</h1>
                            <label className="address">Gannavaram, Vijayawada</label>
                            <label>Secondary Education</label>
                            <label>Batch: 2017-2018</label>
                            <label>CGPA: 9.8</label>
                        </div>
                    </div>
                ) : (
                    <div className="experience">
                        <div className="internship AIML" style={{ backgroundColor: theme === "dark" ? 'rgba(255, 255, 255, 0.645)' : '' }}>
                            <div className="interncover">
                                <img alt="sorry!" className="internimg" src={require('./aicte.png')} />
                                <label className="interntitle">AI & ML</label>
                            </div>
                            <div className="internbody">
                                <label>AI & ML</label>
                                <p>
                                    Completing an internship in AI & ML at AICTE Eduskills
                                    was an illuminating experience. The program's comprehensive
                                    curriculum and practical approach provided me with invaluable
                                    insights into cutting-edge technologies. I am grateful
                                    for the opportunity to have honed my abilities in this dynamic field, and
                                    I look forward to applying these newfound skills in real-world applications.
                                </p>
                                <div>
                                    <Link to='https://drive.google.com/file/d/1nhZZSWz3oahMRHwGxnluq0JP2eb7ZrMz/view?usp=sharing' target="_blank" className="internbtn">
                                        <button className="interncertificate">
                                            Certificate
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Education;
