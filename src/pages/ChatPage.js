import React from 'react';
import "../assets/styles/components/chat/Chat.css";
import ChatInput from "../components/chat/ChatInput";


function ChatPage(){

    return(
        <div className="container">
            <div className="chat">
                <div className="chat-text">Chat with Luna</div>
                <ChatInput/>
                <div className="chat-line"></div>
            </div>
        </div>
    );

}

export default ChatPage;