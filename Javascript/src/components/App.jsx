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
            <div className='app'>
                <div className='nav'>
                    <ChannelSection 
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                </div>
                
            </div>
        )
    }
}

export default App