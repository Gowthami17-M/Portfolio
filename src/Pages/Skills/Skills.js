import React,{useEffect,useState} from "react";
import './Skills.css';


function Skills(props){
    const {theme} = props;


    const [prog, setprog] = useState([]);
    const [webdev, setwebdev] = useState([]);

    useEffect(() => {
        const initialShuffledprog = shuffle([
            [require('./languages/C.png'),'clang','C'],
            [require('./languages/CPP.png'),'cpp','C++'],
            [require('./languages/python.png'),'python','Python'],
            [require('./languages/JAVA.png'),'java','Java']
        ]);
        setprog(initialShuffledprog);
    }, []);


    useEffect(() => {
        const initialShuffledwebdev = shuffle([
            [require('./languages/HTML.png'),'html','HTML'],
            [require('./languages/JS.png'),'javascript','JavaScript'],
            [require('./languages/NODE.png'),'node','NodeJS'],
            [require('./languages/React.png'),'react','React'],
            [require('./languages/CSS.png'),'css','CSS'],
            [require('./languages/mongo.png'),'mongo','MongoDB']
        ]);
        setwebdev(initialShuffledwebdev);
    }, []);

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      }

    shuffle(prog)

    return(
        <div className={theme==="dark"?"skills_light skillContainer":'skillContainer'}>
                <h1>Skills I Posses</h1>
           <header className="programmingblock">
                <img src={require('./programming.png')} alt="Sorry!"/>
                <div className="innerblock">
                    <h1>Programming Languages</h1>
                    <ul>
                        <li>
                            I am a dedicated programming student with a solid understanding 
                            of  Python, C, Java and C++, actively seeking a role that will 
                            enable me to expand my knowledge and skills within a collaborative 
                            team environment.
                        </li>
                        <li> 
                            I am pursuing a stimulating programming opportunity that 
                            allows me to create, evaluate, and launch software 
                            solutions that surpass user requirements, using 
                            my expertise in programming.
                        </li>
                    </ul>
                    <div className="skillsimages">
                        {              
                            prog.map((image)=>(
                                <div className={image[1]} key={image[1]}>
                                    <img src={image[0]} alt="Sorry!" ></img>
                                    <label>{image[2]}</label>
                                </div>                                
                            ))         
                        }                    
                    </div>
                </div>
           </header>
           <hr/>
           <header className="webblock">
                <img src={require('./FrontEnd.png')} alt="Sorry!"/>
                <div className="innerblock">
                    <h1>Web Development</h1>
                    <ul>
                        <li>
                            Developing the websites using React to ensure 
                            they that the layout is responsive and user-friendly.
                        </li>
                        <li> 
                            In addition to building responsive website using 
                            React-Redux, I am also proficient in using modern 
                            front-end technologies such as HTML5, CSS3, and 
                            JavaScript to create visually appealing and 
                            interactive user interfaces.
                        </li>
                    </ul>
                    <div className="skillsimages frontend">
                        {              
                            webdev.map((image)=>(
                                <div className={image[1]} key={image[1]}>
                                    <img src={image[0]} alt="Sorry!" ></img>
                                    <label className="frontendnames">{image[2]}</label>
                                </div>                                
                            ))         
                        }                    
                    </div>
                </div>
                
           </header>
        </div>
    )
}

export default Skills;