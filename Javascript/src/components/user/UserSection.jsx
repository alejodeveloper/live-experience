import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserForm from './UserForm.jsx';
import UsersList from './UsersList.jsx';

class UserSection extends Component {
    render () {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Users</strong>
                </div>
                <div className='panel-body channels'>
                    <UsersList {...this.props} />
                    <UserForm {...this.props} />
                </div>
            </div>
        )
    }
}

UserSection.propTypes = {
    setUserName: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
}

export default UserSection