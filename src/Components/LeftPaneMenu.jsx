import React from "react";
import Resume from "./Resume";
import PromptsMenu from "./PromptsMenu";

function LeftPaneMenu({isLogin}){

    return(
       <>
        {isLogin? <PromptsMenu/>:<Resume/>}
       </>
    );
}

export default LeftPaneMenu;