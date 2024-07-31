import { NavLink } from "react-router-dom";
import styles from "../Header.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAuth, handleUpload } from "../../reduxstore/Store";




function NavBar(){
    const isLogin = useSelector(state=>state.flow.isLogin)
    const dispatch = useDispatch()
   // console.log(isLogin, "login state")
    const navigate = useNavigate()

    const loginHandler =(event)=>{
        //console.log(event.target.name)
        if(event.target.name === "login"){
            navigate("/login")
        }
        else{
            localStorage.clear("auth")
            sessionStorage.clear()
            dispatch(handleAuth(false))
            dispatch(handleUpload(false))
            //dispatch(push(chatInitialState))
        }
            
    }
    useEffect(()=>{
        const auth = localStorage.getItem("auth")
        if(auth === "ba-ft-efo-er-re"){
            dispatch(handleAuth)
        }
    },[])

    return(
        <div className={styles.header}>
            <NavLink to="/prompt" className={styles.logo}> <h1 >interviewCraft.ai</h1></NavLink>
            <button className={styles.login} onClick={loginHandler}name={!isLogin?"login":"logout"}>{!isLogin?"Login":"Logout"}</button>
      </div>
    );
}
export default NavBar;