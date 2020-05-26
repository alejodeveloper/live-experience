import React, { Component } from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component {
    render () {
        return (
            <div>
                <ChannelList {...this.props} />
                <ChannelForm {...this.props} />
            </div>
        )
    }
}

ChannelSection.propTypes = {
    addChannel: React.PropTypes.func.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    channels: React.PropTypes.array.isRequired
}

export default ChannelSection