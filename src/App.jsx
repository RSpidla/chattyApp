import React, {Component} from 'react';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  render() {
    return (
      // <h1>Hello React :)</h1>

      <div>
        <ChatBar></ChatBar>,
        <Message>
          <MessageList></MessageList>
        </Message>
      </div>

      
      // <Message></Message>


    );
  }
}
export default App;
