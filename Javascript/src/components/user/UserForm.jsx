import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    onSubmitFunction(e) {
        e.preventDefault();
        const node = this.refs.userName;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmitFunction.bind(this)}>
                <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    ref='userName'
                />
                </div>
            </form>
        )
    }
}

UserForm.propTypes = {
    setUserName: PropTypes.func.isRequired
}

export default UserForm