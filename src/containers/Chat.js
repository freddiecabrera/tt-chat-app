import React, { Component } from 'react';
import Header from '../components/Header';
import MessageBaloon from '../components/MessageBaloon';


class Chat extends Component {
  constructor (props) {
    super(props);

    this.state = {
      messages: [],
      messageValue: '',
      scrollPos: 653
    }
  }

  handleTextChange (e) {
    console.log(e.target.value);
    this.setState({ messageValue: e.target.value });
  }

  handleChatSend (e) {
    e.preventDefault();
    this.state.messageValue !== '' ?this.state.messages.push(this.state.messageValue) : null;
    this.setState({ messageValue: '' });
    this.messageScroll();
  }

  messageScroll () {
    if (typeof document !== 'undefined' && typeof document !== 'undefined' ) {
      var element = document.getElementById('messages-container');
      element.scrollTop = element.scrollHeight;
    }
  }

  render () {
    const { messages, messageValue } = this.state;
    return (
      <div className='container-fluid'>
        <Header />
        <div className='messages-container' id='messages-container'>
          {messages.map((item, index) => <MessageBaloon key={index} message={item} />)}
        </div>
        <form onSubmit={this.handleChatSend.bind(this)} className='input-container'>
          <input
            value={messageValue}
            onChange={this.handleTextChange.bind(this)}
            placeholder='iChat...'
            className='chat-input' type='text'
          />
          <button type='submit' className='send-btn'>Send</button>
        </form>
      </div>
    );
  }
};

export default Chat;
