import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserComponent extends Component {
    
    onClickFunction(e) {
        e.preventDefault();
        const { setUser, user } = this.props;
        setUser(user);
    }

    render() {
        const { user, activeUser } = this.props;
        const activeClass = user === activeUser ? 'active' : '';
        return (
            <li className={activeClass}>
                <a onClick={this.onClickFunction.bind(this)}>
                    { user.name }
                </a>
            </li>
        )
    }
}

UserComponent.propTypes = {
    user: PropTypes.object.isRequired,
    setUser: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired,
}

export default UserComponent