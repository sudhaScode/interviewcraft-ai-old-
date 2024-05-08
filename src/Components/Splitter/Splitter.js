import React from "react";
import "./Splitter.css";
import Split from "react-split";
import LeftPaneMenu from "../LeftPaneMenu";

function Splitter({isLogin}){
  
  //console.log("islogin", isLogin)
    return(
        <Split className="split" gutterAlign="end">
            <div className="left-pane">
                <LeftPaneMenu isLogin={isLogin}/>
            </div>
            <div className="right-pane"></div>
        </Split>
    );
}

export default Splitter;