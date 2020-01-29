import { useEffect, useState, useRef } from 'react';
import socketIOClient from 'socket.io-client';

const useChat = () => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient('http://localhost:5000');
    return socketRef.current.disconnect();
  }, []);
};
export default useChat;