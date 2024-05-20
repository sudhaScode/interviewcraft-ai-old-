import React, { useEffect } from "react";
import styles from "./ChatAction.module.css";
function ChatAction({isUploded}){
    const onPromptHander=(event)=>{
        event.preventDefault();
      // console.log("PROMTPT:: ",event.target.prompt.value)
    }
    const enhanceAPI = async()=>{
        try{
            const fileName = localStorage.getItem("fileName")
            console.log(fileName, "::local file")
        const response = await fetch("http://127.0.0.1:8000/enhance", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({fileName : fileName})
        })
        if(response.ok){
            console.log("Enhanced")
        }
        }
        catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
        if(isUploded){
          
             enhanceAPI()
        }

    },[isUploded])

    return (
        <div className={styles["chat-conatiner"]}>
            
             {isUploded && <form className={styles["style-container"]} onSubmit={onPromptHander}>
                <textarea className={styles["prompt-input"]} placeholder="Enter a prompt here" name="prompt"/>
               {/* <input type="text" name="prompt" placeholder="Enter a prompt here" className={styles["prompt-input"]}/>*/}
                <button type="submit" className={styles["send-button"]}><img src="https://cdn-icons-png.freepik.com/512/10109/10109981.png" alt="SEND" className={styles["send-icon"]}/></button>
            </form>}
                
        </div>
    );
}

export default ChatAction;