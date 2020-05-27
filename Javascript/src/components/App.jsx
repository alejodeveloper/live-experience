import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './user/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChannel: {},
            activeUser: {},
            channels: [],
            users: [],
            messages: []
        };
    }

    addChannel(name){
        let { channels } = this.state;
        // Set the name value and id into the channels array
        channels.push({id: channels.length, name});
        this.setState({ channels });
        // TODO: Add server calls here
    }
    setChannel(activeChannel) {
        this.setState({activeChannel});
        // TODO: Get channels messages

    }

    setUserName(name){
        let { users } = this.state;
        // Set the name value and id into the channels array
        users.push({id: users.length, name});
        this.setState({ users });
        // TODO: Add server calls here
    }
    setUser(activeUser) {
        this.setState({ activeUser });
        // TODO: Get users messages

    }

    addMessage(body) {
        let {messages, users } = this.state;
        let createdAt = new Date;
        let author = users.length > 0 ? users[0].name : 'anonymous';
        messages.push({id: messages.length, body, createdAt, author});
        this.setState({ messages });
    }

    render() {
        return(
            <div className='app'>
                <div className='nav'>
                    <ChannelSection 
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                    <UserSection 
                        {...this.state}
                        setUserName={this.setUserName.bind(this)}
                        setUser={this.setUser.bind(this)}
                    />
                </div>
                <MessageSection 
                    {...this.state}
                    addMessage={this.addMessage.bind(this)}
                />
            </div>
        )
    }
}

export default App