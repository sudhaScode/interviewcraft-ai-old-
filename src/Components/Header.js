import React from "react";
import styles from "./Header.module.css";


function Header(){
   

    return(
        <div className={styles.header}>
        <h1 className={styles.logo}>interviewCraft.ai</h1>
        <button className={styles.login}>Login</button>
      </div>
    );
}

export default Header;