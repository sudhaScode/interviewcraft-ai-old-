import React from "react";
import Resume from "./Resume";
import PromptsMenu from "./PromptsMenu";

function LeftPaneMenu({isLogin,  checkUpload, isUploded}){

    return(
       <>
       {(isLogin && !isUploded) && <Resume checkUploaded={checkUpload}/>}
       {isUploded&&<PromptsMenu/>}        
       </>
    );
}

export default LeftPaneMenu;