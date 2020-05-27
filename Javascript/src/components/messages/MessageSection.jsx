import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageForm from './MessageForm.jsx';
import MessagesList from './MessagesList.jsx';

class MessageSection extends Component {
    render () {
        let { activeChannel } = this.props;
        return (
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>{activeChannel !== undefined ? activeChannel.name: 'Select a channel'}</div>
                <div className='panel-body messages'>
                    <MessagesList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    addMessage: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
}

export default MessageSection