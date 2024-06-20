import React from "react";
import styles from "./Chat.module.css";
import chatbot from "../../assets/chatbot.jpg";
import user from "../../assets/user.jpg";

function Chat({ messages }) {
    return (
        <div className={styles["chat-box"]}>
            {messages.map((chat) => (
            <div className={styles.interface}>
                {chat.name === "Craft.ai" ? <div className={styles["bot-container"]}>
                    <div className={styles.header}>
                        <img src={chatbot} alt={chat.name} className={styles["chat-img"]} />
                        <span>{chat.name}</span>
                    </div>
                    <div className={styles["container-bot-message"]}>
                        <p>{chat.response}</p>
                    </div>
                </div> : <div className={styles["user-container"]}>
                    <div className={styles.header}>
                        <span>{chat.name}</span>
                        <img src={user} alt={chat.name} className={styles["chat-img"]} />
                    </div>
                    <div className={styles["container-user-message"]}>
                        <p>{chat.response}</p>
                    </div>
                </div>}
            </div>))}
        </div>
    );
}
export default Chat;