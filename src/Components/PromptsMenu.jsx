import React, {useState} from "react";
import styles from "./PromptsMenu.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { resume, interview, mock } from "../constants/prompts";

function PromptsMenu() {
    const [show, setShow] = useState(false);
    const [isResume, setIsResume] = useState(false);
    const [isInterview, setIsInterview] = useState(false);
    const [isMock, setIsMock] = useState(false);


    const onClickoptionHandler=(event)=>{
      let eventName = event.target.name;
      //console.log("EVENT DEBUG:: ", eventName )
      switch(eventName){
        case "resume":
            setIsMock(false)
            setIsInterview(false);
            setIsResume(true);
            break;
        case "interview":
            setIsInterview(true);
            setIsMock(false)
            setIsResume(false)
            break;
        case "mock":
            setIsResume(false);
            setIsInterview(false);
            setIsMock(true);
            break;
        default:
            console.error("Unknown event triggered");    
      }
    }

    return (
        <div className={styles["left-nav"]}>
            <div className={styles["nav-conatiner"]}>
                    <button className={styles["dropdown-prompts"]} onMouseOver={() => { setShow(true) }}>
                        prompts<KeyboardArrowDownIcon className={styles["drop-icon"]} />
                    </button>
                {show &&
                        <div className={styles["prompt-menu"]} onMouseLeave={() => { setShow(false) }}>
                            <ul>
                                <li><button className={isResume?styles["menu-button-active"]:styles["menu-button"]} onClick={onClickoptionHandler} name="resume">Resume Enhancement</button></li>
                                <li><button className={isInterview?styles["menu-button-active"]:styles["menu-button"]} onClick={onClickoptionHandler} name="interview">Interview Preparation</button></li>
                                <li><button className={isMock?styles["menu-button-active"]:styles["menu-button"]} onClick={onClickoptionHandler} name= "mock">Mock Interview</button></li>
                            </ul>
                        </div>}
            </div>

            {isResume && <>
            <p className={styles.predefined}>Prompts for Resume Enhancement</p>
            <div className={styles["prompts-container"]}>
                 {resume.map((prompt,index)=>(<p key={index}>{prompt}</p>))}</div> </>}
            {isInterview && <>
                <p className={styles.predefined}>Prompts for Resume Enhancement</p>
            <div className={styles["prompts-container"]}> {interview.map((prompt,index)=>(<p key={index}>{prompt}</p>))}</div> </>}
            {isMock && <>
                <p className={styles.predefined}>Prompts for Resume Enhancement</p>
            <div className={styles["prompts-container"]}> {mock.map((prompt,index)=>(<p key={index}>{prompt}</p>))}</div> </>}

        </div>

    );
}

export default PromptsMenu;