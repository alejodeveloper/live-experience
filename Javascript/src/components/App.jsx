import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
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

    render() {
        return(
            <ChannelSection 
                channels={this.state.channels}
                addChannel={this.addChannel.bind(this)}
                setChannel={this.setChannel.bind(this)}
            />
        )
    }
}

export default App