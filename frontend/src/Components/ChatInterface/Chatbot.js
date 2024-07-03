import React, { useEffect, useState } from 'react';  
import Chat from './Chat';
import ChatAction from "./ChatAction";
import styles from "./Chat.module.css";
import { useSelector, useDispatch } from 'react-redux'; 
import { push } from '../../reduxstore/Store';
import {chatInitialState} from "../../reduxstore/Store"


function Chatbot(){
    //console.log("messages:: ", messages)

    const dispatch = useDispatch();
    const pushChat =(message)=>{
        //setConversation(prevState=> [...prevState, message]);
        dispatch(push(message))
    }

    let storedMessages = useSelector(state=>state.chat.messages)
    const areMessages = sessionStorage.getItem("messages")
    const [messages, setMessages]  = useState(JSON.parse(areMessages) || storedMessages)
    const isLogin = useSelector(state=>state.flow.isLogin)

 
   useEffect(()=>{
        const areMessages = sessionStorage.getItem("messages")
        
        if(areMessages){
            //console.log(areMessages, "stored messages")
            setMessages(JSON.parse(areMessages));
        }
      
   }, [storedMessages])

   useEffect(()=>{
     if(!isLogin){
        setMessages(chatInitialState.messages);
     }
   },[isLogin])

    return(
        <div className={styles.container}>
            <Chat messages={messages}/>   
            <ChatAction  pushChat={pushChat}/>  
        </div>


    );
}
export default Chatbot;