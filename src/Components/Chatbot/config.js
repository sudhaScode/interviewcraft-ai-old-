import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar.js";
import UserAvatar from "./UserAvatar.js";

const config = {
  botName: "interViewCraft.ai",
  initialMessages: [
    createChatBotMessage(`Please Login and Upload the Resume to continue`),
  ],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
    header: () => null
  }
};

export default config;
