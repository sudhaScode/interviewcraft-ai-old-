import Splitter from "./Components/Splitter/Splitter";
import React from "react";
import styles from "./Main.module.css";

function Main({isLogin}){

    return(
        <div className={styles.main}>
       <Splitter isLogin={isLogin}/>
        </div>
    );

}
export default Main;