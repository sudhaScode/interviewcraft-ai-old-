import React from "react";
import Resume from "./Resume";
import PromptsMenu from "./PromptsMenu";

function LeftPaneMenu({isLogin,  checkUpload, isUploded}){

    return(
       <>
    
        {isLogin &&<>
         {isUploded && <PromptsMenu/>}
        <Resume checkUploaded={checkUpload}/>
        </>}
        
       </>
    );
}

export default LeftPaneMenu;