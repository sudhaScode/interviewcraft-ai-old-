import React from 'react';  
import Chat from './Chat';
import ChatAction from "./ChatAction";
import styles from "./Chat.module.css"


function Chatbot({isUploded}){
    const messages = [{
        name: "Craft.ai",
        key: "bot-init-res",
        response:"Welcome to GenAI! Your one-stop shop for landing your dream job.\nPlease logon to my application."
    },
    {
        name: "Craft.ai",
        key: "bot-init-res",
        response:"Please upload the resume on left panel to get start."
    },
    {
        name: "snb ram",
        key:"user-init-res",
        response:"Analyze my resume for [Job Title] and suggest improvements to make it a better fit."
    },
    {
        name: "Craft.ai",
        key: "bot-init-res",
        response:"Welcome to GenAI! Your one-stop shop for landing your dream job.\nPlease Login and Upload the Resume to continue"
    },
    {
        name: "snb ram",
        key:"user-init-res",
        response:"Analyze my resume for [Job Title] and suggest improvements to make it a better fit."
    },
    {
        name: "Craft.ai",
        key: "bot-init-res",
        response:"Welcome to GenAI! Your one-stop shop for landing your dream job.\nPlease Login and Upload the Resume to continue"
    },
    {
        name: "snb ram",
        key:"user-init-res",
        response:"Analyze my resume for [Job Title] and suggest improvements to make it a better fit."
    }
    ]

    return(
        <div className={styles.container}>
        <Chat messages={messages}/>   
        <ChatAction isUploded={isUploded}/>  
        </div>


    );
}
export default Chatbot;