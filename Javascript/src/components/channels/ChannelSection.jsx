import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component {
    render () {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Channels</strong>
                </div>
                <div className='panel-body channels'>
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    }
}

ChannelSection.propTypes = {
    addChannel: PropTypes.func.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired,
    channels: PropTypes.array.isRequired
}

export default ChannelSection