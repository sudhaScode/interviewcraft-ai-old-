import React, { useEffect, useState } from 'react';  
import Chat from './Chat';
import ChatAction from "./ChatAction";
import styles from "./Chat.module.css";
import { useSelector, useDispatch } from 'react-redux'; 
import { push } from '../../reduxstore/Store';


function Chatbot(){
    //console.log("messages:: ", messages)
    const dispatch = useDispatch();
    const pushChat =(message)=>{
        //setConversation(prevState=> [...prevState, message]);
        dispatch(push(message))
    }

    return(
        <div className={styles.container}>
            <Chat/>   
            <ChatAction  pushChat={pushChat}/>  
        </div>


    );
}
export default Chatbot;