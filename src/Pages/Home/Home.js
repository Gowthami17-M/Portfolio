import React, { useEffect, useState } from "react";
import './Home.css'
import { Link } from "react-router-dom";


function Home(props){
    const {theme} = props;
    const s1 = 'Tech Enthusiast';
    const s2 = 'Free Lancer';
    const [text,setText] = useState('');
    const [ind,setInd] = useState(0);
    const [cur,setCur] = useState(s1);
    const [flag,setFlag] = useState(true);
    const[time,setTime] = useState(250);
    const [flag2,setFlag2] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          if (ind < cur.length && flag) {
            setTime(250);
            setText(text + cur[ind]);
            setInd(ind + 1);
            setFlag2(true)
          }
          else {
            setFlag(false)
            if(ind>=0){
                setTime(50)
                
                if(text.length===cur.length && flag2){
                    setFlag2(!flag2)
                    setTime(2000);
                }
                else{
                    setText(text.slice(0,-1))
                    setInd(ind-1);
                }
            }
            else{
                setInd(0)
                setFlag(true)
                setCur(cur===s1?s2:s1)
            }
            
          }
        }, time);
      
        return () => clearTimeout(timer);
      }, [ind, cur, flag]);

    return(
        <div className="homecontainer">
            <div className={theme==='dark'?'bgimage homelight':"bgimage"} style={{backgroundImage:theme==='dark'?'':''}}></div>
            <header style={{width:"auto", marginLeft:"5%"}} className="bg-text">
                    <h1 className="intro">Hi, I'm <span className={theme==='dark'?'name':"name name_dark"}><Link to="https://www.linkedin.com/in/madhu-gowthami/" target="_blank">Madhu Gowthami</Link></span></h1>
                    <i className="namedescription">{text}<span/></i>
                    <div className="CodingProfiles">
                        <Link to="https://www.hackerrank.com/profile/22501a1262" target="blank" style={{textDecoration: 'none'}}>
                            <div className="HackerRank coding"></div>
                        </Link>
                        <Link to="https://www.codechef.com/users/gowthami088" target="blank" style={{textDecoration: 'none'}}>
                            <div className="CodeChef coding"></div>
                        </Link>
                        <Link to="https://codeforces.com/profile/MADHU_GOWTHAMI" target="blank" style={{textDecoration: 'none'}}>
                            <div className="Codeforces coding"></div>
                        </Link>
                        <Link to="https://leetcode.com/u/GOWTHAMI_17/" target="blank" style={{textDecoration: 'none'}}>
                            <div className={theme==="dark"?'Leetcode_light Leetcode coding':'Leetcode coding'}></div>
                        </Link>
                    </div>
                    <div className="aboutbutton">
                        <a href="#about"><span>Know more</span></a>
                    </div>
            </header>
        </div>
    )
}
export default Home;