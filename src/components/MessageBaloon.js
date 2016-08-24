import React from 'react';

const MessageBaloon = props => (
  <div className='message left'>
    <div className='ballon-messages message-text'>{props.message}</div>
  </div>
);

export default MessageBaloon;
