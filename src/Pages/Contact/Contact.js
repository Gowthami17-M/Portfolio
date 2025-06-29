import React, {useState,useEffect } from "react";
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck, faXmark, faL } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";


function Contact(props){

    const {theme} = props

    const [Result,setResult] = useState(false)
    const [mailfocused,setmailfocused] = useState([false,false,false,false,false]);
    const [content,setcontent] = useState(['','','','',''])
    const [issent,setissent] = useState(false);
    const [isdisable,setisdisable] = useState(false)
    const [width,setwidth] = useState(100)

    const [sending, setsending] = useState('Send')


    useEffect(() => {
        if (issent) {
          const timeoutId = setTimeout(() => {
            setissent(false);
            setResult(false);
            setisdisable(false)
            setwidth(100);
          }, 5000);
          return () => clearTimeout(timeoutId);
        }
      }, [Result,issent]);
    

      useEffect(() => {
        if (issent) {
          const timeoutId = setInterval(() => {
            setwidth((prevWidth) => prevWidth - 2);
          }, 90);
          return () => clearInterval(timeoutId);
        }
      }, [width, issent])


    const handleFocus = (e) =>{
        if(e.target.name==='hiimail'){
            setmailfocused([true,mailfocused[1],mailfocused[2],mailfocused[3],mailfocused[4]])
        }
        else if(e.target.name==='fname'){
            setmailfocused([mailfocused[0],true,mailfocused[2],mailfocused[3],mailfocused[4]])
        }
        else if(e.target.name==='emailid'){
            setmailfocused([mailfocused[0],mailfocused[1],true,mailfocused[3],mailfocused[4]])
        }
        else if(e.target.name==='subject'){
            setmailfocused([mailfocused[0],mailfocused[1],mailfocused[2],true,mailfocused[4]])
        }
        else if(e.target.name==='message'){
            setmailfocused([mailfocused[0],mailfocused[1],mailfocused[2],mailfocused[3],true])
        } 
    }


    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldIndex = getFieldIndex(fieldName);
        const updatedContent = [...content];
        updatedContent[fieldIndex] = e.target.value;
        setcontent(updatedContent);
      };



    const handleBlur = (e) => {
        
        if (e.target.name === "hiimail" && content[0] === "") {
          setmailfocused([false, mailfocused[1], mailfocused[2], mailfocused[3], mailfocused[4]]);
        } else if (e.target.name === "fname" && content[1] === "") {
            setmailfocused([mailfocused[0], false, mailfocused[2], mailfocused[3], mailfocused[4]]);
        } else if (e.target.name === "emailid" && content[2] === "") {
          setmailfocused([mailfocused[0], mailfocused[1], false, mailfocused[3], mailfocused[4]]);
        } else if (e.target.name === "subject" && content[3] === "") {
          setmailfocused([mailfocused[0], mailfocused[1], mailfocused[2], false, mailfocused[4]]);
        } else if (e.target.name === "message" && content[4] === "") {
          setmailfocused([mailfocused[0], mailfocused[1], mailfocused[2], mailfocused[3], false]);
        }
      };



      const getFieldIndex = (fieldName) => {
        const fieldNames = ['hiimail', 'fname', 'emailid', 'subject', 'message'];
        return fieldNames.indexOf(fieldName);
      };


    const sendHiiMail = (e) =>{
        setisdisable(true)
        e.preventDefault();
        const mail = document.getElementById('hiimail').value

        Axios
            .post(
  'https://portfolio-backend-gpgxrv7qa-madhu-gowthamis-projects.vercel.app/api/sendhiimail',
  { Email: mail, message: 'Hii' }
)
            .then(response=>{
                setResult(response.data.success);
                setissent(true)
                var copy = [...content]
                copy[0]=''
                setcontent(copy)

                var labelcopy = [...mailfocused]
                labelcopy[0] = false
                setmailfocused(labelcopy)
                setwidth(100)
            })
            .catch(()=>{
                setResult(false)
                setissent(true)
            })
    }


    const sendContactMail = (e) => {
      e.preventDefault();
      setisdisable(true);
      const name = document.getElementById('fname').value;
      const emailid = document.getElementById('emailid').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      Axios.post('https://portfolio-backend-gpgxrv7qa-madhu-gowthamis-projects.vercel.app/api/sendcontactform',{ 'Email': emailid, 'subject': subject, 'name': name, 'message': message })
        .then(response => {
          setResult(response.data.success);
          setissent(true);
          var copy = [...content];
          copy[1] = '';
          copy[2] = '';
          copy[3] = '';
          copy[4] = '';
          setcontent(copy);

          copy = [...mailfocused];
          copy[1] = false;
          copy[2] = false;
          copy[3] = false;
          copy[4] = false;
          setmailfocused(copy);
          setwidth(100);
    
        })
        .catch(() => {
          setResult(false);
          setissent(true);
        });
    };
    


    

    return(
        <div className="contactcontainer" style={{background:theme==='dark'?'white':''}}>

            <header className="text">
                <div className="wrapper">
                    <div className="letter">C</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>C</div>
                </div>

                <div className="wrapper">
                    <div className="letter">O</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>O</div>
                </div>
                <div className="wrapper">
                    <div className="letter">N</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>N</div>
                </div>
                <div className="wrapper">
                    <div className="letter">T</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>T</div>
                </div>
                <div className="wrapper">
                    <div className="letter">A</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>A</div>
                </div>
                <div className="wrapper">
                    <div className="letter">C</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>C</div>
                </div>
                <div className="wrapper">
                    <div className="letter">T</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>T</div>
                </div>
                <div className="wrapper"></div>
                <div className="wrapper"></div>

                <div className="wrapper">
                    <div className="letter">M</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>M</div>
                </div>
                <div className="wrapper">
                    <div className="letter">E</div>
                    <div className="shadow" style={{backgroundImage:theme==='dark'?'linear-gradient(to top, #000000d7,#000000b8,rgba(0, 0, 0, 0.526),rgba(0, 0, 0, 0.068),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))':'',backgroundClip:'text'}}>E</div>
                </div>
            </header>


            <div className="bgimage1"></div>
            <header className="maincontent">
                <header className="hellomsg">
                    <label style={{color:theme==='dark'?'white':''}}>Want to say Hii!</label>
                    <form onSubmit={sendHiiMail} name="Hiiform">
                        <input type="email" name='hiimail' id='hiimail' value={content[0]} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} required style={{color:theme==='dark'?'black':'',borderColor:theme==='dark'?'black':''}}/>       
                        <label id='hiilabel' className={mailfocused[0]?'mailID goup':'mailID'} >Enter your EmailID</label>
                        <button type="submit" className="sayhii" style={{borderColor:theme==='dark'?'black':'white'}} disabled={isdisable}><span>SayHii</span></button>
                    </form>
                </header>

                <hr/>

                <header className="contactform">
                    <img src={require("./contact.png")} className="contactimage" alt="contact" />

                    <form className="contactme" onSubmit={sendContactMail} name="contactform" id='contactform'>
                        <input type="text" name="fname" id='fname' value={content[1]} className="inputname" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} required style={{color:theme==='dark'?'black':'',borderColor:theme==='dark'?'black':''}}/>
                        <label className={mailfocused[1]?'fname nameup':'fname'}>Enter your Name</label>

                        <input type="email" name="emailid" id='emailid' value={content[2]} className="inputmail" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} required style={{color:theme==='dark'?'black':'',borderColor:theme==='dark'?'black':''}}/>
                        <label className={mailfocused[2]?'emailid mailup':'emailid'}>Enter your EmailID</label>

                        <input type="text" name="subject" id='subject' value={content[3]} className="inputsubject" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} required style={{color:theme==='dark'?'black':'',borderColor:theme==='dark'?'black':''}}/>
                        <label className={mailfocused[3]?'subject subjup':'subject'}>Subject</label>

                        <textarea name="message" id='message' value={content[4]} className="inputmessage" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} required style={{color:theme==='dark'?'black':'',borderColor:theme==='dark'?'black':''}}></textarea>
                        <label className={mailfocused[4]?'message msgup':'message'}>Message</label>

                        <button type="submit" className="send" disabled={isdisable}><FontAwesomeIcon icon={faPaperPlane} className="plane" id='planeanim'></FontAwesomeIcon> {sending}</button>
                    </form>
                </header>
            </header>

            <div className={issent?"sentstatus":"sentstatusdisabled"}>
                    {Result?
                        <pre><FontAwesomeIcon icon={faCheck} style={{color:"rgb(86, 215, 0)",fontWeight:"bolder"}}></FontAwesomeIcon> <label>Message sent successfully!</label></pre>
                      :
                        <pre><FontAwesomeIcon icon={faXmark} style={{color:"red",fontWeight:"bolder"}}></FontAwesomeIcon> <label>Message not sent! Try again later.</label></pre>
                    }
                    <span className="timer" style={{width:`${width}%`}}></span>
          </div>
        </div>
    )
}

export default Contact
