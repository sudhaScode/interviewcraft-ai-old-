import React from "react";
import styles from "./Chat.module.css";


function Chat({ messages }) {
    const botimage = "https://images.unsplash.com/photo-1586374579358-9d19d632b6df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const userimage = "https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className={styles["chat-box"]}>
            {messages.map((chat) => (
            <div className={styles.interface}>
                {chat.name === "Craft.ai" ? <div className={styles["bot-container"]}>
                    <div className={styles.header}>
                        <img src={botimage} alt={chat.name} className={styles["chat-img"]} />
                        <span>{chat.name}</span>
                    </div>
                    <div className={styles["container-bot-message"]}>
                        <p>{chat.response}</p>
                    </div>
                </div> : <div className={styles["user-container"]}>
                    <div className={styles.header}>
                        <span>{chat.name}</span>
                        <img src={userimage} alt={chat.name} className={styles["chat-img"]} />
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