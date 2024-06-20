import React from "react";
import chatbot from "../../assets/chatbot.jpg";

export default function Avatar() {
  return (
    <div style={{display:"flex", backgroundColor: "#F9EFEF"}}>
      <img src={chatbot} alt="Bot" className="bot" />
      <p style={{fontWeight:"600", color:"black", marginLeft:"12px"}}>Craft.ai</p>
    </div>
  );
}