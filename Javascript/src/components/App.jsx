import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './user/UserSection.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            users: []
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

    serUserName(name){
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
                        serUserName={this.serUserName.bind(this)}
                        setUser={this.setUser.bind(this)}
                    />
                </div>
                
            </div>
        )
    }
}

export default App