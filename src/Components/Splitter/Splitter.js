import React from "react";
import "./Splitter.css";
import Split from "react-split";

function Splitter(){

    return(
        <Split className="split" gutterAlign="end">
            <div className="left-pane"></div>
            <div className="right-pane"></div>
        </Split>
    );
}

export default Splitter;