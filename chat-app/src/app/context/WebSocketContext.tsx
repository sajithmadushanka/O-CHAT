// Create a file called `useWebSocket.ts` or similar in your Next.js project.

"use client";
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface MessagePayload {
  channelId: string;
  message: string;
}

const useWebSocket = (channelId: string) => {
    const [messages, setMessages] = useState<{ msg: string; content: MessagePayload }[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io('http://localhost:5000'); // Adjust the URL if necessary
    setSocket(socket);

    socket.emit('join', { channelId });

    socket.on('onMessage', (message: { msg: string; content: MessagePayload }) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

    return () => {
      socket.disconnect();
    };
  }, [channelId]);

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit('newMessage', { channelId, message });
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;
