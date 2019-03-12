import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
          id: '1'
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
          id: '2'
        }
      ],
      currentUser: {name: 'Raymond'}
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage = (event) => {
    event.preventDefault();

    // console.log(event);
    
    const id = this.state.messages.length + 1;
    const username = event.target.elements['username'].value || this.state.currentUser.name;
    const content = event.target.elements['text'].value;

    // console.log('ID - ' + id);
    // console.log('Username - ' + username);
    // console.log('Content - ' + content);

    const newMessage = {id, username, content};
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages});
    event.target.elements['text'].value = '';
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
    }, 3000);
  }

  render() {
    return (
      <div>
        <NavBar />  
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} onSubmit={this.sendMessage} />
      </div>
    );
  }

}

export default App;
