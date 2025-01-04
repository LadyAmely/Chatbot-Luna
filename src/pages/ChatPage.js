import React from 'react';
import "../assets/styles/components/chat/Chat.css";
import ChatInput from "../components/chat/ChatInput";
import ChatHistory from "../components/chat/ChatHistory";
import DesignHeader from "../components/DesignHeader/DesignHeader";

function ChatPage(){

    return(
        <div className="container">
            <div className="chat">
                <div className="chat-text">Chat with Luna</div>
                <ChatInput/>
                <div className="chat-line"></div>
                <div className="chat-text-above-history">Here’s what we talked about</div>
                <ChatHistory/>
                 <DesignHeader/>
            </div>

        </div>
    );

}

export default ChatPage;