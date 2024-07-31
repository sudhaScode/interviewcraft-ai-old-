import React, { useEffect, useRef, useState } from "react";
import styles from "./ChatAction.module.css";
import { useSelector,useDispatch } from "react-redux";
import { push } from "../../reduxstore/Store";
import axios from "axios"


function ChatAction(){
    const isUploaded = useSelector(state=>state.flow.isUploaded)
    const messages = useSelector(state=>state.chat.messages)
    const [isPromting, setIsPromting] = useState(false)
    const ref = useRef(null)
    const dispatch = useDispatch() 

    const onPromptHander=async (event)=>{
        event.preventDefault();
       // console.log("PROMTPT:: ",event.target.prompt.value)
       setIsPromting(true)

        let payload = {
            name: "User",
            key: "user-resume-mes",
            response:event.target.prompt.value
        }
        const persistedMessages =JSON.parse( sessionStorage.getItem("messages"))
        persistedMessages.push(payload)
        sessionStorage.setItem("messages", JSON.stringify(persistedMessages))
        dispatch(push(payload));
        const data = await fetchAPI(payload.response)
        console.log("got it:: ",data.response)
        const result = {
            name: "Craft.ai",
            key: "bot-init-res",
            response:data.response
        }
       // console.log(result, "dadaas")
        persistedMessages.push(result)
        sessionStorage.setItem("messages", JSON.stringify(persistedMessages))
        dispatch(push(result));
        if(ref.current){
            ref.current.value=""
           }
        setIsPromting(false)
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

    const fetchAPI=async(prompt)=>{
        try{
            const fileName = localStorage.getItem("fileName")
            const response = await axios.post("http://127.0.0.1:8000/prompt", {
                prompt:prompt,
                file_name: fileName
            } );
            //console.log(response)
            if(response.status === 200){
                const data=  await response.data;
                return data;
            }
            else{
                throw Error("Prompt Failed")
            }
        }
        catch(error){
            console.error(error)
        }
        
    }


    // useEffect(()=>{
    //     if(isUploaded){
    //          enhanceAPI()
    //     }

    // },[isUploaded])
    // useEffect(()=>{
    //     window.addEventListener("keypress", (event)=>{
    //         if(event.key === "Enter"){
    //             onPromptHander(event)
    //         }
    //     })

    //     return ()=>{
    //         window.removeEventListener("keypress")
    //     }

    // },[])

    return (
        <div className={styles["chat-conatiner"]}>
            
             {isUploaded ? <form className={styles["style-container"]} onSubmit={onPromptHander}>
                <textarea className={styles["prompt-input"]} ref={ref} placeholder="Enter a prompt here" name="prompt"/>
               {/* <input type="text" name="prompt" placeholder="Enter a prompt here" className={styles["prompt-input"]}/>*/}
                <button type="submit" className={styles["send-button"]} disabled ={isPromting}><img src="https://cdn-icons-png.freepik.com/512/10109/10109981.png" alt="SEND" className={styles["send-icon"]}/></button>
            </form>:<input type="text" value="Please upload the resume to open chat window" className={styles["prompt-chat"]} readOnly />}
                
        </div>
    );
}

export default ChatAction;