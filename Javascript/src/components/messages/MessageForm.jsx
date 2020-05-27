import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component {
    onSubmitFunction(e) {
        e.preventDefault();
        const node = this.refs.message;
        const message = node.value;
        this.props.addMessage(message);
        node.value = '';
    }

    render() {
        let input;
        if (this.props.activeChannel !== undefined) {
            input = (
                <input
                    ref='message'
                    type='text'
                    className='form-control'
                    placeholder='Add message....' 
                />
            )
        }
        return (
            <form onSubmit={this.onSubmitFunction.bind(this)}>
                <div className='form-group'>
                {input}
                </div>
            </form>
        )
    }
}

MessageForm.propTypes = {
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
}

export default MessageForm