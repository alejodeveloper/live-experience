import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './user/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

import Socket from '../socket.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChannel: {},
            activeUser: {},
            channels: [],
            users: [],
            messages: [],
            connected: false
        };
    }

    // Lifecycle hooks

    componentDidMount() {
        // Connect to websocker
        let webSocket = this.webSocket = new Socket();
        socket.on('connect', this.onConnect.bind(this));
        socket.on('disconnect', this.onDisconnect.bind(this));
        socket.on('channel add', this.onAddChannel.bind(this));
        socket.on('user add', this.onAddUser.bind(this));
        socket.on('user edit', this.onEditUser.bind(this));
        socket.on('user remove', this.onRemoveUser.bind(this));
        socket.on('message add', this.onAddMessage.bind(this));
    }

    // *-*End lifecycle hooks*-*

    onConnect() {
        this.setState({connected: true});
        this.webSocket.emit('user subscribe');
        this.webSocket.emit('channel subscribe');
    }

    onDisconnect() {
        this.setState({connected: false});
        this.webSocket.emit('user unsubscribe');
        this.webSocket.emit('channel unsubscribe');

    }

    newChannel(channel){
        let { channels } = this.state;
        channels.push(channel);
        this.setState({channels});
    }

    onAddUser(user){
        let { users } = this.state;
        users.push(user);
        this.setState({users});
    }

    onRemoveUser(removeUser) {
        let { users } = this.state;
        users = users.filter(user => {
            return user.id !== removeUser.id
        });
        this.setState({users});
    }

    onEditUser(editUser){
        let {users} = this.state;
        users = users.map(user => {
            if (editUser.id === user.id){
                return editUser;
            }
            return user;
        });
        this.setState({users});
    }

    onAddChannel(channel) {
        let {channels} = this.state;
        channels.push(channel);
        this.setState({channels});
    }

    addChannel(name){
        this.webSocket.emit('channel add', {name});

        // TODO: Add server calls here
        
    }
    setChannel(activeChannel) {
        this.setState({activeChannel});
        this.webSocket.emit('channel unsubscribe');
        this.setState({'messages': []});
        this.webSocket.emit(
            'message subscribe',
            {channelId: activeChannel.id}
        );
    }

    setUserName(name){
        this.webSocket.emit('edit user', { name });
        // Set the name value and id into the channels array
    }

    setUser(activeUser) {
        this.setState({ activeUser });
        // TODO: Get users messages

    }

    onAddMessage(message) {
        let {messages } = this.state;
        messages.push(message);
        this.setState({ messages });
    }

    addMessage(body) {
        let {activeChannel} = this.state;
        this.webSocket.emit('message add', 
            {channelId: activeChannel.id, body}
        );
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