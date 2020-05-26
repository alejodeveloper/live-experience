import React, { component } from 'react';

class ChannelForm extends component {
    onSubmitFunction(e) {
        e.preventDefault();
        const node = this.ref.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmitFunction.bind(this)}>
                <input
                    type='text'
                    ref='channel' 
                />
            </form>
        )
    }
}

ChannelForm.propTypes = {
    addChannel = React.PropTypes.func.isRequired
}