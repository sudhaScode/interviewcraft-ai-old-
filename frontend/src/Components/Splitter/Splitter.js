import React, {useState} from "react";
import "./Splitter.css";
import Split from "react-split";
import LeftPaneMenu from "../LeftPaneMenu";
import ChatBot from "../Chatinterface/ChatBot"
/*  
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";
import config from "../Chatbot/config";
*/

function Splitter(){
  
  //console.log("islogin", isLogin)
    return(
        <Split className="split" gutterAlign="end">
            <div className="left-pane">
                <LeftPaneMenu  />
            </div>
            <div className="right-pane">
            {/*<Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}/>*/}
           <ChatBot />
            </div>
        </Split>
    );
}

export default Splitter;