import React, { useState, useEffect } from "react";
import './Certifications.css'
import { Link } from "react-router-dom";

function Certifications(props){
    const {theme} = props;
    const [certificates, setCertificates] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
        const initialShuffledCertificates = shuffle([
            [require('./certifications/DBMS.jpg'),'pys','https://drive.google.com/file/d/1XDOZg-rXT-Qy0w5T7l92Nf74d_fTvRmO/view?usp=sharing'],
            [require('./certifications/java_hackerrank.jpg'),'jh','https://www.hackerrank.com/certificates/360030f2fb09'],
            [require('./certifications/java fun.jpg'),'js','https://drive.google.com/file/d/1Ox26zLloc3HE-mgsC61pBoV8MMe0F9xd/view?usp=sharing'],
            [require('./certifications/SI.jpg'),'si','https://smartinterviews.in/certificate/a014598f'],
            [require('./certifications/Frontened.jpg'),'ph','https://drive.google.com/file/d/1yLgC2Uzj_ol-d_gwl53oFMmFvL05KtbP/view?usp=sharing'],
            [require('./certifications/spoken_tutorial.jpg'),'ps','https://drive.google.com/file/d/1lez17gnYIMuMrLYJCVEoJf4vYrt0gMUZ/view?usp=sharing'],
            [require('./certifications/User_centric.jpg'),'uc','https://drive.google.com/file/d/1ehl3yaEky9fNqMdX7dN7nj6aPEZATzmY/view?usp=sharing'],
            [require('./certifications/cloud computing.jpg'),'jn','https://drive.google.com/file/d/1HMeuXEgMWclbM4TFbwSy5aGBrwBS4Dvr/view?usp=sharing'],
            [require('./certifications/TCS_codevita.jpg'),'pn','https://drive.google.com/file/d/1o2Mc_-zHC7YXalqailBDfXYreqEFmw0l/view?usp=sharing'],
            [require('./certifications/c_springboard.jpg'),'fed','https://drive.google.com/file/d/1P8Q5wWp1UzsQQZs0oKosd7W_OQLMGB3f/view?usp=sharing'],
        ]);
        setCertificates(initialShuffledCertificates);
        setCount(initialShuffledCertificates.slice(0,4));
    }, []);

    const handleClick = () => {
        count.length > 4 ? setCount(count.slice(0,4)) : setCount(certificates);
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
          ];
        }
        return array;
    }
    
    return(
        <div className={theme === "dark" ? "certificationscontainer certifications_light" : 'certificationscontainer'}>
            <h1 className="certificationsheading">certifications</h1>
            <header className="certificates">
                {count.map((images, index) => (
                    <div key={index} className="newflip-box">
                        <div className={"newflip-box-inner " + images[1]}>
                            <div className="newflip-box-front ">
                                <img src={images[0]} alt="Sorry" className={images[1]}></img>
                            </div>
                            <div className="newflip-box-back">
                                <img src={images[0]} alt="Certificate"></img>
                                <label>Go through the below button to view certificate</label>
                                <a href={images[2]} className="linktag" target="_blank" rel="noopener noreferrer">Click Here</a>
                            </div>
                        </div>
                    </div>
                ))}
            </header>
            <footer>
                <button className="btn btn-5" style={{ color: theme === 'dark' ? 'black' : 'white', outlineColor: theme === 'dark' ? 'black' : '' }} onClick={handleClick}>
                    {count.length > 4 ? 'Show Less' : 'Show More'}
                </button>
            </footer>
        </div>
    )
}

export default Certifications;
