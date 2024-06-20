import Splitter from "./Components/Splitter/Splitter";
import React,{useState} from "react";
import styles from "./Main.module.css";
import Header from "./Components/Header";

function Main() {
    const [isLogin, setIsLogin] = useState(false)
    const onAuthentication =(auth)=>{
      if(auth === "ba-ft-efo-er-re"){
        setIsLogin(true);
      }
      else{
        setIsLogin(false);
      }
    }
  return (
    <>
      <Header onAuthentication={onAuthentication} />
      <div className={styles.main}>
        <Splitter isLogin={isLogin} />
      </div>
    </>
  );
}
export default Main;
