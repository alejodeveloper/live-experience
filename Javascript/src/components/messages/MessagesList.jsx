import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message.jsx'


class MessagesList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.messages.map( message => {
                        return <Message 
                            key={message.id}
                            message={message}
                            {...this.props}
                        />
                    })
                }
            </ul>
        )
    }
}

MessagesList.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessagesList