import React, { component } from 'react';
import Channel from './Channel.jsx'


class ChannelList extends component {
    render() {
        return (
            <ul>
                {
                    this.props.channels.map( channel => {
                        <Channel 
                            channel={channel}
                            setChannel={this.props.setChannel}
                        />
                    })
                }
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired
}

export default ChannelList