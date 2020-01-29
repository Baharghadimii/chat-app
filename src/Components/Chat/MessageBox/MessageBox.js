import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const MessageBox = () => {
  const [message, setMessage] = useState('');

  return <TextField
    fullWidth
    multiline
    label="Message"
    rows="4"
    onChange={e => setMessage(e.target.value)}
    onKeyDown={e => e.preventDefault()}
    value={message} />;

};
export default MessageBox;