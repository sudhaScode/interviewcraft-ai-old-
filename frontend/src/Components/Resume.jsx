import React, {useRef, useState, useEffect} from "react";
import styles from "./Resume.module.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



function Resume({checkUploaded}) {
    const inputRef = useRef("");
    const [filePlaceholder, setFilePlaceholder] = useState("SELECT RESUME");
    const [fileInput, setInput] = useState(null);
    const [loader, setLoader] = useState(false);
    const [timerId, setTimerID] = useState("");
  const onFileHandler=()=>{
    //const inputElement = document.getElementById("filePlaceholder");
    if(inputRef.current){
        inputRef.current.click();
    }   
  }
  const onUploadFile= async(event)=>{
    setLoader(true);
    event.preventDefault();
    /*
    let timer = setTimeout(()=>{
      //console.log("setting loader false");
    setInput(false)}, 2000);
    setTimerID(timer);*/
   // console.log(file, "selected file");
    setFilePlaceholder("SELECT RESUME");
    fetchAPI(fileInput)
 
  }
  const onFileChange=  (event)=>{
    const file = event.target.files[0];
    localStorage.setItem("fileName", file.name)
    setFilePlaceholder(file.name);
    setInput(file)
    //const slectedFile = new FileReader();
  }
  const fetchAPI = async(fileInput)=>{
    try{
      const fileData = new FormData();
      fileData.append('resume', fileInput)
      const response = await fetch("http://127.0.0.1:8000/resume", {
        method : "POST",
      body: fileData
    })
      //console.log("RESPONSE DEBUG::",response)
      if(response.ok){
        setLoader(false);
        checkUploaded(true);
      }
     }
     catch(error){
      console.log("An error occured", error)
     }
  }
  
    return (
        <div className={styles["form-container"]}>
           <form onSubmit={onUploadFile} >
           <input name="fileinput" type="file" required style={{display:"none"}} ref={inputRef} id="filePlaceholder" onChange={onFileChange}></input>
           <div>
           <button className={styles["resume-button"]} onClick={onFileHandler}>{filePlaceholder==="SELECT RESUME" &&<CloudUploadIcon className={styles["cloud-icon"]} />}<p className={styles.selectr}> {filePlaceholder==="SELECT RESUME"?filePlaceholder:"RESUME SELECTED"}</p></button>
           </div>
          <div className={styles["checkbox-one"]}> <input type="checkbox" id="checkOne" name ="resumeenhancing" defaultChecked/><label htmlFor="checkOne">Resume Enhancing</label></div>
          <div className={styles["checkbox-two"]}> <input type="checkbox" id="checkTwo" name ="interviewpreparation" defaultChecked/><label htmlFor="checkTwo" >Interview Preparation</label></div>
          <div className={styles["checkbox-three"]}> <input type="checkbox" id="checkThree" name ="mockinterview" defaultChecked/><label htmlFor="checkThree">Mock Interview</label></div>
           <button type="submit" className={filePlaceholder==="SELECT RESUME"?styles["submit-button"]:styles["submit-button-activated"]}>UPLOAD</button>
           </form>
           {loader && <p className={styles.selected}>Setting up prompts...</p>}
        </div>
    );
}

export default Resume;


/**
 import React from "react";
import styles from "./Resume.module.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
//import { grey } from '@mui/material/colors';


function Resume() {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
      


    return (
        <div className={styles["form-container"]}>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                backgroundColor="#b28704"
            >
                SELECT RESUME
                <VisuallyHiddenInput type="file" />
            </Button>

        </div>
    );
}

export default Resume;
 */