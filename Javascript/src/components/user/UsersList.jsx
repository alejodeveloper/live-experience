import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserComponent from './UserComponent.jsx'


class UsersList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.users.map( userObject => {
                        return <UserComponent 
                            key={userObject.id}
                            user={userObject}
                            {...this.props}
                        />
                    })
                }
            </ul>
        )
    }
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    setUser: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired,
}

export default UsersList