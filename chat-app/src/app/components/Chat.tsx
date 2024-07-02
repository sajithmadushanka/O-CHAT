"use client";
import React, { useEffect, useState } from 'react';
import useWebSocket from '../context/WebSocketContext'; // Adjust the path if necessary

interface ChatProps {
  channelId: string;
}

const Chat: React.FC<ChatProps> = ({ channelId }) => {
  const { messages, sendMessage } = useWebSocket(channelId);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage('');
  };
  useEffect(() => {
    console.log(messages);
  }, [messages]);
  

  return (
    <div>
      <div>
      {messages.map((msg, index) => (
          <div key={index}>{msg.content.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
