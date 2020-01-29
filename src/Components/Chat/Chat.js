import React from 'react';
import MessageBox from './MessageBox';
import Messages from './Messages';

const Chat = () => {
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
      <MessageBox onSendMessage={message => console.log(message)} />
    </div>);
};

export default Chat;