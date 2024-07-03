import React, {useState, useEffect} from "react";
import styles from "./Header.module.css";


function Header({onAuthentication}){
const [isLogin,setIsLogin] = useState(false);

 const onAuthenticationHandler=(event)=>{
  //console.log(isLogin,"login");
  if(!isLogin){
    localStorage.setItem("auth","ba-ft-efo-er-re");
  }
  else{
    localStorage.clear("auth");
  }
    setIsLogin((prevState)=>!prevState);
    onAuthentication(localStorage.getItem("auth"));

 }
 useEffect(()=>{
  localStorage.clear("auth");
 },[])

    return(
        <div className={styles.header}>
        <h1 className={styles.logo}>interviewCraft.ai</h1>
        <button className={styles.login} onClick={onAuthenticationHandler}>{isLogin?"Logout":"Login"}</button>
      </div>
    );
}

export default Header;