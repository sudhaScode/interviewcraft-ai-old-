import React from "react";
import "./Splitter.css";
import Split from "react-split";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "../Chatbot/ActionProvider.jsx";
import MessageParser from "../Chatbot/MessageParser.jsx";
import config from "../Chatbot/config.js";

function Splitter() {

  return (
    <Split className="split" gutterAlign="end">
      <div className="left-pane"></div>
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