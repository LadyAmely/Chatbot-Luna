import React, {useState} from 'react';
import "../../assets/styles/components/chat/ChatInput.css";

function ChatInput({ setResponse }){

    const [message, setMessage] = useState("");


    const sendMessage = async () => {
        if (!message) return alert("Message cannot be empty!");

        try {
            const res = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [{ role: "user", content: message }]
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Error sending message");
            }

            const data = await res.json();
            setResponse(data.response);
            setMessage("");
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    };


    return(
        <div className="chat-input">
            <input
                className="input"
                type="text"
                placeholder="Send a message to Luna"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />


        </div>
    );

}

export default ChatInput;