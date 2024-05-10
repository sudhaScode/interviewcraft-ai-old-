import React from "react";
import "./Splitter.css";
import Split from "react-split";
import LeftPaneMenu from "../LeftPaneMenu";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";
import config from "../Chatbot/config";

function Splitter({isLogin}){
  
  //console.log("islogin", isLogin)
    return(
        <Split className="split" gutterAlign="end">
            <div className="left-pane">
                <LeftPaneMenu isLogin={isLogin}/>
            </div>
            <div className="right-pane">
            <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
            </div>
        </Split>
    );
}

export default Splitter;