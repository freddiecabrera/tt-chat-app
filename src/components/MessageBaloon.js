import React from 'react';

const MessageBaloon = props => (
  <div className='message left'>
    <div className='ballon-messages message-text'>{props.message}</div>
  </div>
);


MessageBaloon.propTypes = {
  message: React.PropTypes.string
};

export default MessageBaloon;
