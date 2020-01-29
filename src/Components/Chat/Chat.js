import React from 'react';
import MessageBox from './MessageBox';
import Messages from './Messages';
import useChat from './Messages/_useChat';

const Chat = () => {
  const { messages, senMessage } = useChat();

  return (
    <div>
      <Messages messages={[
        'Message 1',
        'Message 2',
        'Message 3',
        'Message 4',
        'Message 5',
        'Message 6',
      ]} />
      <MessageBox onSendMessage={message => senMessage({ message })} />
    </div>);
};

export default Chat;