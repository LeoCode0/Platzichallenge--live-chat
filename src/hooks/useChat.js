import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE = "newMessage";
const SOCKET_SERVER = "http://localhost:3000";

export const useChat = (chatId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER, {
      query: { chatId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE, (message) => {
      const incomingMessage = {
        ...message,
        sender: message.senderId === socketRef.current.id,
      };

      setMessages((prevState) => [...prevState, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [chatId]);

  const sendMessage = (messageBody) => {
    console.log(messageBody);
    socketRef.current.emit(NEW_CHAT_MESSAGE, {
      body: messageBody,
      senderId: socketRef.current.id,
      hour: `${new Date().getHours()}:${new Date().getMinutes}`,
    });
  };

  return { messages, sendMessage };
};
