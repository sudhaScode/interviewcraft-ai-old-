import React from "react";
import user from "../../assets/user.jpg"
// import '.../App.css'

export default function UserAvatar() {
  return (
    <div style={{ display: "flex", backgroundColor: "#F9EFEF" }}>
      <p style={{fontWeight:"600", color:"black", marginRight:"12px", marginTop:"5px"}}>User_Name</p>
      <img src={user} alt="User" className="bot" />
    </div>
  );
}
