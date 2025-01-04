import React from 'react';
import "../../assets/styles/components/chat/ChatHistory.css";
import { FaHeart } from 'react-icons/fa';


function ChatHistory(){
    return(
        <div className="chat-history-container">
            <div className="container-left">
                   <FaHeart color="#a3a3f8" size={18} />
                <div className="message-text">Open a chat history</div>
            </div>
            <div className="message-close-icon">✖</div>
        </div>
    );
}

export default ChatHistory;