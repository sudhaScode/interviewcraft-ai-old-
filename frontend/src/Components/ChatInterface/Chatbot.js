import React, { useEffect, useState } from 'react';  
import Chat from './Chat';
import ChatAction from "./ChatAction";
import styles from "./Chat.module.css"


function Chatbot({isUploded}){
    const messages = [{
        name: "Craft.ai",
        key: "bot-init-res",
        response:"Welcome to GenAI! Your one-stop shop for landing your dream job.\nPlease logon to my application."
    },
    ]
    const [conversation, setConversation] = useState(messages);
    const pushChat =(message)=>{
        setConversation(prevState=> [...prevState, message]);
    }
  useEffect(()=>{
    if(isUploded){
        //console.log("UPLOAD DEBUGG", isUploded)
        const message =  {
            name: "Craft.ai",
            key: "bot-resume-res",
            response:"Resume is under construction...\nPlease wait for best improvements"
        }
        pushChat(message);
        }
  }, [isUploded])

    return(
        <div className={styles.container}>
        <Chat messages={conversation}/>   
        <ChatAction isUploded={isUploded} pushChat={pushChat}/>  
        </div>


    );
}
export default Chatbot;