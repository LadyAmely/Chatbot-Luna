import React from 'react';
import "../../assets/styles/components/chat/ChatInput.css";

function ChatInput(){

    return(
        <div className="chat-input">
            <input className="input" type="text" placeholder="Send a message to Luna"/>
        </div>
    );

}

export default ChatInput;