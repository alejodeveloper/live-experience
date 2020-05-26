import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Channel extends Component {
    
    onClickFunction(e) {
        e.preventDefault();
        const { setChannel, channel } = this.props;
        setChannel(channel);
    }

    render() {
        const { channel, activeChannel } = this.props;
        const activeClass = channel === activeChannel ? 'active' : '';
        return (
            <li className={activeClass}>
                <a onClick={this.onClickFunction.bind(this)}>
                    { channel.name }
                </a>
            </li>
        )
    }
}

Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired,
}

export default Channel