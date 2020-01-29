import { useEffect, useState, useRef } from 'react';
import socketIOClient from 'socket.io-client';

const useChat = () => {
  const socketRef = useRef();
  const [messages, setMessages] = useState();

  useEffect(() => {
    socketRef.current = socketIOClient('http://localhost:5000');

    socketRef.current.on("newChatMessage", ({ message }) => {
      setMessages(message => [...messages, message]);
    });
    return socketRef.current.disconnect();
  }, []);

  const sendMessages = ({ message }) => {
    socketRef.current.emit("newChatMessage", { message });

  };
  return { messages, sendMessages };
};
export default useChat;