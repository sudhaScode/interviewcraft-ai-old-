import React, { useEffect } from "react";
import styles from "./ChatAction.module.css";
import { useSelector,useDispatch } from "react-redux";
import { push } from "../../reduxstore/Store";


function ChatAction(){
    const isUploaded = useSelector(state=>state.flow.isUploaded)
    const messages = useSelector(state=>state.chat.messages)
    const dispatch = useDispatch() 

    const onPromptHander=(event)=>{
        event.preventDefault();
        console.log("PROMTPT:: ",event.target.prompt.value)
        let payload = {
            name: "user",
            key: "user-resume-mes",
            response:event.target.prompt.value
        }
        const persistedMessages =JSON.parse( sessionStorage.getItem("messages"))
        persistedMessages.push(payload)
        sessionStorage.setItem("messages", JSON.stringify(persistedMessages))
        dispatch(push(payload));
    }
    const enhanceAPI = async()=>{
        try{
            const fileName = localStorage.getItem("fileName")
           // console.log(fileName, "::local file")
        /*
        const response = await fetch("http://127.0.0.1:8000/enhance", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({fileName : fileName})
        })
        if(response.ok){
            console.log("Enhanced")
        }*/
        }
        catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
        if(isUploaded){
          
             enhanceAPI()
        }

    },[isUploaded])

    return (
        <div className={styles["chat-conatiner"]}>
            
             {isUploaded ? <form className={styles["style-container"]} onSubmit={onPromptHander}>
                <textarea className={styles["prompt-input"]} placeholder="Enter a prompt here" name="prompt"/>
               {/* <input type="text" name="prompt" placeholder="Enter a prompt here" className={styles["prompt-input"]}/>*/}
                <button type="submit" className={styles["send-button"]}><img src="https://cdn-icons-png.freepik.com/512/10109/10109981.png" alt="SEND" className={styles["send-icon"]}/></button>
            </form>:<input type="text" value="Please upload the resume to open chat window" className={styles["prompt-chat"]} readOnly />}
                
        </div>
    );
}

export default ChatAction;