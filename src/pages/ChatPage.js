import React, {useState} from 'react';
import "../assets/styles/components/chat/Chat.css";
import ChatInput from "../components/chat/ChatInput";
import ChatHistory from "../components/chat/ChatHistory";


function ChatPage(){

    const [response, setResponse] = useState("");

    return(
        <div className="container">
            <div className="chat">
                <div className="chat-text">Chat with Luna</div>
                <ChatInput setResponse={setResponse}/>
                <div className="chat-line"></div>
                 {response && <div className="response">{response}</div>}
                <ChatHistory/>
            </div>
        </div>
    );

}

export default ChatPage;