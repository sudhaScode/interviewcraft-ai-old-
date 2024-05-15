import React from "react";
import styles from "./ChatAction.module.css";
function ChatAction({isUploded}){
    const onPromptHander=(event)=>{
        event.preventDefault();
       console.log("PROMTPT:: ",event.target.prompt.value)
    }

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