import React, { useState } from "react";
import "./Splitter.css";
import Split from "react-split";
import LeftPaneMenu from "../LeftPaneMenu";

import Chatbot from "react-chatbot-kit";
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";
import config from "../Chatbot/config";

// import Chatbot from "../ChatInterface/Chatbot";

function Splitter({ isLogin }) {
  const [isUploded, setIsUploaded] = useState(false);
  const checkUpload = (status) => {
    setIsUploaded(status);
  };

  //console.log("islogin", isLogin)
  return (
    <Split className="split" gutterAlign="end">
      <div className="left-pane">
        <LeftPaneMenu
          isLogin={isLogin}
          checkUpload={checkUpload}
          isUploded={isUploded}
        />
      </div>
      <div className="right-pane">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          isUploded={isUploded}
        />
        {/* <Chatbot isUploded={isUploded}/> */}
      </div>
    </Split>
  );
}

export default Splitter;
