import Splitter from "./Components/Splitter/Splitter";
import React from "react";

function Main({isLogin}){

    return(
        <>
       <Splitter isLogin={isLogin}/>
        </>
    );

}
export default Main;