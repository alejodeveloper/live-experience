import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
    onSubmitFunction(e) {
        e.preventDefault();
        const node = this.refs.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmitFunction.bind(this)}>
                <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    ref='channel'
                />
                </div>
            </form>
        )
    }
}

ChannelForm.propTypes = {
    addChannel: PropTypes.func.isRequired
}

export default ChannelForm